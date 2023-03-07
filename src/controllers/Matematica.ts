import { Request, Response } from "express";

class Matematica {
    public async somar(req:Request, res:Response) {
        let {x,y} = req.body;
        const soma = parseFloat(x) + parseFloat(y)
        return res.json({soma})
    }
    public async subtrair(req:Request, res:Response) {
        let {x,y} = req.body;
        const sub = parseFloat(x) - parseFloat(y)
        return res.json({sub})
    }
}

export default new Matematica()