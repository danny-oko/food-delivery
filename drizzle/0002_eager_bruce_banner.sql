PRAGMA foreign_keys=OFF;--> statement-breakpoint
CREATE TABLE `__new_food_order_table` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`totalPrice` text NOT NULL,
	`user_id` integer NOT NULL,
	`status` text DEFAULT 'PENDING',
	`created_at` integer,
	`updated_at` integer,
	FOREIGN KEY (`user_id`) REFERENCES `users_table`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
INSERT INTO `__new_food_order_table`("id", "totalPrice", "user_id", "status", "created_at", "updated_at") SELECT "id", "totalPrice", "user_id", "status", "created_at", "updated_at" FROM `food_order_table`;--> statement-breakpoint
DROP TABLE `food_order_table`;--> statement-breakpoint
ALTER TABLE `__new_food_order_table` RENAME TO `food_order_table`;--> statement-breakpoint
PRAGMA foreign_keys=ON;