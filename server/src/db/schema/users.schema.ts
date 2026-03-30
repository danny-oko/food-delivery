import { relations } from "drizzle-orm";
import { int, sqliteTable, text } from "drizzle-orm/sqlite-core";
import { foodOrderTable } from "./foodOrder.schema";

export const Role = {
  ADMIN: "ADMIN",
  USER: "USER",
} as const;

export const usersTable = sqliteTable("users_table", {
  id: int("id").primaryKey({ autoIncrement: true }),
  role: text("role").default(Role.USER),
  name: text("name"),
  email: text("email").unique(),
  password: text("password"),
  age: int("age"),
  tel: text("tel"),
});

export const userRelations = relations(usersTable, ({ one, many }) => ({
  orders: one(foodOrderTable),
}));
