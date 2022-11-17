import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import "dotenv/config";

const authTokenMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let token = req.headers.authorization;

  if (!token) {
    res.status(401).json({ message: "Unauthorized" });
  }

  token = token!.split(" ")[1];

  jwt.verify(token, process.env.SECRET_KEY as string, (error, decoded: any) => {
    if (error) {
      return res.status(403).json({ message: "Invalid token" });
    }

    req.user = {
      usarname: decoded.username,
      id: decoded.sub,
    };
  });

  return next();
};

export default authTokenMiddleware;
