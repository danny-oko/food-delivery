import { Context } from "hono";
import { getDb } from "../../lib/db";
import { foodsTable } from "../../db/schema";
import { Bindings } from "../../lib/types";
import { eq } from "drizzle-orm";

export const updateFood = async (c: Context<{ Bindings: Bindings }>) => {
  const id = c.req.param("id");
  const { name, price, categoryId } = await c.req.json();
  const db = getDb(c);

  const res = await db
    .update(foodsTable)
    .set({ name, price, categoryId })
    .where(eq(foodsTable.id, Number(id)))
    .returning();

  if (!res.length) {
    return c.json({ error: "Food not found" }, 404);
  }

  return c.json({ updated_food: res[0] }, 200);
};
