import { Context } from "hono";
import { getDb } from "../../lib/db";
import { foodCategoriesTable } from "../../db/schema";
import { eq } from "drizzle-orm";

export const getCategoryById = async (c: Context) => {
  try {
    const id = c.req.param("id");
    const db = getDb(c);

    const res = await db.query.foodCategoriesTable.findFirst({
      where: eq(foodCategoriesTable.id, Number(id)),
    });

    if (!res) {
      return c.json({ message: "Category not found" }, 404);
    }

    return c.json({ res }, 200);
  } catch (error: any) {
    return c.json({ error: error.message }, 500);
  }
};
