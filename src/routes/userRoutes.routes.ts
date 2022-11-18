import { Router } from "express";
import balanceUserController from "../controllers/Users/balanceUser.controller";
import createUserController from "../controllers/Users/createUser.controller";
import authTokenMiddleware from "../middlewares/authToken.middleware";

const userRoutes = Router();

userRoutes.post("", createUserController);
userRoutes.get("", authTokenMiddleware, balanceUserController);

export default userRoutes;
