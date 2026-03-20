import { Context } from "hono";
import { getDb } from "../../lib/db";
import { OrderType } from "../../lib/types";
import { foodOrderTable } from "../../db/schema";

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
        totalPrice: totalPriceNumber.toString(),
        userId: userId,
      })
      .returning();

    return c.json({ msg: "Success", order: newOrder }, 201);
  } catch (error: any) {
    return c.json({ error: error.message }, 500);
  }
};
