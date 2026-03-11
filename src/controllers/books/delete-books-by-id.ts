import { Context } from "hono";
import { books } from "../../model/books";

export const deleteBook = (c: Context) => {
  const id = c.req.param("id");

  const delBook = books.filter((book) => String(book.id) !== id);
  console.log(delBook);

  c.status(204);
  return c.json({
    status: "successfully deleted",
    book: delBook,
  });
};
