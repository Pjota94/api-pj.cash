import "reflect-metadata";
import express from "express";
import "express-async-errors";
import handdleErrorMiddleware from "./middlewares/handdleError.middleware";
import userRoutes from "./routes/userRoutes.routes";
import userLogin from "./routes/userLogin.routes";
import transferRoutes from "./routes/transfer.routes";

const app = express();
const cors = require("cors");

const corsOptions = {
  origin: "http://localhost:3001",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));
app.use(express.json());

app.use("/users", userRoutes);
app.use("/login", userLogin);
app.use("/tranfers", transferRoutes);

app.use(handdleErrorMiddleware);

export default app;
