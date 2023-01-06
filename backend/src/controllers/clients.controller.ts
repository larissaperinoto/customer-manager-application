import { NextFunction, Request, Response } from "express";
import clientService from "../services/clients.service";

class ClientController {
  async findAll(_req: Request, res: Response, next: NextFunction) {
    try {
      const clients = await clientService.findAll();
      return res.status(200).json(clients);
    } catch (error) {
      next(error);
    }
  }
}

export default new ClientController();
