import { Request, Response } from "express";
import ErrorExtent from "../utils/error.exception";

const errorMiddleware = (err: Error, req: Request, res: Response) => {
  const { status, message } = err as ErrorExtent;
  return res.status(status).json({ message });
};

export default errorMiddleware;
