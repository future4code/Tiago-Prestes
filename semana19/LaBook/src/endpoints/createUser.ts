import { Request, Response } from "express"
import { UserDatabase } from "../database/UserDatabase"
import { User } from "../types"

export default async function createUser(
   req: Request,
   res: Response
): Promise<void> {

   try {
      const { email, password } = req.body

      const id = Math.random().toString()

      const newUser: User = {id, email, password}

      const userDatabase = new UserDatabase()
      await userDatabase.create(newUser)

      res.status(201).end()
   } catch (error) {
      res.status(500).end()
   }
}