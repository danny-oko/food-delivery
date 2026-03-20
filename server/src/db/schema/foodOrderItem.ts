import { int, sqliteTable, text } from "drizzle-orm/sqlite-core";
import { relations, sql } from "drizzle-orm";
import { foodsTable } from "./foods.schema";
import { foodOrderTable } from "./foodOrder.schema";

export const foodOrderItems = sqliteTable("food_order_items_table", {
  // 1. Explicitly name the column "id" to help SQLite's auto-increment
  id: int("id").primaryKey({ autoIncrement: true }),

  quantity: int("quantity").notNull().default(1),

  // 2. Explicitly name foreign keys for cleaner SQL
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
