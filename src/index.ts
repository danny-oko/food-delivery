import { Hono } from "hono";
import { Bindings } from "./lib/types";
import foodsRoute from "./routes/foods/route";
import categoriesRoute from "./routes/categories/route";
import userRoutes from "./routes/users/route";
import foodOrderRoutes from "./routes/orders/route";

const app = new Hono<{ Bindings: Bindings }>();

app.route("/foods", foodsRoute);
app.route("/categories", categoriesRoute);
app.route("/users", userRoutes);
app.route("/orders", foodOrderRoutes);

export default app;
