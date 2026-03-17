import { Hono, Context } from "hono";
import { getDb } from "../../lib/db";
import { foodCategoriesTable } from "../../db/schema";

export const getCategories = async (c: Context) => {
  const db = getDb(c);

  const results = await db.select().from(foodCategoriesTable);

  if (results.length === 0) {
    return c.json(
      {
        message: "No results available",
      },
      200,
    );
  }

  return c.json(
    {
      results: results,
    },
    200,
  );
};
