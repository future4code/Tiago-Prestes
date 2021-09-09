import { Request, Response } from "express"
import selectUserById from "../data/selectUserById"

export default async function getUserById( req:Request, res:Response ){
    try {
        // validar entradas da requisição - Não é necessário pois está recebendo apenas por path parameters

        //consultar o banco de dados
        try {
            const user = await selectUserById(req.params.id)
            
            if(!user){
                res.status(404).send({
                    message: "User not found"
                })
            }

            res.status(200).send({
                id: user.id,
                nickname: user.nickname
            })

        } catch (error) {
            res.status(400).send({
                message: error.message || error.sqlMessage
            })
        }

        //validar saídas do banco

        //responder a requisição
        
    } catch (error) {
        res.status(400).send({
            message: error.message || error.sqlMessage
        })
    }
}