import { Context, Next } from "hono";
import { jwt } from "hono/jwt";
import type { JWTPayload } from "../lib/types";

export const adminAuthMiddleWare = async (c: Context, next: Next) => {
  const jwtMiddleware = jwt({
    secret: c.env.JWT_SECRET,
    alg: "HS256",
  });

  return jwtMiddleware(c, async () => {
    const payload = c.get("jwtPayload") as JWTPayload;

    // if (payload.role !== "ADMIN") {
    //   return c.json({ message: "Forbidden: Admins only" }, 403);
    // }
    console.log("payload:", payload);
    await next();
  });
};
