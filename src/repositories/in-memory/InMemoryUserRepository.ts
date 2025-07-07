import { randomUUID } from "crypto";
import { User } from "../../models/User";
import UsuarioPrismaRepository from "../prisma/PrismaUserRepository";

class InMemoryUserRepository implements UsuarioPrismaRepository {

    public user: User[] = [];

    constructor() {

        this.user = [
            {
                id: "69ee42fb-648f-44a0-ba5d-1f547794bac1",
                name: "Joao Pedro",
                email: "joaopedro@teste.com",
                password: "123456789",
                phone: "(47) 99999-9999"
            }
        ]
    }

    async getAll(): Promise<User[]> {
        return this.user;
    }

    async getById(id: string): Promise<User | null> {
        const dataUser = this.user.find((item) => item.id === id);

        if (!dataUser) {
            return null;
        }

        return dataUser;
    }

    async create(data: User): Promise<User> {
        data.id = randomUUID();
        this.user.push(data);
        return data;
    }

    async update(id: string, data: User): Promise<User> {
        const index = this.user.findIndex((item) => item.id === id);
        data.id = this.user[index].id;
        this.user[index] = data;
        return this.user[index];
    }

    async delete(id: string): Promise<string> {
        const index = this.user.findIndex((item) => item.id === id);
        delete this.user[index];
        return id;
    }

    async getByEmail(email: string): Promise<User | null> {
        const dataUser = this.user.find((item) => item.email === email);

        if (!dataUser) {
            return null;
        }

        return dataUser;
    }

    async getByName(name: string): Promise<User | null> {
        const dataUser = this.user.find((item) => item.name === name);

        if (!dataUser) {
            return null;
        }

        return dataUser;
    }
}


export default InMemoryUserRepository;