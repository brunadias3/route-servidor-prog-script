import { Request, Response } from "express";
import { generateToken } from '../middlewares'

class Login {
    public async login(req:Request, res:Response) {
        let {mail} = req.body
        const r = await generateToken({mail});
        return res.json({r})
    }
}

export default new Login();