import { int, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const Categories = sqliteTable("categories_table", {
  id: int().primaryKey({ autoIncrement: true }),
  name: text().notNull(),
  createdAt: int("created_at", { mode: "timestamp" }).$defaultFn(
    () => new Date(),
  ),
  updatedAt: int("updated_at", { mode: "timestamp" }).$defaultFn(
    () => new Date(),
  ),
});
