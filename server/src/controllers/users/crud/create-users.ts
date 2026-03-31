import bcrypt from "bcryptjs";
import { Context } from "hono";
import { sign } from "hono/jwt";
import { usersTable } from "../../../db/schema";
import { getDb } from "../../../lib/db";

export const createUser = async (c: Context) => {
  try {
    const body = await c.req.json().catch(() => null);

    if (!body) return c.json({ message: "All fields are required!" }, 400);

    const { role, name, email, password, age, tel } = body;

    if (!name || !email || !password || !tel) {
      return c.json({ message: "All fields are required!" }, 400);
    }

    const normalizedEmail = email.toLowerCase().trim();
    const hashedPassword = await bcrypt.hash(password, 10);
    const db = getDb(c);

    const [newUser] = await db
      .insert(usersTable)
      .values({
        name,
        role: role || "USER",
        email: normalizedEmail,
        password: hashedPassword,
        age: age ? Number(age) : null,
        tel,
      })
      .returning({
        id: usersTable.id,
        role: usersTable.role,
        name: usersTable.name,
        email: usersTable.email,
        age: usersTable.age,
        tel: usersTable.tel,
      });

    const secret = c.env.JWT_SECRET;

    const token = await sign(
      {
        sub: newUser.id,
        role: newUser.role,
        exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24,
      },
      secret,
    );

    return c.json(
      {
        message: "User created successfully!",
        user: newUser,
        token: token,
      },
      201,
    );
  } catch (error: any) {
    // console.error(error);

    const isDuplicate = error.message?.includes("UNIQUE constraint failed");

    return c.json(
      {
        message: isDuplicate
          ? "Email already exists"
          : "Registration failed. Please try again.",
      },
      isDuplicate ? 409 : 500,
    );
  }
};
