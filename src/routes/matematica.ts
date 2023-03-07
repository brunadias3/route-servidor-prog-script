import { Router } from "express";
import Matematica from "../controllers/Matematica"

const routes = Router();

routes.get("/add", Matematica.somar)
routes.get("/sub", Matematica.subtrair)

export default routes