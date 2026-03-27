import { Hono, Context } from "hono";
import { getDb } from "../../lib/db";
import { foodCategoriesTable } from "../../db/schema";
import { eq } from "drizzle-orm";

export const getCategories = async (c: Context) => {
  try {
    const db = getDb(c);

    const res = await db.query.foodCategoriesTable.findMany({
      with: {
        foods: true,
      },
    });
  

    if (res.length === 0) {
      return c.json({ message: "No results available" }, 200);
    }

    return c.json({ results: res }, 200);
  } catch (error: any) {
    return c.json({ error: error }, 500);
  }
};
