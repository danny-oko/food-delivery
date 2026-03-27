import { relations } from "drizzle-orm/relations";
import { foodCategoriesTable, foodsTable, foodOrderTable, foodOrderItemsTable, usersTable } from "./schema";

export const foodsTableRelations = relations(foodsTable, ({one, many}) => ({
	foodCategoriesTable: one(foodCategoriesTable, {
		fields: [foodsTable.categoryId],
		references: [foodCategoriesTable.id]
	}),
	foodOrderItemsTables: many(foodOrderItemsTable),
}));

export const foodCategoriesTableRelations = relations(foodCategoriesTable, ({many}) => ({
	foodsTables: many(foodsTable),
}));

export const foodOrderItemsTableRelations = relations(foodOrderItemsTable, ({one}) => ({
	foodOrderTable: one(foodOrderTable, {
		fields: [foodOrderItemsTable.foodOrderId],
		references: [foodOrderTable.id]
	}),
	foodsTable: one(foodsTable, {
		fields: [foodOrderItemsTable.foodId],
		references: [foodsTable.id]
	}),
}));

export const foodOrderTableRelations = relations(foodOrderTable, ({one, many}) => ({
	foodOrderItemsTables: many(foodOrderItemsTable),
	usersTable: one(usersTable, {
		fields: [foodOrderTable.userId],
		references: [usersTable.id]
	}),
}));

export const usersTableRelations = relations(usersTable, ({many}) => ({
	foodOrderTables: many(foodOrderTable),
}));