import { Hono } from "hono";
import { Bindings } from "../../lib/types";
import { getFoods } from "../../controllers/foods/get-foods";
import { getFoodsById } from "../../controllers/foods/get-foods-by-id";
import { postFood } from "../../controllers/foods/create-foods";
import { updateFood } from "../../controllers/foods/update-foods";
import { deleteFood } from "../../controllers/foods/delete-foods";
import { bearerAuth } from "hono/bearer-auth";
import { adminAuthMiddleWare } from "../../middleware/admin-middleware";

const foodsRoute = new Hono<{ Bindings: Bindings }>();

foodsRoute.get("/", getFoods);
foodsRoute.get(":id", adminAuthMiddleWare, getFoodsById);
foodsRoute.post("/", adminAuthMiddleWare, postFood);
foodsRoute.put(":id", adminAuthMiddleWare, updateFood);
foodsRoute.delete(":id", adminAuthMiddleWare,deleteFood);

export default foodsRoute;
