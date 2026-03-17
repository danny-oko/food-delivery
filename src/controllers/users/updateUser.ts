import { Context } from "hono";
import { getDb } from "../../lib/db";
import { Bindings } from "../../lib/types";
import { eq } from "drizzle-orm";
import { usersTable } from "../../db/schema";

export const updateUser = async (c: Context<{ Bindings: Bindings }>) => {
  try {
    const id = c.req.param("id");
    const body = await c.req.json();
    const db = getDb(c);

    const res = await db
      .update(usersTable)
      .set(body)
      .where(eq(usersTable.id, Number(id)))
      .returning();

    if (!res.length) {
      return c.json({ error: "User not found" }, 404);
    }

    return c.json({ message: "User updated!", user: res[0] }, 200);
  } catch (error: any) {
    if (error.message.includes("UNIQUE constraint failed")) {
      return c.json({ error: "Email already taken by another user" }, 409);
    }
    return c.json({ error: "Internal Server Error" }, 500);
  }
};
