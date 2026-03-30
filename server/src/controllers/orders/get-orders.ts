import { Context } from "hono";
import { getDb } from "../../lib/db";
import { foodOrderTable } from "../../db/schema";

export const getOrders = async (c: Context) => {
  try {
    const db = getDb(c);

    const ordersFound = await db.query.foodOrderTable.findMany({
      with: {
        user: {
          with: {
            orders: {
              with: {
                items: {
                  with: {
                    food: true,
                  },
                },
              },
            },
          },
        },
      },
    });

    return c.json({ orders: ordersFound }, 200);
  } catch (error: any) {
    return c.json({ error: error.message }, 500);
  }
};
