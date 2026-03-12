import { Context } from "hono";
import { getDrizzleDb } from "../../db/db";
import { foodsTable } from "../../db/schema/food";

export const postFood = async (c: Context) => {
  const body = await c.req.json();
  const { name, description, price, category } = body;

  if (!name || price === undefined) {
    return c.json({ error: "name and price are required" }, 400);
  }

  const db = getDrizzleDb(c.env.FOOD_DELIVERY);
  const result = await db
    .insert(foodsTable)
    .values({ name, description, price, category })
    .returning();

  return c.json({ food: result[0] }, 201);
};
