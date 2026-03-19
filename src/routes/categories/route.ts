import { Hono } from "hono";
import { Bindings } from "hono/types";
import { getCategories } from "../../controllers/food-categories/get-Categories";
import { getCategoryById } from "../../controllers/food-categories/get-CategoryById";
import { createCategory } from "../../controllers/food-categories/create-category";
import { updateCategory } from "../../controllers/food-categories/update-Categories";
const categoriesRoute = new Hono<{ Bindings: Bindings }>();

categoriesRoute.get("/", getCategories);
categoriesRoute.get(":id", getCategoryById);
categoriesRoute.put(":id", updateCategory);
categoriesRoute.post("/", createCategory);

export default categoriesRoute;
