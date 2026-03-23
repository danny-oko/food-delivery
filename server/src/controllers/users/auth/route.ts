import { Hono } from "hono";
import { Bindings } from "../../../lib/types";
import { userLogIn } from "./login/route";
import { createUser } from "../crud/create-users";

const authRoutes = new Hono<{ Bindings: Bindings }>();

authRoutes.post("/login", userLogIn);
authRoutes.post("/register", createUser);

export default authRoutes;
