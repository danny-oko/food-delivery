import { Hono } from "hono";
import { Bindings } from "hono/types";
import { getCategories } from "../../controllers/food-categories/getCategories";
import { getCategoryById } from "../../controllers/food-categories/getCategoryById";
import { createCategory } from "../../controllers/food-categories/postCategory";
const categoriesRoutes = new Hono<{ Bindings: Bindings }>();

categoriesRoutes.get("/", getCategories);
categoriesRoutes.get(":id", getCategoryById);
categoriesRoutes.post("/", createCategory);

export default categoriesRoutes;
