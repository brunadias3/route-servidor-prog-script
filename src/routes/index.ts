import data from './data'
import { Router } from 'express'
import math from './matematica'
import Login from '../controllers/Login';

const routes = Router();

routes.use("/date", data)
routes.use("/math", math)
routes.post("/login", Login.login);

export default routes;