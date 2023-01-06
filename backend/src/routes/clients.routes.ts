import { Router } from "express";
import clientController from "../controllers/clients.controller";

const routes = Router();

routes.put("/:id", clientController.updateById);
routes.get("/", clientController.findAll);
routes.post("/", clientController.create);

export default routes;
