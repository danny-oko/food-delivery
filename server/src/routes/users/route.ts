import { Hono } from "hono";
import { userLogIn } from "../../controllers/users/auth/login/route";
import { createUser } from "../../controllers/users/crud/create-users";
import { deleteUsers } from "../../controllers/users/crud/delete-users";
import { getUsers } from "../../controllers/users/crud/get-users";
import { getUsersById } from "../../controllers/users/crud/get-users-by-id";
import { updateUser } from "../../controllers/users/crud/update-users";
import { Bindings } from "../../lib/types";

const userRoutes = new Hono<{ Bindings: Bindings }>();

// userRoutes.get("/", adminAuthMiddleWare, getUsers);
// userRoutes.get(":id", adminAuthMiddleWare, getUsersById);
// userRoutes.put(":id", adminAuthMiddleWare, updateUser);
// userRoutes.delete(":id", adminAuthMiddleWare, deleteUsers);
userRoutes.get("/", getUsers);
userRoutes.get(":id", getUsersById);
userRoutes.put(":id", updateUser);
userRoutes.delete(":id", deleteUsers);

// user login || register
userRoutes.post("/", createUser);
userRoutes.post("/login", userLogIn);

export default userRoutes;
