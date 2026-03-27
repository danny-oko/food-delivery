import { getDb } from "../../lib/db";
import { foodsTable } from "../../db/schema";
import { AppContext } from "../../lib/types";
import { logger } from "hono/logger";

export const postFood = async (c: AppContext) => {
  console.log("=======5======");

  try {
    console.log("=======6======");
    const body = await c.req.json();
    const { name, price, categoryId, img, overview } = body;
    console.log("body: ", body);
    console.log("=======7======");
    // if (!name || !price) {
    //   return c.json({ error:}, 400);
    // }
    console.log("=======8======");
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
