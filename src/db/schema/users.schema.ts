import { int, sqliteTable, text } from "drizzle-orm/sqlite-core";
import { relations, sql } from "drizzle-orm";

export const user = sqliteTable("users_table", {
  id: int().primaryKey({ autoIncrement: true }),
  email: text().unique(),
  password: text(),
  age: int(),
  tel: text(),
});
