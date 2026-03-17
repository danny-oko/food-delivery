import { Hono } from "hono";
import { Bindings } from "hono/types";
import { createOrder } from "../../controllers/orders/createOrder";

const foodOrderRoutes = new Hono<{ Bindings: Bindings }>();

// foodOrderRoutes.get("/", )
foodOrderRoutes.post("/", createOrder);

export default foodOrderRoutes;
