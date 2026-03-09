import { Context } from "hono";
import { books } from "../../model/books";

export const updatedBooks = async (c: Context) => {
  const id = c.req.param("id");
  const { title, author } = await c.req.json();

  const updateBook = books.map((book) => {
    const updatedBook = {
      ...book,
      title: title,
      author: author,
    };
    if (String(book.id) === id) {
      return updatedBook;
    }
    return book;
  });

  console.log(updateBook);

  return c.json({
    status: "Success",
    updated_book: updateBook,
  });
};
