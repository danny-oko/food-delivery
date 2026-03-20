import { int, sqliteTable, text } from "drizzle-orm/sqlite-core";
import { relations } from "drizzle-orm";
import { foodCategoriesTable } from "./foodCategory.schema";
import { foodOrderItems } from "./foodOrderItem";

export const foodsTable = sqliteTable("foods_table", {
  id: int().primaryKey({ autoIncrement: true }),
  name: text().notNull(),
  price: text().notNull(),
  categoryId: int().references(() => foodCategoriesTable.id),
  img: text(),
  createdAt: int("created_at", { mode: "timestamp" }).$defaultFn(
    () => new Date(),
  ),
  updatedAt: int("updated_at", { mode: "timestamp" })
    .$defaultFn(() => new Date())
    .$onUpdateFn(() => new Date()),
});

export const foodsRelation = relations(foodsTable, ({ one, many }) => ({
  category: one(foodCategoriesTable, {
    fields: [foodsTable.categoryId],
    references: [foodCategoriesTable.id],
  }),

  foodOrderItems: many(foodOrderItems),
}));
