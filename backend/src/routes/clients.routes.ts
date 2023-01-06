import { Router } from "express";
import clientController from "../controllers/clients.controller";

const routes = Router();

routes.get("/", clientController.findAll);

export default routes;
