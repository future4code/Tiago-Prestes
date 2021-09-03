export class Products {
    
    constructor(
        public id: string,
        public name: string,
        public description: string,
        public price: number,
        public origin: string,
        public destination: string
    ) {

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