import { Request, Response } from "express";
import { ICreateUser } from "../../interfaces/users.interfaces";
import loginService from "../../services/Login/login.service";

const loginController = async (req: Request, res: Response) => {
  const user: ICreateUser = req.body;
  const token = await loginService(user);
  res.json({ token });
};

export default loginController;
