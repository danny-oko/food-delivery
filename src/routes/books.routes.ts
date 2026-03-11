import { Hono, HonoRequest } from "hono";
import { getBooksById } from "../controllers/books/get-books-by-id";
import { createBook } from "../controllers/books/post-books";
import { getBooks } from "../controllers/books/get-books";
import { updatedBooks } from "../controllers/books/put-books-by-id";
import { deleteBook } from "../controllers/books/delete-books-by-id";

export const registerFoodRoutes = (app: Hono) => {
  app.get("/", getBooks);
  app.get("/books", getBooks);
  app.get("/books/:id", getBooksById);
  app.post("/books", createBook);
  app.put("/books/:id", updatedBooks);
  app.delete("/books/:id", deleteBook);
};
