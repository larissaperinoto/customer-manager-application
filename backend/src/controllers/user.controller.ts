import { Request, Response } from "express";
import userService from "../services/user.service";

class User {
  async login(req: Request, res: Response) {
    try {
      const token = await userService.login(req.body);
      return res.status(201).json({ token });
    } catch (error) {
      res.status(401).json({ message: "Unauthorized user" });
    }
  }
}

export default new User();
