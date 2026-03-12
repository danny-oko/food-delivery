import { Hono } from "hono";
import type { Bindings } from "../types";
import { getFoods } from "../controllers/foods/get-foods";
import { getFoodById } from "../controllers/foods/get-foods-byId";
import { postFood } from "../controllers/foods/post-food";
import { deleteFood } from "../controllers/foods/del-foods";

export const registerFoodsRoutes = (app: Hono<{ Bindings: Bindings }>) => {
  app.get("/foods", getFoods);
  app.get("/foods/:id", getFoodById);
  app.post("/foods", postFood);
  app.delete("/foods/:id", deleteFood);
};
