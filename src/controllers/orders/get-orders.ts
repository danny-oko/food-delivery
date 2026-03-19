import { Context } from "hono";
import { getDb } from "../../lib/db";
import { foodOrderTable } from "../../db/schema";

export const getOrders = async (c: Context) => {
  const db = getDb(c);

  const ordersFound = await db.query.foodOrderTable.findMany({
    with: {
      user: true,
      foodOrderItem: {
        with: {
          food: true,
        },
      },
    },
  });
  return c.json(
    {
      message: "Success!",
      orders_found: ordersFound,
    },
    200,
  );
};
