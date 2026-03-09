import { Hono } from "hono";
import { registerFoodRoutes } from "./routes/books.routes";

const app = new Hono();

registerFoodRoutes(app);

export default app;
