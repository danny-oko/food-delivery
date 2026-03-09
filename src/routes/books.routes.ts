import { Hono, HonoRequest } from "hono";
import { getBooksById } from "../controllers/books/get-books-by-id";
import { createBook } from "../controllers/books/post-books";
import { getBooks } from "../controllers/books/get-books";

export const registerFoodRoutes = (app: Hono) => {

  app.get("/books", getBooks);
  app.get("/books/:id", getBooksById);
  app.post("/books", createBook); 
};
