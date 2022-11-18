import { Request, Response } from "express";
import balanceUserService from "../../services/Users/balanceUser.service";

const balanceUserController = async (req: Request, res: Response) => {
  const user: string = req.user.usarname!;
  const showBalance = await balanceUserService(user);
  res.json(showBalance);
};

export default balanceUserController;
