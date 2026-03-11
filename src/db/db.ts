import { drizzle } from "drizzle-orm/d1";
import type { D1Database } from "@cloudflare/workers-types";
import * as FoodSchema from "./schema";

export function getDrizzleDb(d1: D1Database) {
  return drizzle(d1, { schema: FoodSchema });
}
