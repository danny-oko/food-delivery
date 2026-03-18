import { Hono } from "hono";
import { Bindings } from "hono/types";
import { createOrder } from "../../controllers/orders/createNewOrder";
import { getOrders } from "../../controllers/orders/get-orders";
import { deleteOrders } from "../../controllers/orders/deleteOrders";

const foodOrderRoutes = new Hono<{ Bindings: Bindings }>();

foodOrderRoutes.get("/", getOrders);
foodOrderRoutes.post("/", createOrder);
foodOrderRoutes.delete(":id", deleteOrders);

export default foodOrderRoutes;
