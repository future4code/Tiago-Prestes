import { Request, Response } from "express"
import { ProductDatabase } from "../database/ProductDatabase"
import { Products } from "../entities/Products"


export default async function createProduct(
    req: Request,
    res: Response
 ): Promise<void> {
 
    try {
       const { name, description, price } = req.body

       const id = Math.random().toString()
 
       const product = new Products( id, name, description, price )
 
       const productDatabase = new ProductDatabase()
       await productDatabase.create(product)
 
       res.status(201).end()
    } catch (error) {
       res.status(500).end()
    }
 }