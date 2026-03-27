import { Context } from "hono";
import { getDb } from "../../lib/db";
import { foodsTable } from "../../db/schema";
import { AppContext } from "../../lib/types";

export const getFoods = async (c: AppContext) => {
  try {
    const db = getDb(c);
    console.log("=============2================");

    const res = await db.select().from(foodsTable);

    console.log("=============3================");
    return c.json({ foods: res }, 200);
  } catch (error: any) {
    console.log("=============================");
    return c.json({ error: error.message }, 500);
  }
};
