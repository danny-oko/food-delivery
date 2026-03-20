import { StringChunk } from "drizzle-orm";
import { Context, Hono } from "hono";

export type Bindings = Cloudflare.Env;

export type OrderType = {
  orderItems: OrderItemType[];
  user: User;
};

export type OrderItemType = {
  foodId: number;
  quantity: number;
};

export type User = {
  id: number;
  name: string;
  email: string;
  password: string;
  age: number;
  tel: string;
};
