import { sqliteTable, AnySQLiteColumn, uniqueIndex, integer, text, foreignKey, real } from "drizzle-orm/sqlite-core"
  import { sql } from "drizzle-orm"

export const usersTable = sqliteTable("users_table", {
	id: integer().primaryKey({ autoIncrement: true }).notNull(),
	email: text(),
	password: text(),
	age: integer(),
	tel: text(),
	name: text(),
	role: text().default("USER"),
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

export const foodOrderTable = sqliteTable("food_order_table", {
	id: integer().primaryKey({ autoIncrement: true }).notNull(),
	totalPrice: real("total_price").notNull(),
	userId: integer("user_id").notNull().references(() => usersTable.id, { onDelete: "cascade" } ),
	status: text().default("PENDING"),
	createdAt: integer("created_at"),
	updatedAt: integer("updated_at"),
});

export const foodsTable = sqliteTable("foods_table", {
	id: integer().primaryKey({ autoIncrement: true }).notNull(),
	name: text().notNull(),
	price: text().notNull(),
	categoryId: integer("category_id").references(() => foodCategoriesTable.id),
	img: text(),
	overview: text(),
	createdAt: integer("created_at").default(sql`(strftime('%s', 'now'))`),
	updatedAt: integer("updated_at").default(sql`(strftime('%s', 'now'))`),
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

