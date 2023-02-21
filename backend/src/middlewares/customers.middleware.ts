import { NextFunction, Request, Response } from "express";
import validateClientFields from "../utils/validations/client.validations";

export default function validateClient(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { user, ...body } = req.body;
  const message = validateClientFields(body);
  if (message) return res.status(400).json({ message });
  next();
}
