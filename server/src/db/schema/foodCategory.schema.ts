import { int, sqliteTable, text } from "drizzle-orm/sqlite-core";
import { relations } from "drizzle-orm";
import { foodsTable } from "./foods.schema";

export const foodCategoriesTable = sqliteTable("food_categories_table", {
  id: int().primaryKey({ autoIncrement: true }),
  name: text().notNull().unique(),
  createdAt: int("created_at", { mode: "timestamp" }).$defaultFn(
    () => new Date(),
  ),
  updatedAt: int("updated_at", { mode: "timestamp" })
    .$defaultFn(() => new Date())
    .$onUpdate(() => new Date()),
});

export const foodCategoriesRelations = relations(
  foodCategoriesTable,
  ({ many }) => ({
    foods: many(foodsTable),
  }),
);
