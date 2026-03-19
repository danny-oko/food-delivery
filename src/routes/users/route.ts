import { Hono } from "hono";
import { Bindings } from "../../lib/types";
import { createUser } from "../../controllers/users/create-users";
import { getUsers } from "../../controllers/users/get-users";
import { getUsersById } from "../../controllers/users/get-users-by-id";
import { updateUser } from "../../controllers/users/update-users";
import { deleteUsers } from "../../controllers/users/delete-users";

const userRoutes = new Hono<{ Bindings: Bindings }>();

userRoutes.get("/", getUsers);
userRoutes.get(":id", getUsersById);
userRoutes.post("/", createUser);
userRoutes.put(":id", updateUser);
userRoutes.delete(":id", deleteUsers);

export default userRoutes;
