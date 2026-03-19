import { int, sqliteTable, text } from "drizzle-orm/sqlite-core";
import { relations } from "drizzle-orm";
import { foodOrderItems } from "./foodOrderItem";
import { usersTable } from "./users.schema";

enum Status {
  PENDING = "PENDING",
  CANCELED = "CANCELED",
  DELIVERED = "DELIVERED",
}

export const foodOrderTable = sqliteTable("food_order_table", {
  id: int().primaryKey({ autoIncrement: true }),
  totalPrice: text().notNull(),
  userId: int("user_id")
    .notNull()
    .references(() => usersTable.id),

  status: text().default(Status.PENDING),
  createdAt: int("created_at", { mode: "timestamp" }).$defaultFn(
    () => new Date(),
  ),
  updatedAt: int("updated_at", { mode: "timestamp" })
    .$defaultFn(() => new Date())
    .$onUpdate(() => new Date()),
});

export const orderRelations = relations(foodOrderTable, ({ one, many }) => ({
  foodOrderItem: many(foodOrderItems),

  user: one(usersTable, {
    fields: [foodOrderTable.userId],
    references: [usersTable.id],
  }),
}));
