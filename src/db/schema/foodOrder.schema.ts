import { int, sqliteTable, text, real } from "drizzle-orm/sqlite-core";
import { relations } from "drizzle-orm";
import { foodOrderItems } from "./foodOrderItem";
import { usersTable } from "./users.schema";

// Better for Drizzle compatibility than standard TS enums
export const OrderStatus = {
  PENDING: "PENDING",
  CANCELED: "CANCELED",
  DELIVERED: "DELIVERED",
} as const;

export const foodOrderTable = sqliteTable("food_order_table", {
  id: int("id").primaryKey({ autoIncrement: true }),

  // Changed to real or int for better math operations later
  totalPrice: real("total_price").notNull(),

  userId: int("user_id")
    .notNull()
    .references(() => usersTable.id, { onDelete: "cascade" }), // Good practice: delete orders if user is deleted

  status: text("status").default(OrderStatus.PENDING),

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
