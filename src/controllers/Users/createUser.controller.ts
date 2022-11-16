import { Request, Response } from "express";
import { ICreateUser } from "../../interfaces/users.interfaces";
import createAccountService from "../../services/Accounts/createAccount.service";
import createUserService from "../../services/Users/createUser.service";

const createUserController = async (req: Request, res: Response) => {
  try {
    const user: ICreateUser = req.body;
    const account = await createAccountService();
    const createUser = await createUserService(user, account);
    res.status(201).json(createUser);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(400).json({ message: error.message });
    }
  }
};

export default createUserController;
