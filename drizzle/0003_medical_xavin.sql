PRAGMA foreign_keys=OFF;--> statement-breakpoint
CREATE TABLE `__new_foods_table` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`foodName` text NOT NULL,
	`price` text NOT NULL,
	`image` text,
	`ingredients` text,
	`category` text,
	`created_at` integer,
	`updated_at` integer
);
--> statement-breakpoint
INSERT INTO `__new_foods_table`("id", "foodName", "price", "image", "ingredients", "category", "created_at", "updated_at") SELECT "id", "foodName", "price", "image", "ingredients", "category", "created_at", "updated_at" FROM `foods_table`;--> statement-breakpoint
DROP TABLE `foods_table`;--> statement-breakpoint
ALTER TABLE `__new_foods_table` RENAME TO `foods_table`;--> statement-breakpoint
PRAGMA foreign_keys=ON;