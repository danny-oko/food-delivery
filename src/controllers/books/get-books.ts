import { Context } from "hono";
import { books } from "../../model/books";

export const getBooks = (c: Context) => {
  return c.json({
    status: "Success!",
    books_available: books,
  });
};
