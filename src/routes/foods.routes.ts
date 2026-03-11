import { Context, Hono } from "hono";
import { getFoods } from "../controllers/foods/get-foods";
import type { Bindings } from "../types";

export const registerFoodsRoutes = (app: Hono<{ Bindings: Bindings }>) => {
  app.get("/", getFoods);
  app.get("/foods", getFoods);
};
