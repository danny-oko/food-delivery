import { Context } from "hono";
import { BodyType } from "../../lib/types";
import { getDb } from "../../lib/db";
import { foodOrderTable } from "../../db/schema";
import { findTotalPrice } from "./findTotalPrice";

export const createOrder = async (c: Context) => {
  try {
    const { orderItems }: BodyType = await c.req.json();
    const db = getDb(c);
    const foodIds = orderItems.map((item) => item.foodId);

    const dbFoods = await db.query.foodsTable.findMany({
      where: (foods, { inArray }) => inArray(foods.id, foodIds),
    });

    const totalPrice = findTotalPrice(dbFoods, orderItems);

    const [newOrder] = await db
      .insert(foodOrderTable)
      .values({ totalPrice: totalPrice.toString() })
      .returning();

    return c.json({ message: "Order created!", order: newOrder }, 201);
  } catch (error) {
    return c.json({ error: "Failed to create order" }, 500);
  }
};
