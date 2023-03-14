import { Router, Request, Response } from "express";
import matematica from './matematica';
import data from "./data"
import user from './user'
import  Login from "../controllers/Login"
import { authorization } from "../middlewares";
import { UserController } from "../controllers";

const routes = Router()

routes.post("/login", UserController.login);
//routes.use("/date", data);
routes.use("/user", user);
routes.use("/math", authorization, matematica);

routes.use((req: Request, res: Response) => res.json({ error: "Requisição desconhecida" }));

export default routes;