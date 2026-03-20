PRAGMA foreign_keys=OFF;--> statement-breakpoint
CREATE TABLE `__new_food_order_table` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`total_price` real NOT NULL,
	`user_id` integer NOT NULL,
	`status` text DEFAULT 'PENDING',
	`created_at` integer,
	`updated_at` integer,
	FOREIGN KEY (`user_id`) REFERENCES `users_table`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
INSERT INTO `__new_food_order_table`("id", "total_price", "user_id", "status", "created_at", "updated_at") SELECT "id", "total_price", "user_id", "status", "created_at", "updated_at" FROM `food_order_table`;--> statement-breakpoint
DROP TABLE `food_order_table`;--> statement-breakpoint
ALTER TABLE `__new_food_order_table` RENAME TO `food_order_table`;--> statement-breakpoint
PRAGMA foreign_keys=ON;--> statement-breakpoint
CREATE TABLE `__new_food_order_items_table` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`quantity` integer DEFAULT 1 NOT NULL,
	`food_id` integer,
	`food_order_id` integer,
	`created_at` integer,
	`updated_at` integer,
	FOREIGN KEY (`food_id`) REFERENCES `foods_table`(`id`) ON UPDATE no action ON DELETE cascade,
	FOREIGN KEY (`food_order_id`) REFERENCES `food_order_table`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
INSERT INTO `__new_food_order_items_table`("id", "quantity", "food_id", "food_order_id", "created_at", "updated_at") SELECT "id", "quantity", "food_id", "food_order_id", "created_at", "updated_at" FROM `food_order_items_table`;--> statement-breakpoint
DROP TABLE `food_order_items_table`;--> statement-breakpoint
ALTER TABLE `__new_food_order_items_table` RENAME TO `food_order_items_table`;