import { int, sqliteTable, text } from "drizzle-orm/sqlite-core";
import { relations, sql } from "drizzle-orm";

export const foodOrderTable = sqliteTable("food_order_table", {
  id: int().primaryKey({ autoIncrement: true }),
  totalPrice: text(),
  status: text({ enum: ["pending", "calcelled", "delivered"] }).default(
    "pending",
  ),
  // foodOrderItems:
  createdAt: int("created_at", { mode: "timestamp" }).$defaultFn(
    () => new Date(),
  ),
  updatedAt: int("updated_at", { mode: "timestamp" })
    .$defaultFn(() => new Date())
    .$onUpdate(() => new Date()),
});
