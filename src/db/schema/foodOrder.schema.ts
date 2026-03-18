import { int, sqliteTable, text } from "drizzle-orm/sqlite-core";
import { relations } from "drizzle-orm";
import { foodOrderItems } from "./foodOrderItem";

enum Status {
  PENDING = "PENDING",
  CANCELED = "CANCELED",
  DELIVERED = "DELIVERED",
}

export const foodOrderTable = sqliteTable("food_order_table", {
  id: int().primaryKey({ autoIncrement: true }),
  totalPrice: text().notNull(),
  status: text().default(Status.PENDING),
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
