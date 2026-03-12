import { Hono } from "hono";
import type { Bindings } from "./types";
import { registerFoodsRoutes } from "./routes/foods.routes";

const app = new Hono<{ Bindings: Bindings }>();

registerFoodsRoutes(app);

export default {
  fetch: app.fetch,
};
