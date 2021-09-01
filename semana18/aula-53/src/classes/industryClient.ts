import { Client } from "../interfaces/client";
import { Industry } from "./industry";

export class ResidentialClient extends Industry implements Client {

    constructor(
        machinesQuantity: number,
        cep: string,
        private cpf: string,
        public name: string,
        public registrationNumber: number,
        public consumedEnergy: number
    ) {
        super(machinesQuantity, cep)
        this.cpf = cpf
    }

    getCpf(): string{
        return this.cpf
    }

    calculateBill(): number{
        return this.consumedEnergy * 0.45 + this.machinesQuantity * 100
    }
}
