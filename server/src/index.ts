import { Hono } from "hono";
import { cors } from "hono/cors";
import { Bindings } from "./lib/types";
import categoriesRoute from "./routes/categories/route";
import foodsRoute from "./routes/foods/route";
import foodOrderRoutes from "./routes/orders/route";
import userRoutes from "./routes/users/route";

const app = new Hono<{ Bindings: Bindings }>();

app.use(
  "/*",
  cors({
    origin: [
      "http://localhost:3000",
      "http://localhost:3001",
      "https://nom-nom-admin.vercel.app",
      "https://nom-nom-client.vercel.app",
    ],
    allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowHeaders: ["Content-Type", "Authorization"],
  }),
);

app.route("/foods", foodsRoute);
app.route("/categories", categoriesRoute);
app.route("/orders", foodOrderRoutes);
app.route("/users", userRoutes);

export default app;
