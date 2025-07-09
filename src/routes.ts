import { Router } from "express";

import UserController from "./controllers/UserController";

const routes = Router();

const userController = new UserController();

routes.post("/users", (req, res) => userController.create(req, res));
routes.get("/users", (req, res) => userController.getAll(req, res));
routes.get("/users/name/:name", async (req, res) => {
    try {
        await userController.getByName(req, res);
    } catch (err) {
        res.status(500).json({ error: "Erro interno no servidor!"});
    }
});
routes.get("/users/:id", async (req, res) => {
    try {
        await userController.getById(req, res);
    } catch (err) {
        res.status(500).json({ error: "Erro interno no servidor!"})
    }
});


routes.put("/users/:id", (req, res) => userController.update(req, res));
routes.delete("/users/:id", (req, res) => userController.delete(req, res));

export default routes;
