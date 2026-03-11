import { Hono } from "hono";
import { registerFoodRoutes } from "./routes/books.routes";
import { D1Database } from "@cloudflare/workers-types";
import { drizzle } from "drizzle-orm/d1";

export type Bindings = {
  FOOD_DELIVERY: D1Database;
};

const app = new Hono<{ Bindings: Bindings }>();

registerFoodRoutes(app);

export default {
  // async fetch(request: Request, env: Env) {
  //   const db = drizzle(env.FOOD_DELIVERY);
  //   // app.fetch;
  // },
  fetch: app.fetch,
};