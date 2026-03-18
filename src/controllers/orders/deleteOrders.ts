import { Context } from "hono";
import { getDb } from "../../lib/db";
import { foodOrderTable } from "../../db/schema";
import { eq } from "drizzle-orm";

export const deleteOrders = async (c: Context) => {
  const id = c.req.param("id");
  const db = getDb(c);

  if (!id) {
    return c.json(
      {
        message: "Could not find order id",
      },
      403,
    );
  }

  const res = await db
    .delete(foodOrderTable)
    .where(eq(foodOrderTable.id, Number(id)))
    .returning();

  return c.json(
    {
      message: "Deleted order Successfully!",
      result: res[0],
    },
    200,
  );
};
