import { Hono } from "hono";
import { Bindings } from "../../lib/types";
import { getFoods } from "../../controllers/foods/getFoods";
import { getFoodsById } from "../../controllers/foods/getFoodsById";
import { postFood } from "../../controllers/foods/postFood";

const foodsRoute = new Hono<{ Bindings: Bindings }>();

foodsRoute.get("/", getFoods);
foodsRoute.get("/:id", getFoodsById);
foodsRoute.post("/", postFood);

export default foodsRoute;
