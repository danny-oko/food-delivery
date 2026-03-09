import { Hono, HonoRequest } from "hono";
import { getBooksById } from "../controllers/books/get-books-by-id";

export const registerFoodRoutes = (app: Hono) => {
  app.get("/books", getBooksById);
};
