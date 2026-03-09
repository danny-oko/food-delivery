import { Context, Hono } from "hono";
import { books } from "../../model/books";

export const createBook = async (c: Context) => {
  const { title, author } = await c.req.json();
  const newId = books.length + 1;
  const newBook = {
    id: newId,
    title: title,
    author: author,
  };

  const updatedBooks = [...books, newBook];

  c.status(201);
  return c.json({
    status: "Successfully created a new book!",
    books: updatedBooks,
  });
};
