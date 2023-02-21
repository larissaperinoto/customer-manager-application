import { Router } from "express";
import customersController from "../controllers/customers.controller";
import validateClient from "../middlewares/customers.middleware";

const routes = Router();

routes.delete("/:id", customersController.delete);
routes.put("/:id", customersController.updateById);
routes.post("/", validateClient, customersController.create);
routes.get("/", customersController.findAll);

export default routes;
