import { foodsTable } from "../../db/schema";

type Food = typeof foodsTable.$inferSelect;
type OrderItem = { foodId: number; quantity: number };

export const findTotalPrice = (
  dbFoods: Food[],
  orderItems: OrderItem[],
): number => {
  return dbFoods.reduce((acc, food) => {
    const userItem = orderItems.find((item) => item.foodId === food.id);
    const quantity = userItem?.quantity || 0;

    return acc + Number(food.price) * quantity;
  }, 0);
};
