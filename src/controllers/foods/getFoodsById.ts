import { Hono, Context } from "hono";
import { getDb } from "../../lib/db";
import { foodsTable } from "../../db/schema";
import { eq } from "drizzle-orm";

export const getFoodsById = async (c: Context) => {
  const id = c.req.param("id");

  const db = getDb(c);

  const food = await db
    .select()
    .from(foodsTable)
    .where(eq(foodsTable.id, Number(id)));

  c.json(
    {
      food_found: food,
    },
    200,
  );
};
