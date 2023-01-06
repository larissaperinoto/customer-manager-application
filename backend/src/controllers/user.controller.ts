import { NextFunction, Request, Response } from "express";
import userService from "../services/user.service";

class User {
  async login(req: Request, res: Response, next: NextFunction) {
    try {
      const token = await userService.login(req.body);
      return res.status(201).json({ token });
    } catch (error) {
      next(error);
    }
  }

  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const user = await userService.create(req.body);
      return res.status(201).json(user);
    } catch (error) {
      next(error);
    }
  }
}

export default new User();
