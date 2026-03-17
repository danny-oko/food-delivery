import { Context } from "hono";
import { getDb } from "../../lib/db";
import { foodOrderTable } from "../../db/schema/foodOrder.schema"; // Adjust path as needed

export const createOrder = async (c: Context) => {
  try {
    const db = getDb(c);
    const { totalPrice } = await c.req.json();

    const [newOrder] = await db
      .insert(foodOrderTable)
      .values({
        totalPrice: totalPrice,
        status: "pending",
      })
      .returning();

    return c.json(
      {
        message: "Order header created!",
        order: newOrder,
      },
      201,
    );
  } catch (error) {
    console.error("Order Error:", error);
    return c.json({ message: "Failed to create order" }, 500);
  }
};
