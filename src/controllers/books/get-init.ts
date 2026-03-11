import { Context } from "hono";

export const getInit = (c: Context) => {
  return c.text("Hello!!!");
};
