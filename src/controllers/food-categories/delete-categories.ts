import { Context } from "hono";
import { getDb } from "../../lib/db";
import { Bindings } from "../../lib/types";
import { eq } from "drizzle-orm";
import { usersTable } from "../../db/schema";

export const updateCategory = async (c: Context<{ Bindings: Bindings }>) => {
  try {
    const id = c.req.param("id");
    const { name, email, password, age, tel } = await c.req.json();
    const db = getDb(c);

    const res = await db
      .update(usersTable)
      .set({ name, email, password, age, tel })
      .where(eq(usersTable.id, Number(id)))
      .returning();

    if (!res.length) {
      return c.json({ error: "User not found" }, 404);
    }

    return c.json({ updated_user: res[0] }, 200);
  } catch (error: any) {
    return c.json({ error: error.message }, 500);
  }
};
