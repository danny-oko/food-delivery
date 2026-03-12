import { Context } from "hono";
import { getDrizzleDb } from "../../db/db";
import { foodsTable } from "../../db/schema/food";

export const postFood = async (c: Context) => {
  const d1 = c.env.FOOD_DELIVERY;
  const db = getDrizzleDb(d1);
};
