import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";

const authMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { authorization } = req.headers;

  if (!authorization)
    return res.status(401).json({ message: "Token not found" });

  const secret = process.env.JWT_SECRET || "mysecret";

  try {
    const user = jwt.verify(authorization, secret);
    req.body.user = user;

    next();
  } catch (error) {
    return res.status(401).json({ message: "Invalid token" });
  }
};

export default authMiddleware;
