import { Hono, Context } from "hono";
import { getDb } from "../../lib/db";
import { foodCategoriesTable } from "../../db/schema";
import { eq } from "drizzle-orm";

export const getCategoryById = async (c: Context) => {
  const id = c.req.param;

  const db = getDb(c);

  const result = await db.query.foodCategoriesTable.findFirst({
    where: eq(foodCategoriesTable.id, Number(id)),
    with: {
      foods: true,
    },
  });

  return c.json(
    {
      id_used: id,
      retult: result,
    },
    200,
  );
};
