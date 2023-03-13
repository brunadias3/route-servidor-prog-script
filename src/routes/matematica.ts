import { Router } from "express";
import Matematica from "../controllers/Matematica"
import { authAdmin } from "../middlewares";

const routes = Router();

routes.get("/add", Matematica.somar)
routes.get("/sub", authAdmin, Matematica.subtrair)

export default routes