import { Context } from "hono";
import { getDb } from "../../lib/db";
import { foodOrderTable } from "../../db/schema";

export const getOrders = async (c: Context) => {
  try {
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

    return c.json({ message: "Success!", orders_found: ordersFound }, 200);
  } catch (error: any) {
    return c.json({ error: error.message }, 500);
  }
};
