import { Router } from "express";
import loginController from "../controllers/Login/login.controller";

const userLogin = Router();

userLogin.post("", loginController);

export default userLogin;
