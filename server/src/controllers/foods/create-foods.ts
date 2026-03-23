import { Context } from "hono";
import { getDb } from "../../lib/db";
import { foodsTable } from "../../db/schema";

export const postFood = async (c: Context) => {
  try {
    const body = await c.req.json();
    const { name, price, categoryId, img, overview } = body;

    if (!name || !price) {
      return c.json({ error: "Name and Price are required!" }, 400);
    }

    const db = getDb(c);

    const result = await db
      .insert(foodsTable)
      .values({
        name: name,
        price: price,
        categoryId: categoryId,
        img: img,
        overview: overview,
      })
      .returning();

    return c.json({ food_created: result[0] }, 201);
  } catch (error: any) {
    return c.json({ error: error.message }, 500);
  }
};
