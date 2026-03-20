import { Hono, Context } from "hono";
import { getDb } from "../../lib/db";
import { foodCategoriesTable } from "../../db/schema";

export const createCategory = async (c: Context) => {
  try {
    const { name } = await c.req.json();

    if (!name) {
      return c.json({ error: "Name is required" }, 400);
    }

    const db = getDb(c);
    const result = await db
      .insert(foodCategoriesTable)
      .values({ name })
      .returning();

    return c.json({ message: "Success!", new_category: result[0] }, 201);
  } catch (error: any) {
    return c.json({ error: error.message }, 500);
  }
};
