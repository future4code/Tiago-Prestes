import { Client } from "../interfaces/client";
import { Residence } from "./residence";

export class ResidentialClient extends Residence implements Client {
    private cpf: string
    name: string = "Chijo"
    registrationNumber: number = 200
    consumedEnergy: number = 150

    constructor(
        ResidentialClient: number,
        cep: string,
        cpf: string
    ) {
        super(ResidentialClient, cep)
        this.cpf = cpf
    }

    getCpf(): string{
        return this.cpf
    }

    calculateBill(): number{
        return this.consumedEnergy * 0.75
    }
}
