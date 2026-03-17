import { Hono } from "hono";
import { Bindings } from "../../lib/types";
import { createUser } from "../../controllers/users/createUsers";
import { getUsers } from "../../controllers/users/getUsers";
import { getUsersById } from "../../controllers/users/getUsersById";
import { updateUser } from "../../controllers/users/updateUser";
import { deleteUsers } from "../../controllers/users/deleteUser";

const userRoutes = new Hono<{ Bindings: Bindings }>();

userRoutes.get("/", getUsers);
userRoutes.get(":id", getUsersById);
userRoutes.post("/", createUser);
userRoutes.put(":id", updateUser);
userRoutes.delete(":id", deleteUsers);

export default userRoutes;
