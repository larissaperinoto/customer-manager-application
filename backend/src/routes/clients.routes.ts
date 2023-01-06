import { Router } from "express";
import clientsController from "../controllers/clients.controller";
import validateClient from "../middlewares/clients.middleware";

const routes = Router();

routes.delete("/:id", clientsController.delete);
routes.put("/:id", clientsController.updateById);
routes.post("/", validateClient, clientsController.create);
routes.get("/", clientsController.findAll);

export default routes;
