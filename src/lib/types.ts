import { Context, Hono } from "hono";

export type Bindings = Cloudflare.Env;

export type OrderItem = {
  foodId: number;
  quantity: number;
};

export type BodyType = {
  orderItems: OrderItem[];
};
