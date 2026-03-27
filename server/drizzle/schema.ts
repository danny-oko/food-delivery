import { sqliteTable, AnySQLiteColumn, foreignKey, integer, text, uniqueIndex } from "drizzle-orm/sqlite-core"
  import { sql } from "drizzle-orm"

export const foodsTable = sqliteTable("foods_table", {
	id: integer().primaryKey({ autoIncrement: true }).notNull(),
	name: text().notNull(),
	price: text().notNull(),
	categoryId: integer("category_id").references(() => foodCategoriesTable.id),
	img: text(),
	overview: text(),
	createdAt: integer("created_at"),
	updatedAt: integer("updated_at"),
});

export const usersTable = sqliteTable("users_table", {
	id: integer().primaryKey({ autoIncrement: true }).notNull(),
	role: text().default("USER"),
	name: text(),
	email: text(),
	password: text(),
	age: integer(),
	tel: text(),
},
(table) => [
	uniqueIndex("users_table_email_unique").on(table.email),
]);

export const foodOrderItemsTable = sqliteTable("food_order_items_table", {
	id: integer().primaryKey({ autoIncrement: true }).notNull(),
	quantity: integer().default(1).notNull(),
	foodId: integer("food_id").references(() => foodsTable.id, { onDelete: "cascade" } ),
	foodOrderId: integer("food_order_id").references(() => foodOrderTable.id, { onDelete: "cascade" } ),
	createdAt: integer("created_at"),
	updatedAt: integer("updated_at"),
});

export const foodCategoriesTable = sqliteTable("food_categories_table", {
	id: integer().primaryKey({ autoIncrement: true }).notNull(),
	name: text().notNull(),
	createdAt: integer("created_at"),
	updatedAt: integer("updated_at"),
},
(table) => [
	uniqueIndex("food_categories_table_name_unique").on(table.name),
]);

export const foodOrderTable = sqliteTable("food_order_table", {
	id: integer().primaryKey({ autoIncrement: true }).notNull(),
	userId: integer("user_id").references(() => usersTable.id),
	status: text().default("PENDING"),
	totalAmount: integer("total_amount"),
	createdAt: integer("created_at"),
});

