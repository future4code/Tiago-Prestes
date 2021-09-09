import { Request, Response } from "express"
import updateUser from "../data/updateUser"

export default async function createUser( req:Request, res:Response ){
    try {
        // validar entradas da requisição
        if(
            req.body.name === '' ||
            req.body.nickname === '' ||
            req.body.email === ''
        ){
            res.status(400).send({
                message: "Complete all de fields."
            })
        }
        if(!req.body.name && !req.body.nickname && !req.body.email){
            res.status(400).send({
                message: "Choise at last one value!"
            })
        }

        //consultar o banco de dados
        await updateUser(
            req.params.id,
            req.body.name,
            req.body.nickname,
            req.body.email
        )   
        //validar saídas do banco - Nesse caso não tem saidas 
        //responder a requisição
        res.status(200).send({
            message: "User update!"
        })
    } catch (error) {
        res.status(400).send({
            message: error.message || error.sqlMessage
        })
    }
}