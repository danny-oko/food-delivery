import { Context } from "hono";
import { getDb } from "../../lib/db";
import { foodsTable } from "../../db/schema";
import { eq } from "drizzle-orm";

export const postFood = async (c: Context) => {
  const body = await c.req.json();
  const { name, price, category } = body;

  if (!name || !price) {
    return c.json(
      {
        error: "Name and Price are required!",
      },
      400,
    );
  }

  const db = getDb(c);
  const result = await db
    .update(foodsTable)
    .set({ name, price, category })
    .returning();

  return c.json(
    {
      food_created: result,
    },
    201,
  );
};
