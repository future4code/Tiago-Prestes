export class User {
    private id: string
    private name: string
    private description: string    
    private price: number

    constructor(
        charId: string,
        charName: string,
        charDescription: string,
        charPrice: number
    ) {
        this.id = charId
        this.name = charName
        this.description = charDescription
        this.price = charPrice
    }

    getId() {
        return this.id
    }

    getName() {
        return this.name
    }

    getDescription() {
        return this.description
    }

    getPrice() {
        return this.price
    }

}