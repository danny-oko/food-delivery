import { Context } from "hono";
import { getDb } from "../../lib/db";
import { foodCategoriesTable } from "../../db/schema";
import { eq } from "drizzle-orm";

export const deleteCategory = async (c: Context) => {
  const id = c.req.param("id");

  const db = getDb(c);

  const result = await db
    .delete(foodCategoriesTable)
    .where(eq(foodCategoriesTable.id, Number(id)))
    .returning();

  if (result.length === 0) {
    return c.json(
      {
        error: "Category not found",
      },
      404,
    );
  }

  return c.json(
    { message: "Category Deleted Successfully!", result: result[0] },
    200,
  );
};
