import { Context } from "hono";
import { getDb } from "../../lib/db";
import { usersTable } from "../../db/schema";

export const createUser = async (c: Context) => {
  try {
    const { name, email, password, age, tel } = await c.req.json();

    if (!name || !email || !password || !tel) {
      return c.json({ message: "All fields are required!" }, 400);
    }

    const db = getDb(c);

    const [newUser] = await db
      .insert(usersTable)
      .values({
        name,
        email,
        password,
        age,
        tel,
      })
      .returning();

    return c.json(
      {
        message: "User created successfully!",
        user: newUser,
      },
      201,
    );
  } catch (error: any) {
    return c.json(
      {
        message:
          error.message || "Internal Server Error or User already exists",
      },
      500,
    );
  }
};
