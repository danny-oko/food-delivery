import { drizzle } from "drizzle-orm/d1";
import { Context } from "hono";
import { Bindings } from "./types";
import * as schema from "../db/schema";
import { D1Database } from "@cloudflare/workers-types";

export const getDrizzleDb = (d1: D1Database) => {
  
  return drizzle(d1, { schema });
};

export const getDb = (c: Context<{ Bindings: Bindings }>) => {
  return drizzle(c.env.FOOD_DELIVERY, { schema });
};
