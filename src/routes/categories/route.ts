import { Hono } from "hono";
import { Bindings } from "hono/types";
import { getCategories } from "../../controllers/food-categories/getCategories";
import { getCategoryById } from "../../controllers/food-categories/getCategoryById";
import { createCategory } from "../../controllers/food-categories/postCategory";
import { updateCategory } from "../../controllers/food-categories/updateCategories";
const categoriesRoute = new Hono<{ Bindings: Bindings }>();

categoriesRoute.get("/", getCategories);
categoriesRoute.get(":id", getCategoryById);
categoriesRoute.put(":id", updateCategory);
categoriesRoute.post("/", createCategory);

export default categoriesRoute;
