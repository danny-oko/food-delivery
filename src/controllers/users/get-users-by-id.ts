import { Context } from "hono";
import { getDb } from "../../lib/db";
import { eq } from "drizzle-orm";
import { usersTable } from "../../db/schema";

export const getUsersById = async (c: Context) => {
  try {
    const id = c.req.param("id");
    const db = getDb(c);

    const res = await db.query.usersTable.findFirst({
      where: eq(usersTable.id, Number(id)),
    });

    if (!res) {
      return c.json({ message: "Could not find!" }, 404);
    }

    return c.json({ res }, 200);
  } catch (error: any) {
    return c.json({ error: error.message }, 500);
  }
};
