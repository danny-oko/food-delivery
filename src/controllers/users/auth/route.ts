import { Hono } from "hono";
import { Bindings } from "../../../lib/types";
import { userLogIn } from "./login/route";

const authRoutes = new Hono<{ Bindings: Bindings }>();

authRoutes.post("/login", userLogIn);

export default authRoutes;
