import { Router } from "express";
import Data from "../controllers/Data";

const routes = Router();

routes.get("/day", Data.dia)
routes.get("/month",Data.mes)
routes.get("/year", Data.ano)
export default routes;