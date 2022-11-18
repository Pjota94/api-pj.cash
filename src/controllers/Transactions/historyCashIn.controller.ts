import { Request, Response } from "express";
import historyCashInService from "../../services/Transactions/historyCashIn.service";

const historyCashInController = async (req: Request, res: Response) => {
  const userId: string = req.user.id!;
  const history = await historyCashInService(userId);
  res.json(history);
};

export default historyCashInController;
