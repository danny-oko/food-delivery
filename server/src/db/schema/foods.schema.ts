import { int, sqliteTable, text } from "drizzle-orm/sqlite-core";
import { relations } from "drizzle-orm";
import { foodCategoriesTable } from "./foodCategory.schema";
import { foodOrderItems } from "./foodOrderItem";

export const foodsTable = sqliteTable("foods_table", {
  id: int("id").primaryKey({ autoIncrement: true }),
  name: text("name").notNull(),
  price: text("price").notNull(),
  categoryId: int("category_id").references(() => foodCategoriesTable.id),
  img: text("img"),
  overview: text("overview"),
  createdAt: int("created_at", { mode: "timestamp" }).$defaultFn(
    () => new Date(),
  ),
  updatedAt: int("updated_at", { mode: "timestamp" })
    .$defaultFn(() => new Date())
    .$onUpdate(() => new Date()),
});

export const foodsRelations = relations(foodsTable, ({ one, many }) => ({
  category: one(foodCategoriesTable, {
    fields: [foodsTable.categoryId],
    references: [foodCategoriesTable.id],
  }),
  orderItems: many(foodOrderItems),
}));
