import { Hono } from "hono";
import { Bindings } from "../../lib/types";
import { createUser } from "../../controllers/users/crud/create-users";
import { getUsers } from "../../controllers/users/crud/get-users";
import { getUsersById } from "../../controllers/users/crud/get-users-by-id";
import { updateUser } from "../../controllers/users/crud/update-users";
import { deleteUsers } from "../../controllers/users/crud/delete-users";
import { userLogIn } from "../../controllers/users/auth/login/route";

const userRoutes = new Hono<{ Bindings: Bindings }>();

userRoutes.get("/", getUsers);
userRoutes.get(":id", getUsersById);
userRoutes.put(":id", updateUser);
userRoutes.delete(":id", deleteUsers);

// user login || register
userRoutes.post("/", createUser);
userRoutes.post("/login", userLogIn);

export default userRoutes;
