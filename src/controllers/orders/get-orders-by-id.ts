import { Context } from "hono";
import { getDb } from "../../lib/db";
import { foodOrderTable } from "../../db/schema";
import { eq } from "drizzle-orm";

export const getOrdersById = async (c: Context) => {
  const id = c.req.param("id");
  const db = getDb(c);

  const orderFound = await db.query.foodOrderTable.findFirst({
    where: (table, { eq }) => eq(table.id, Number(id)),
    with: {
      user: true,
      foodOrderItem: {
        with: {
          food: true,
        },
      },
    },
  });

  if (!orderFound) {
    return c.json({ message: "Order not found" }, 404);
  }

  return c.json(
    {
      message: "Success!",
      order: orderFound,
    },
    200,
  );
};
