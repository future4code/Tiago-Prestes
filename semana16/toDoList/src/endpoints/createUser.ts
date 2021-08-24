import { Request, Response } from "express"
import insertUser from "../data/insertUser"

export default async function createUser(req: Request, res: Response) {
   // validar entradas da requisição
    try {
        if ( 
            !req.body.name ||
            !req.body.nickname ||
            !req.body.email
        ) {
            res
                .status(400)
                .send('Complete os campos "name", "nickname" e "email"')
        }
        
        //consultar o banco de dados
        const id: string = Date.now() + Math.random().toString()
        await insertUser(
            id,
            req.body.name,
            req.body.nickname,
            req.body.email
        )
        //validar saídas do banco - Nesse caso não tem saidas
        //responder a requisição
        res
            .status(200)
            .send('Usuário criado com sucesso!')
    } catch (error) {
        res.status(400).send({
            message: error.message || error.sqlMessage
        })
    }
}