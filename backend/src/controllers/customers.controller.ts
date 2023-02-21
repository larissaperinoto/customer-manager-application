import { NextFunction, Request, Response } from "express";
import customersService from "../services/customers.service";

class ClientController {
  async findAll(_req: Request, res: Response, next: NextFunction) {
    try {
      const customers = await customersService.findAll();
      return res.status(200).json(customers);
    } catch (error) {
      next(error);
    }
  }

  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const client = await customersService.create(req.body);
      return res.status(201).json(client);
    } catch (error) {
      next(error);
    }
  }

  async updateById(req: Request, res: Response, next: NextFunction) {
    try {
      const clientUpdated = await customersService.updateById(
        req.params.id,
        req.body
      );
      return res.status(200).json(clientUpdated);
    } catch (error) {
      next(error);
    }
  }

  async delete(req: Request, res: Response, next: NextFunction) {
    try {
      await customersService.delete(req.params.id);
      return res.sendStatus(204);
    } catch (error) {
      next(error);
    }
  }
}

export default new ClientController();
