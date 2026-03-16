import { Hono, Context } from "hono";
import { getDb } from "../../lib/db";
import { foodCategoriesTable } from "../../db/schema";

export const getCategories = async (c: Context) => {
  const db = getDb(c);

  const results = await db.query.foodCategoriesTable.findMany({
    with: {
      foods: true, // ← includes all related foods
    },
  });

  return c.json({
    categories: results,
  });
};
