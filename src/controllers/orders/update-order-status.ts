import { Context } from "hono";
import { getDb } from "../../lib/db";
import { foodOrderTable } from "../../db/schema";
import { eq } from "drizzle-orm";

export const updateOrderStatus = async (c: Context) => {
  const id = c.req.param("id");
  const db = getDb(c);

  const { status } = await c.req.json();

  const allowedStatuses = ["PENDING", "DELIVERED", "CANCELLED"];
  if (!allowedStatuses.includes(status)) {
    return c.json({ error: "Invalid status value" }, 400);
  }

  const [updatedOrder] = await db
    .update(foodOrderTable)
    .set({ status: status })
    .where(eq(foodOrderTable.id, Number(id)))
    .returning();

  if (!updatedOrder) {
    return c.json({ error: "Order not found" }, 404);
  }

  return c.json({
    message: "Status updated successfully",
    order: updatedOrder,
  });
};
