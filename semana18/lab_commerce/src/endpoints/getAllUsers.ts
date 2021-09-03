import { Request, Response } from "express"
import { UserDatabase } from "../database/UserDatabase"
import { User } from "../entities/User"



export default async function getAllUser(
    req: Request,
    res: Response
): Promise<void> {

    try {

        const userDatabase = new UserDatabase()
        const userDb = await userDatabase.getAll()

        const user = userDb.map(user => {
            return new User(
                user.id,
                user.name,
                user.email,
                user.age
            )
        })

        res.send(user)
    } catch (error) {
        res.status(500).send("Unexpected server error")
    }
}
