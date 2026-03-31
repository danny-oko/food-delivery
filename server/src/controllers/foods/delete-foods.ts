import { Context } from "hono";
import { getDb } from "../../lib/db";
import { foodsTable } from "../../db/schema";
import { Bindings } from "../../lib/types";
import { eq } from "drizzle-orm";

export const deleteFood = async (c: Context<{ Bindings: Bindings }>) => {
  try {
    const id = c.req.param("id");
    const db = getDb(c);

    const res = await db
      .delete(foodsTable)
      .where(eq(foodsTable.id, Number(id)))
      .returning();

    console.log(res);

    if (!res.length) {
      return c.json({ error: "Food not found" }, 404);
    }

    return c.json({ message: "Successfully deleted" }, 200);
  } catch (error: any) {
    return c.json({ error: error.message }, 500);
  }
};
