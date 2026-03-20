import { Hono, Context } from "hono";
import { getDb } from "../../lib/db";
import { foodsTable } from "../../db/schema";
import { eq } from "drizzle-orm";

export const getFoodsById = async (c: Context) => {
  try {
    const id = c.req.param("id");
    const db = getDb(c);

    const food = await db
      .select()
      .from(foodsTable)
      .where(eq(foodsTable.id, Number(id)));

    if (!food.length) {
      return c.json({ error: "Food not found" }, 404);
    }

    return c.json({ food_found: food[0] }, 200);
  } catch (error: any) {
    return c.json({ error: error.message }, 500);
  }
};
