import  Express  from "express";
import cors from "cors";
import routes from "./routes";


const server = Express();

server.use(cors())
server.use(Express.json());

server.use(routes);

server.listen(4000, () => {
    console.log("Servidor rodando na porta 4000");
});