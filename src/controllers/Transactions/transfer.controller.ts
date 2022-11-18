import { Request, Response } from "express";
import { ITransfer } from "../../interfaces/transfer.interfaces";
import transferService from "../../services/Transactions/transfer.service";

const transferController = async (req: Request, res: Response) => {
  const username: string = req.params.username;
  const idUserCashOut: string = req.user.id!;
  const value: ITransfer = req.body;
  const transfer = await transferService(value, idUserCashOut, username);
  res.status(201).json(transfer);
};

export default transferController;
