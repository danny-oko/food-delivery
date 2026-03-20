import { Context } from "hono";
import { getDb } from "../../../lib/db";
import { usersTable } from "../../../db/schema";
import { eq } from "drizzle-orm";

export const deleteUsers = async (c: Context) => {
  try {
    const id = c.req.param("id");
    const db = getDb(c);

    const result = await db
      .delete(usersTable)
      .where(eq(usersTable.id, Number(id)))
      .returning();

    if (result.length === 0) {
      return c.json({ error: "User not found" }, 404);
    }

    return c.json(
      { message: "User Deleted Successfully!", result: result[0] },
      200,
    );
  } catch (error: any) {
    return c.json({ error: error.message }, 500);
  }
};
