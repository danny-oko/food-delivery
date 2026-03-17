import { int, sqliteTable, text } from "drizzle-orm/sqlite-core";
import { relations, sql } from "drizzle-orm";

export const foodOrderItems = sqliteTable("food_order_items_table", {
  id: int().primaryKey({ autoIncrement: true }),
  quantity: int(),
  // food: relation
  foodOrderId: int(),
  createdAt: int("created_at", { mode: "timestamp" }).$defaultFn(
    () => new Date(),
  ),
  updatedAt: int("updated_at", { mode: "timestamp" })
    .$defaultFn(() => new Date())
    .$onUpdate(() => new Date()),
});
