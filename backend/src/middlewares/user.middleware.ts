import { NextFunction, Request, Response } from "express";
import validateUserFields from "../utils/validations/user.validations";

export default function validateUser(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const message = validateUserFields(req.body);
  if (message) return res.status(400).json({ message });
  next();
}
