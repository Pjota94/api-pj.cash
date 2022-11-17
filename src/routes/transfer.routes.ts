import { Router } from "express";
import historyCashInController from "../controllers/Transactions/historyCashIn.controller";
import historyCashOutController from "../controllers/Transactions/historyCashOut.controller";
import historyTransactionsController from "../controllers/Transactions/historyTransactions.controller";
import transferController from "../controllers/Transactions/transfer.controller";
import authTokenMiddleware from "../middlewares/authToken.middleware";

const transferRoutes = Router();

transferRoutes.post("/:username", authTokenMiddleware, transferController);
transferRoutes.get("/cashIn", authTokenMiddleware, historyCashInController);
transferRoutes.get("/cashOut", authTokenMiddleware, historyCashOutController);
transferRoutes.get(
  "/history",
  authTokenMiddleware,
  historyTransactionsController
);

export default transferRoutes;
