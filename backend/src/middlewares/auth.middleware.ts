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

  try {
    const user = jwt.verify(authorization, process.env.JWT_SECRET as string);
    req.body.user = user;
    next();
  } catch (error) {
    return res.status(401).json({ message: "Invalid token" });
  }
};

export default authMiddleware;
