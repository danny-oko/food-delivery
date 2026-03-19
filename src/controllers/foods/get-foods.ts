import { Context } from "hono";
import { getDb } from "../../lib/db";
import { foodsTable } from "../../db/schema";
import { Bindings } from "../../lib/types";

export const getFoods = async (c: Context<{ Bindings: Bindings }>) => {
  try {
    const db = getDb(c);
    const res = await db.select().from(foodsTable);

    return c.json({ foods: res }, 200);
  } catch (error: any) {
    return c.json({ error: error.message }, 500);
  }
};
