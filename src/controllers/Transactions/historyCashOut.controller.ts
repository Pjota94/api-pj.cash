import { Request, Response } from "express";
import historyCashOutService from "../../services/Transactions/historyCashOut.service";

const historyCashOutController = async (req: Request, res: Response) => {
  const userId: string = req.user.id!;
  const history = await historyCashOutService(userId);
  res.json(history);
};

export default historyCashOutController;
