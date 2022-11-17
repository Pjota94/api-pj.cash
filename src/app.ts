import "reflect-metadata";
import express from "express";
import "express-async-errors";
import handdleErrorMiddleware from "./middlewares/handdleError.middleware";
import userRoutes from "./routes/userRoutes.routes";
import userLogin from "./routes/userLogin.routes";

const app = express();
app.use(express.json());

app.use("/users", userRoutes);
app.use("/login", userLogin);

app.use(handdleErrorMiddleware);

export default app;
