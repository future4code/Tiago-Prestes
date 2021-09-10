import { Products } from "./Products";

export class Ticket extends Products {

    constructor(
    id: string,
    name: string,
    description: string,
    price: number,
    public origin: string,
    public destination: string
    ) {
        super(id, name, description, price);
    }
    

}