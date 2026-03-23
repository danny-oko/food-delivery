import { Context } from "hono";
import { getDb } from "../../lib/db";
import { Bindings } from "../../lib/types";
import { eq } from "drizzle-orm";
import { foodCategoriesTable } from "../../db/schema";

export const deleteCategory = async (c: Context<{ Bindings: Bindings }>) => {
  try {
    const id = c.req.param("id");
    const db = getDb(c);

    const deletedRows = await db
      .delete(foodCategoriesTable)
      .where(eq(foodCategoriesTable.id, Number(id)))
      .returning();

    if (deletedRows.length === 0) {
      return c.json({ error: "Category not found" }, 404);
    }

    return c.json(
      {
        message: "Category deleted successfully",
        deleted_category: deletedRows[0],
      },
      200,
    );
  } catch (error: any) {
    return c.json({ error: error.message }, 500);
  }
};
