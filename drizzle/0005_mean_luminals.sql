ALTER TABLE `foods_table` ADD `category_id` integer REFERENCES categories_table(id);--> statement-breakpoint
ALTER TABLE `foods_table` DROP COLUMN `category`;