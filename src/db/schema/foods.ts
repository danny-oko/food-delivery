import { int, sqliteTable, text } from "drizzle-orm/sqlite-core";
import { Categories } from "./categories.type";

export const Foodstable = sqliteTable("foods_table", {
  id: int().primaryKey({ autoIncrement: true }),
  foodName: text().notNull(),
  price: text().notNull(),
  image: text(),
  ingredients: text(),
  categoryId: int("category_id").references(() => Categories.id),

  createdAt: int("created_at", { mode: "timestamp" }).$defaultFn(
    () => new Date(),
  ),
  updatedAt: int("updated_at", { mode: "timestamp" }).$defaultFn(
    () => new Date(),
  ),
});