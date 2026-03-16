import { drizzle } from "drizzle-orm/d1";
import { Context } from "hono";
import { Bindings } from "./types";

export const getDrizzleDb = (d1: D1Database) => {
  return drizzle(d1);
};

export const getDb = (c: Context<{ Bindings: Bindings }>) => {
  return drizzle(c.env.FOOD_DELIVERY);
};
