import { int, sqliteTable, text } from "drizzle-orm/sqlite-core";
import { relations } from "drizzle-orm";
import { foodOrderItems } from "./foodOrderItem";

export const foodOrderTable = sqliteTable("food_order_table", {
  id: int().primaryKey({ autoIncrement: true }),
  totalPrice: text(),
  status: text({ enum: ["pending", "cancelled", "delivered"] }).default(
    "pending",
  ),
  createdAt: int("created_at", { mode: "timestamp" }).$defaultFn(
    () => new Date(),
  ),
  updatedAt: int("updated_at", { mode: "timestamp" })
    .$defaultFn(() => new Date())
    .$onUpdate(() => new Date()),
});

export const orderRelations = relations(foodOrderTable, ({ many }) => ({
  foodOrderItem: many(foodOrderItems),
}));
