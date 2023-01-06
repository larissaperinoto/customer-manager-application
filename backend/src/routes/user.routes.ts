import { Router } from "express";
import userController from "../controllers/user.controller";
import validateUser from "../middlewares/user.middleware";

const routes = Router();

routes.post("/", validateUser, userController.create);

export default routes;
