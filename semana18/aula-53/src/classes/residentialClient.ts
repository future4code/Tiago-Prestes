import { Client } from "../interfaces/client";
import { Residence } from "./residence";

export class ResidentialClient extends Residence implements Client {

    constructor(
        ResidentialClient: number,
        cep: string,
        private cpf: string,
        public name: string,
        public registrationNumber: number,
        public consumedEnergy: number
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
