import { int, sqliteTable, text } from "drizzle-orm/sqlite-core";
import { sql } from "drizzle-orm";

export const foodsTable = sqliteTable("foods_table", {
  id: int().primaryKey({ autoIncrement: true }),
  name: text().notNull(),
  price: text().notNull(),
  category: text(),
  createdAt: int("created_at", { mode: "timestamp" }).$defaultFn(
    () => new Date(),
  ),
  updatedAt: int("updated_at", { mode: "timestamp" })
    .$defaultFn(() => new Date())
    .$onUpdateFn(() => new Date()),
});
