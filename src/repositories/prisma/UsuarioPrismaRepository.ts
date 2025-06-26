import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class UsuarioPrismaRepository {

    async getAll() {
        const users = await prisma.user.findMany();
        console.log(users);
        return users;
    }

    async create() {
        const newUser = await prisma.user.create({
            data: {
                name: "Pedro",
                email: "pedro@teste.com",
                password: "123456789",
                phone: "(48) 11111-1111"
            }
        });
        console.log(newUser);
        return newUser;
    }

    async update() {
        const updateUser = await prisma.user.update({
            data: {
                name: "Joao Francisco",
                email: "joaofrancisco@teste.com"
            },
            where: {
                id: "2de80a22-b565-4a3e-83cc-3a834ee4cf39"
            }
        });
        console.log(updateUser);
        return updateUser;
    }
}

const usuarioPrismaRepository = new UsuarioPrismaRepository();
usuarioPrismaRepository.getAll();
export default UsuarioPrismaRepository;