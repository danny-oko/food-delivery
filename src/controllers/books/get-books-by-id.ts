import { Hono } from "hono";
import { Context } from "hono";
import { books } from "../../model/books";

export const getBooksById = async (c: Context) => {
  const id = c.req.param("id");

  const booksFound = books.find((book) => String(book.id) === id);
  console.log(booksFound);

  c.status(200);
  return c.json({
    status: "success!",
    book_found: booksFound,
  });
};
