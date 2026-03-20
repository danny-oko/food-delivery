import { Context } from "hono";
import { getDb } from "../../../../lib/db";
import { usersTable } from "../../../../db/schema";
import { eq } from "drizzle-orm";
import bcrypt from "bcryptjs";
import { sign } from "hono/jwt";

export const userLogIn = async (c: Context) => {
  const { email, password } = await c.req.json();
  const db = getDb(c);

  const [user] = await db
    .select()
    .from(usersTable)
    .where(eq(usersTable.email, email))
    .limit(1);

  const isValidPassword = await bcrypt.compare(
    password,
    user.password as string,
  );

  if (!user || !isValidPassword)
    return c.json({
      message: "Invalid user name or password",
    });

  const secret = c.env.JWT_SECRET;

  const payload = {
    id: user.id,
    role: user.role,
    email: user.email,
    exp: Math.floor(Date.now() / 1000) + 60 * 60,
  };

  const token = await sign(payload, secret);

  return c.json({
    message: "Login Success!",
    token: token,
    user: {
      payload,
    },
  });
};
