import * as express from "express";

declare global {
  namespace Express {
    interface Request {
      user: {
        usarname: string;
        id: string;
      };
    }
  }
}
