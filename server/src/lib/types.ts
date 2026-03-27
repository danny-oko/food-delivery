import { Context, Hono } from "hono";

export type Bindings = Cloudflare.Env;

export type App = Hono<{ Bindings: Bindings }>;

export type AppContext = Context<{ Bindings: Bindings }>;

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
  role: "user" | "admin";
  name: string;
  email: string;
  password: string;
  age: number;
  tel: string;
};

export type JWTPayload = {
  sub: string;
  role: string;
  exp: number;
};
