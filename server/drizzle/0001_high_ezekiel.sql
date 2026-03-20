CREATE TABLE `food_categories_table` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`name` text,
	`created_at` integer,
	`updated_at` integer
);
--> statement-breakpoint
CREATE TABLE `food_order_table` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`totalPrice` text,
	`status` text DEFAULT 'pending',
	`created_at` integer,
	`updated_at` integer
);
--> statement-breakpoint
CREATE TABLE `food_order_items_table` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`quantity` integer,
	`foodId` integer,
	`foodOrderId` integer,
	`created_at` integer,
	`updated_at` integer,
	FOREIGN KEY (`foodId`) REFERENCES `foods_table`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`foodOrderId`) REFERENCES `food_order_table`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `users_table` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`name` text,
	`email` text,
	`password` text,
	`age` integer,
	`tel` text
);
--> statement-breakpoint
CREATE UNIQUE INDEX `users_table_email_unique` ON `users_table` (`email`);--> statement-breakpoint
PRAGMA foreign_keys=OFF;--> statement-breakpoint
CREATE TABLE `__new_foods_table` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`name` text NOT NULL,
	`price` text NOT NULL,
	`categoryId` integer,
	`created_at` integer,
	`updated_at` integer,
	FOREIGN KEY (`categoryId`) REFERENCES `food_categories_table`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
INSERT INTO `__new_foods_table`("id", "name", "price", "categoryId", "created_at", "updated_at") SELECT "id", "name", "price", "categoryId", "created_at", "updated_at" FROM `foods_table`;--> statement-breakpoint
DROP TABLE `foods_table`;--> statement-breakpoint
ALTER TABLE `__new_foods_table` RENAME TO `foods_table`;--> statement-breakpoint
PRAGMA foreign_keys=ON;