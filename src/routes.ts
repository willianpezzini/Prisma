import { Router } from "express";

import UserController from "./controllers/UserController";

const routes = Router();

const userController = new UserController();

routes.post("/users", (req, res) => userController.create(req, res));
routes.get("/users", (req, res) => userController.getAll(req, res));
//routes.get("/users/:id",userController.getById(req, res));
routes.put("/users/:id", (req, res) => userController.update(req, res));
routes.delete("/users/:id", (req, res) => userController.delete(req, res));

export default routes;
