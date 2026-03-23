import { Context } from "hono";
import { getDb } from "../../../../lib/db";
import { usersTable } from "../../../../db/schema";
import { eq } from "drizzle-orm";
import bcrypt from "bcryptjs";
import { sign } from "hono/jwt";
import { User } from "../../../../lib/types";

export const userLogIn = async (c: Context) => {
  try {
    const { email, password } = await c.req.json();
    const db = getDb(c);

    const [user] = await db
      .select()
      .from(usersTable)
      .where(eq(usersTable.email, email.toLowerCase().trim()))
      .limit(1);

    if (!user) {
      return c.json({ message: "Invalid email or password" }, 401);
    }

    const isValidPassword = await bcrypt.compare(
      String(password),
      String(user.password),
    );

    if (!isValidPassword) {
      return c.json({ message: "Invalid email or password" }, 401);
    }

    const secret = c.env.JWT_SECRET;
    const token = await sign(
      {
        sub: user.id,
        role: user.role,
        exp: Math.floor(Date.now() / 1000) + 60 * 60,
      },
      secret,
      "HS256",
    );

    return c.json({
      message: "Login Success!",
      token: token,
      user: {
        id: user.id,
        name: user.name,
        role: user.role,
      },
    });
  } catch (error: any) {
    console.error(error);
    return c.json({ message: "Internal Server Error" }, 500);
  }
};
