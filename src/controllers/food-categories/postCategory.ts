import { Hono, Context } from "hono";
import { getDb } from "../../lib/db";
import { foodCategoriesTable } from "../../db/schema";

export const createCategory = async (c: Context) => {
  const { name } = await c.req.json();

  const db = getDb(c);

  const categories = await db.query.foodCategoriesTable.findMany({
    with: {
      foods: true,
    },
  });

  const result = await db
    .insert(foodCategoriesTable)
    .values({ name })
    .returning();

  return c.json(
    {
      message: "Success!",
      new_food_category: result,
      categories: categories,
    },
    201,
  );
};
