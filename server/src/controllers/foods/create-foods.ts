import { foodsTable } from "../../db/schema";
import { getDb } from "../../lib/db";
import { AppContext } from "../../lib/types";

export const postFood = async (c: AppContext) => {
  try {
    const body = await c.req.json();
    const { name, price, categoryId, img, overview } = body;
    console.log("body: ", body);

    if (!name || !price) {
      return c.json({ error: "Name and price are required" }, 400);
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
