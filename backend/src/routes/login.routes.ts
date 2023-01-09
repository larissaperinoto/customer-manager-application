import { Router } from "express";
import userController from "../controllers/user.controller";
import validateLogin from "../middlewares/login.middleware";

const routes = Router();

routes.post("/", validateLogin, userController.login);

export default routes;
