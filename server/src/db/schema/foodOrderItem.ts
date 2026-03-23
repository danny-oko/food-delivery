import { int, sqliteTable } from "drizzle-orm/sqlite-core";
import { relations } from "drizzle-orm";
import { foodsTable } from "./foods.schema";
import { foodOrderTable } from "./foodOrder.schema";

export const foodOrderItems = sqliteTable("food_order_items_table", {
  id: int("id").primaryKey({ autoIncrement: true }),
  quantity: int("quantity").notNull().default(1),
  foodId: int("food_id").references(() => foodsTable.id, {
    onDelete: "cascade",
  }),
  foodOrderId: int("food_order_id").references(() => foodOrderTable.id, {
    onDelete: "cascade",
  }),
  createdAt: int("created_at", { mode: "timestamp" }).$defaultFn(
    () => new Date(),
  ),
  updatedAt: int("updated_at", { mode: "timestamp" })
    .$defaultFn(() => new Date())
    .$onUpdate(() => new Date()),
});

export const foodOrderItemsRelations = relations(foodOrderItems, ({ one }) => ({
  food: one(foodsTable, {
    fields: [foodOrderItems.foodId],
    references: [foodsTable.id],
  }),
  order: one(foodOrderTable, {
    fields: [foodOrderItems.foodOrderId],
    references: [foodOrderTable.id],
  }),
}));
