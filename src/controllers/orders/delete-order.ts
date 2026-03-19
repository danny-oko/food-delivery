import { Context } from "hono";
import { getDb } from "../../lib/db";
import { foodOrderItems, foodOrderTable } from "../../db/schema";
import { eq } from "drizzle-orm";

export const deleteOrders = async (c: Context) => {
  const id = Number(c.req.param("id"));
  const db = getDb(c);

  if (isNaN(id)) {
    return c.json({ message: "Invalid ID format" }, 400);
  }

  try {
    await db.delete(foodOrderItems).where(eq(foodOrderItems.foodOrderId, id));

    const [deletedOrder] = await db
      .delete(foodOrderTable)
      .where(eq(foodOrderTable.id, id))
      .returning();

    if (!deletedOrder) {
      return c.json({ message: "Order not found" }, 404);
    }

    return c.json(
      {
        msg: "Deletion success",
        deletedOrder,
      },
      200,
    );
  } catch (error) {
    return c.json({ message: "Failed to delete order" }, 500);
  }
};
