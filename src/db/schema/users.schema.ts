import { relations } from "drizzle-orm";
import { int, sqliteTable, text } from "drizzle-orm/sqlite-core";
import { foodOrderTable } from "./foodOrder.schema";

enum Role {
  ADMIN = "ADMIN",
  USER = "USER",
}

export const usersTable = sqliteTable("users_table", {
  id: int().primaryKey({ autoIncrement: true }),
  role: text().default(Role.USER),
  name: text(),
  email: text().unique(),
  password: text(),
  age: int(),
  tel: text(),
});

export const userRelations = relations(usersTable, ({ many }) => ({
  orders: many(foodOrderTable),
}));
