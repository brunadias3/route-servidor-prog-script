import * as jwt from 'jsonwebtoken';
import * as dotenv from 'dotenv';
dotenv.config()

export const generateToken = async (obj:any) => jwt.sign(obj,process.env.JWT_SECRET);