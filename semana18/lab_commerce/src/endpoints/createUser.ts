import { Request, Response } from "express"
import { UserDatabase } from "../database/UserDatabase"
import { User } from "../entities/User"

export default async function createUser(
    req: Request,
    res: Response
 ): Promise<void> {
 
    try {
       const { name, email, age } = req.body

       const id = Math.random().toString()
 
       const user = new User( id, name, email, age )
 
       const userDatabase = new UserDatabase()
       await userDatabase.create(user)
 
       res.status(201).end()
    } catch (error) {
       res.status(500).end()
    }
 }