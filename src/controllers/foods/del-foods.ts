import { Context } from "hono";
import { eq } from "drizzle-orm";
import { getDrizzleDb } from "../../db/db";
import { foodsTable } from "../../db/schema/food";

export const deleteFood = async (c: Context) => {
  const id = Number(c.req.param("id"));
  if (isNaN(id)) return c.json({ error: "Invalid ID" }, 400);

  const db = getDrizzleDb(c.env.FOOD_DELIVERY);
  const result = await db
    .delete(foodsTable)
    .where(eq(foodsTable.id, id))
    .returning();

  if (!result.length) return c.json({ error: "Food not found" }, 404);
  return c.json({ deleted: result[0] });
};
