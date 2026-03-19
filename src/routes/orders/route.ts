import { Hono } from "hono";
import { Bindings } from "hono/types";
import { createNewOrder } from "../../controllers/orders/create-new-order";
import { getOrders } from "../../controllers/orders/get-orders";
import { getOrdersById } from "../../controllers/orders/get-orders-by-id";
import { deleteOrders } from "../../controllers/orders/delete-order";
import { updateOrderStatus } from "../../controllers/orders/update-order-status";

const foodOrderRoutes = new Hono<{ Bindings: Bindings }>();

foodOrderRoutes.get("/", getOrders);
foodOrderRoutes.get(":id", getOrdersById);
foodOrderRoutes.post("/", createNewOrder);
foodOrderRoutes.delete(":id", deleteOrders);
foodOrderRoutes.put(":id", updateOrderStatus);

export default foodOrderRoutes;
