import { Context } from "hono";
import { books } from "../../model/books";
import { getDrizzleDb } from "../../db/db";

export const getBooks = (c: Context) => {
  return c.json({
    status: "Success!",
    books_available: books,
  });
};
