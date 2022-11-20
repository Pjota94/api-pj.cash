import { Router } from "express";
import balanceUserController from "../controllers/Users/balanceUser.controller";
import createUserController from "../controllers/Users/createUser.controller";
import profileUserController from "../controllers/Users/profileUser.controller";
import authTokenMiddleware from "../middlewares/authToken.middleware";

const userRoutes = Router();

userRoutes.post("", createUserController);
userRoutes.get("/balance", authTokenMiddleware, balanceUserController);
userRoutes.get("/profile", authTokenMiddleware, profileUserController);

export default userRoutes;
