import { data } from "react-router-dom";
import InMemoryUserRepository from "../repositories/in-memory/InMemoryUserRepository";
import PrismaUserRepository from "../repositories/prisma/PrismaUserRepository";


import { User } from "../models/User";
class UserService {

    constructor(private _UserRepository: InMemoryUserRepository | PrismaUserRepository) {}

    async getAll(): Promise<{data: User[]}> {

        const userData = await this._UserRepository.getAll();
        return { data: userData};
    }

    async getById(id: string): Promise<{data: User}> {
        const userData = await this._UserRepository.getById(id);

        if(!userData) {
            throw new Error("Este Usuário não existe!")
        }

        return { data: userData};
    }

    async create(data: User): Promise <{data: User}>{

        const userData = await this._UserRepository.getByEmail(data.email);

        if(userData) {
            throw new Error("Este E-mail já está sendo utilizado!")
        }

        const addUserData = await this._UserRepository.create(data);

        return {data: addUserData};
    }

    async update(id: string, data: User): Promise<User> {

        const userData = await this._UserRepository.getById(id);

        if(!userData) {
            throw new Error("Usuário não encontrado!")
        }

        const updatedUser = await this._UserRepository.update(id, data);
        return updatedUser;
    }

    async delete(id: string): Promise<{ id: string }> {
        const userData = this._UserRepository.getById(id);

        if(!userData) {
            throw new Error("Usuário não encontrado!")
        }

        const userDeletdId = await this._UserRepository.delete(id);
        return {id: userDeletdId};
    }
}

export default UserService;