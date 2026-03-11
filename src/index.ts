import { Hono } from "hono";
import { registerBooksRoutes } from "./routes/books.routes";
import { D1Database } from "@cloudflare/workers-types";
import type { Bindings } from "./types";
import { registerFoodsRoutes } from "./routes/foods.routes";


const app = new Hono<{ Bindings: Bindings }>();

// registerBooksRoutes(app);
registerFoodsRoutes(app)

export default {
  fetch: app.fetch,
};