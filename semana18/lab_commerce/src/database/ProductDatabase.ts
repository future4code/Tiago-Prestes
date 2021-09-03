import { Products } from "../entities/Products";
import { Ticket } from "../entities/Ticket";
import { BaseDatabase } from "./BaseDataBase";

export class ProductDatabase extends BaseDatabase {
    private TABLE_NAME = "Products"

    async create(product: Products | Ticket) {
        await BaseDatabase.connection(this.TABLE_NAME)
            .insert(product)
    }

    async getAll() {
        return BaseDatabase.connection(this.TABLE_NAME)
            .select()
    }
}