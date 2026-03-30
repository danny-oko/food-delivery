import { Context } from "hono";
import { getDb } from "../../lib/db";
import { OrderType } from "../../lib/types";
import { foodOrderItems, foodOrderTable } from "../../db/schema";

export const createNewOrder = async (c: Context) => {
  try {
    const body = await c.req.json();
    const { orderItems, user }: OrderType = body;
    const db = getDb(c);
    const userId = Number(user.id);

    const findFoodIds = orderItems.map((item) => item.foodId);

    const findFoodsById = await db.query.foodsTable.findMany({
      where: (foods, { inArray }) => inArray(foods.id, findFoodIds),
    });

    const totalPriceNumber = orderItems.reduce((acc, item) => {
      const foodData = findFoodsById.find((f) => f.id === item.foodId);
      if (foodData) {
        return acc + Number(foodData.price) * item.quantity;
      }
      return acc;
    }, 0);

    const [newOrder] = await db
      .insert(foodOrderTable)
      .values({
        totalAmount: totalPriceNumber,
        userId: userId,
      })
      .returning();

    const [newOrderItem] = await db
      .insert(foodOrderItems)
      .values({
      // nam
      })
      .returning();

    console.log(newOrderItem);

    return c.json({ msg: "Success", order: newOrder, order_items: "hi" }, 201);
  } catch (error: any) {
    return c.json({ error: error.message }, 500);
  }
};
