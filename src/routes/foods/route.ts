import { Hono } from "hono";
import { Bindings } from "../../lib/types";
import { getFoods } from "../../controllers/foods/getFoods";
import { getFoodsById } from "../../controllers/foods/getFoodsById";
import { postFood } from "../../controllers/foods/postFood";
import { updateFood } from "../../controllers/foods/putFoods";
import { deleteFood } from "../../controllers/foods/delFood";

const foodsRoute = new Hono<{ Bindings: Bindings }>();

foodsRoute.get("/", getFoods);
foodsRoute.get(":id", getFoodsById);
foodsRoute.post("/", postFood);
foodsRoute.put(":id", updateFood);
foodsRoute.delete(":id", deleteFood);

export default foodsRoute;
