import { Hono } from "hono";
import { Bindings } from "./lib/types";
import foodsRoute from "./routes/foods/route";

const app = new Hono<{ Bindings: Bindings }>();

app.route("/foods", foodsRoute);

export default app;
