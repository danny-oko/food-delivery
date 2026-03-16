import { int, sqliteTable, text } from "drizzle-orm/sqlite-core";
import { relations, sql } from "drizzle-orm";
import { foodsTable } from "./foods.schema";

export const foodCategoriesTable = sqliteTable("food_categories_table", {
  id: int().primaryKey({ autoIncrement: true }),
  name: text(),
  createdAt: int("created_at", { mode: "timestamp" }).$defaultFn(
    () => new Date(),
  ),
  updatedAt: int("updated_at", { mode: "timestamp" })
    .$defaultFn(() => new Date())
    .$onUpdate(() => new Date()),
});

// relation
export const foodCategoriesRelation = relations(
  foodCategoriesTable,
  ({ many }) => ({
    foods: many(foodsTable),
  }),
);
