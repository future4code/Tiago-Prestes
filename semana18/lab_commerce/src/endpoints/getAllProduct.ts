import { Request, Response } from "express"
import { ProductDatabase } from "../database/ProductDatabase"

export default async function getAllProduct(
    req: Request,
    res: Response
): Promise<void> {

    try {

        const product = await new ProductDatabase().getAll()
        
        res.send(product)

    } catch (error) {
        res.status(500).send("Unexpected server error")
    }
}
