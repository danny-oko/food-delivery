PRAGMA foreign_keys=OFF;--> statement-breakpoint
CREATE TABLE `__new_food_order_table` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`user_id` integer,
	`status` text DEFAULT 'PENDING',
	`total_amount` integer,
	`created_at` integer,
	FOREIGN KEY (`user_id`) REFERENCES `users_table`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
INSERT INTO `__new_food_order_table`("id", "user_id", "status", "total_amount", "created_at") SELECT "id", "user_id", "status", "total_amount", "created_at" FROM `food_order_table`;--> statement-breakpoint
DROP TABLE `food_order_table`;--> statement-breakpoint
ALTER TABLE `__new_food_order_table` RENAME TO `food_order_table`;--> statement-breakpoint
PRAGMA foreign_keys=ON;--> statement-breakpoint
CREATE TABLE `__new_foods_table` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`name` text NOT NULL,
	`price` text NOT NULL,
	`category_id` integer,
	`img` text,
	`overview` text,
	`created_at` integer,
	`updated_at` integer,
	FOREIGN KEY (`category_id`) REFERENCES `food_categories_table`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
INSERT INTO `__new_foods_table`("id", "name", "price", "category_id", "img", "overview", "created_at", "updated_at") SELECT "id", "name", "price", "category_id", "img", "overview", "created_at", "updated_at" FROM `foods_table`;--> statement-breakpoint
DROP TABLE `foods_table`;--> statement-breakpoint
ALTER TABLE `__new_foods_table` RENAME TO `foods_table`;