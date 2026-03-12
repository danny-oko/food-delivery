import { int, sqliteTable, text, real } from "drizzle-orm/sqlite-core";

export const foodsTable = sqliteTable("foods_table", {
  id: int().primaryKey({ autoIncrement: true }),
  name: text().notNull(),
  description: text(),
  price: real().notNull(),
  category: text(),
});
