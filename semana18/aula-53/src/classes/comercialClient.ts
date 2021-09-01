import { Client } from "../interfaces/client"
import { Commerce } from "./commerce"

export class ComercialClient extends Commerce implements Client {
    private cnpj: string
    name: string = 'Gold Finger'
    registrationNumber: number = 800
    consumedEnergy: number = 250

    constructor(
        cep: string,
        floorsQuantity: number,
        cnpj: string) {
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