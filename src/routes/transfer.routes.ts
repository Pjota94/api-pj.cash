import { Router } from "express";
import transferController from "../controllers/Transactions/transfer.controller";
import authTokenMiddleware from "../middlewares/authToken.middleware";

const transferRoutes = Router();

transferRoutes.post("/:username", authTokenMiddleware, transferController);

export default transferRoutes;
