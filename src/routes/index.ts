import data from './data'
import { Router } from 'express'
import math from './matematica'

const routes = Router();

routes.use("/date", data)
routes.use("/math", math)
export default routes