import { Context } from "hono";
import { getDrizzleDb } from "../../db/db";
import { foodsTable } from "../../db/schema/food";

// export const postFood = async (c: Context) => {
//   const body = await c.req.json();
//   const { name, description, price, category } = body;

//   if (!name || price === undefined) {
//     return c.json({ error: "name and price are required" }, 400);
//   }
//   const d1 = c.env.FOOD_DELIVERY;
//   const db = getDrizzleDb(d1);

//   const result = await db
//     .insert(foodsTable)
//     .values({ name, description, price, category })
//     .returning();

//   return c.json({ food: result[0] }, 201);
// };

export const postFood = async (c: Context) => {
  const body = await c.req.json();
  const { name, description, price, category } = body;

  if (!name || !price) return c.json({ error: "failed" });

  const d1 = c.env.FOOD_DELIVERY; const db = getDrizzleDb(d1);
  const result = await db
    .insert(foodsTable)
    .values({ name, description, price, category })
    .returning();

  return c.json({
    food_created: result,
  });
};