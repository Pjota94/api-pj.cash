import { Request, Response } from "express";
import historyTransactionsService from "../../services/Transactions/historyTransactions.service";

const historyTransactionsController = async (req: Request, res: Response) => {
  const userId: string = req.user.id!;
  const history = await historyTransactionsService(userId);
  res.json(history);
};

export default historyTransactionsController;
