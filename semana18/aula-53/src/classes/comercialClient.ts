import { Client } from "../interfaces/client"
import { Commerce } from "./commerce"

export class ComercialClient extends Commerce implements Client {

    constructor(
        floorsQuantity: number,
        cep: string,
        private cnpj: string,
        public name: string,
        public registrationNumber: number,
        public consumedEnergy: number
    ) {
        super(floorsQuantity, cep)
        this.cnpj = cnpj
    }

    getCnpj(): string {
        return this.cnpj
    }

    calculateBill(): number {
        return this.consumedEnergy * 0.53
    }
}