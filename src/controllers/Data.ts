import { Request, Response } from "express";
class Data {
    public async dia(req:Request, res:Response) {
        const dia = (new Date()).getDate() + ""
        return res.json({dia})
    }
    public async mes(req:Request, res:Response) {
        const mes = (new Date()).getMonth()+1
        return res.json({mes})
    }
    public async ano(req:Request, res:Response) {
        const ano = (new Date()).getFullYear()
        return res.json({ano})
    }
}

export default new Data();