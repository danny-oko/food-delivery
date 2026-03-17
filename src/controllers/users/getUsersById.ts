import { Context } from "hono";
import { getDb } from "../../lib/db";
import { eq } from "drizzle-orm";
import { usersTable } from "../../db/schema";

export const getUsersById = async (c: Context) => {
  const id = c.req.param("id");

  const db = getDb(c);

  const res = await db.query.usersTable.findFirst({
    where: eq(usersTable.id, Number(id)),
  });

  if (!res) {
    return c.json(
      {
        message: "Could not find!",
      },
      403,
    );
  }

  return c.json({
    res,
  });
};
