import { Context, Next } from "hono";

export const authMiddleware = async (c: Context, next: Next) => {
  const auth = c.header;

  c.header("x-message", "This is middleware!");
  await next();
};
