import "reflect-metadata";
import express from "express";
import "express-async-errors";
import handdleErrorMiddleware from "./middlewares/handdleError.middleware";

const app = express();

app.use(handdleErrorMiddleware);

export default app;
