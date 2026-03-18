import { Context } from "hono";
import { getDb } from "../../lib/db";

export const getOrders = async (c: Context) => {
  const db = getDb(c);
  const orders = await db.query.foodOrderTable.findMany({
    with: {
      foodOrderItem: {
        with: {
          food: true,
        },
      },
    },
  });
  return c.json({ orders: orders });
};
