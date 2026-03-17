import { int, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const usersTable = sqliteTable("users_table", {
  id: int("id").primaryKey({ autoIncrement: true }),
  name: text(),
  email: text().unique(),
  password: text(),
  age: int(),
  tel: text(),
});
