import { int, sqliteTable, text } from "drizzle-orm/sqlite-core";
import { relations } from "drizzle-orm";
import { usersTable } from "./users.schema";
import { foodOrderItems } from "./foodOrderItem";

export const foodOrderTable = sqliteTable("food_order_table", {
  id: int("id").primaryKey({ autoIncrement: true }),
  userId: int("user_id").references(() => usersTable.id),
  status: text("status", {
    enum: ["PENDING", "CANCELED", "DELIVERED"],
  }).default("PENDING"),
  totalAmount: int("total_amount"),
  createdAt: int("created_at", { mode: "timestamp" }).$defaultFn(
    () => new Date(),
  ),
});

export const foodOrderRelations = relations(
  foodOrderTable,
  ({ one, many }) => ({
    user: one(usersTable, {
      fields: [foodOrderTable.userId],
      references: [usersTable.id],
    }),
    items: many(foodOrderItems),
  }),
);
