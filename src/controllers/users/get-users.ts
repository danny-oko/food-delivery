import { Context } from "hono";
import { getDb } from "../../lib/db";
import { usersTable } from "../../db/schema";

export const getUsers = async (c: Context) => {
  try {
    const db = getDb(c);
    const res = await db.select().from(usersTable);

    return c.json({ res }, 200);
  } catch (error: any) {
    return c.json({ error: error.message }, 500);
  }
};
