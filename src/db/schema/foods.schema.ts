import { int, sqliteTable, text } from "drizzle-orm/sqlite-core";
import { relations, sql } from "drizzle-orm";
import { foodCategoriesTable } from "./foodCategory.schema";

export const foodsTable = sqliteTable("foods_table", {
  id: int().primaryKey({ autoIncrement: true }),
  name: text().notNull(),
  price: text().notNull(),
  categoryId: int(),
  // foodOrderItems relations
  createdAt: int("created_at", { mode: "timestamp" }).$defaultFn(
    () => new Date(),
  ),
  updatedAt: int("updated_at", { mode: "timestamp" })
    .$defaultFn(() => new Date())
    .$onUpdateFn(() => new Date()),
});

export const foodsRelations = relations(foodsTable, ({ one }) => ({
  category: one(foodCategoriesTable, {
    fields: [foodsTable.categoryId],
    references: [foodCategoriesTable.id],
  }),
}));
