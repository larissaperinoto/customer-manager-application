import { Router } from "express";
import clientsController from "../controllers/clients.controller";

const routes = Router();

routes.delete("/:id", clientsController.delete);
routes.put("/:id", clientsController.updateById);
routes.get("/", clientsController.findAll);
routes.post("/", clientsController.create);

export default routes;
