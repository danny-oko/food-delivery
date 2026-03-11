import { Context } from "hono";
import { getDrizzleDb } from "../../db/db";
import { foodsTable } from "../../db/schema";

export const getFoods = async (c: Context) => {
  const d1 = c.env.FOOD_DELIVERY;
  const db = getDrizzleDb(d1);

  const foods = await db.select().from(foodsTable);
  return c.json({
    foods_found: foods,
  });
};
