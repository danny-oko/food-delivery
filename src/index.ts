import { Hono } from "hono";
import { Bindings } from "./lib/types";
import foodsRoute from "./routes/foods/route";
import categoriesRoutes from "./routes/categories/route";

const app = new Hono<{ Bindings: Bindings }>();

app.route("/foods", foodsRoute);
app.route("/categories", categoriesRoutes);

export default app;
