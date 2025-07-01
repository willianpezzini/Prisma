import { error } from "console";
import { Request, Response } from "express";

import InMemoryUserRepository from "../repositories/in-memory/InMemoryUserRepository";
import PrismaUserRepository from "../repositories/prisma/PrismaUserRepository";
import UserService from "../services/UserService";

const userService = new UserService(new PrismaUserRepository())

class UserController {

    async create(Req: Request, Res: Response) {
        try {
            
            const data = Req.body;

            if (!data.name || !data.email || !data.password) {
                console.log(data);
                throw new Error("Dados Obrigatórios não Preenchidos!");
            }
            
            const userCreatedData = await userService.create(data);
            Res.json(userCreatedData);
        } catch (err: any) {
            Res.status(400).json({error: err.message});
        }
    }
    
    async getAll(Req: Request, Res: Response) {
        try {

            const userData = await userService.getAll();
            Res.json(userData);
            
        } catch (err: any) {
            Res.status(400).json({error: err.message});
        }
    }

    async getById(Req: Request, Res: Response) {
        try {
            const userData = await userService.getById(Req.params.id);
            Res.json(userData);
            
        } catch (err: any) {
            Res.status(400).json({error: err.message});
        }
    }

    async update(Req: Request, Res: Response) {
        try {

            const data = Req.body;
            const { id } = Req.params;

            if (!data.name || !data.email || !data.password) {
                throw new Error("Dados Obrigatórios não Preenchidos!");
            }

            if(!id) {
                throw new Error("bad Request")
            }

            const updatedUser = await userService.update(id, data);
            Res.json(updatedUser);
            
        } catch (err: any) {
            Res.status(400).json({error: err.message});
        }
    }

    async delete(Req: Request, Res: Response) {
        try {

            const { id } = Req.params;

            if(!id) {
                throw new Error("bad request id");
            }

            const userDeleted = await userService.delete(id);
            Res.json(userDeleted);
            
        } catch (err: any) {
            Res.status(400).json({error: err.message});
        }
    }
}

export default UserController;