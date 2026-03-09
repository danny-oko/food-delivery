import { Hono, HonoRequest } from "hono";
import { getBooksById } from "../controllers/books/get-books-by-id";
import { createBook } from "../controllers/books/post-books";

export const registerFoodRoutes = (app: Hono) => {
  app.get("/books", getBooksById);
  app.post("/books", createBook); 
};
