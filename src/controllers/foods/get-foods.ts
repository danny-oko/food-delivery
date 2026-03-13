import { Context } from "hono";
import { getDrizzleDb } from "../../db/db";
import { foodsTable } from "../../db/schema/foods";

export const getFoods = async (c: Context) => {
  const db = getDrizzleDb(c.env.FOOD_DELIVERY);
  const results = await db.select().from(foodsTable);
  return c.json({ foods: results });
};
