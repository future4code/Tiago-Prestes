import { Customer } from "./classes/customer";
import { User } from "./classes/user";
import { Client } from "./interfaces/client";
import { Place } from "./classes/place";
import { Residence } from "./classes/residence";
import { Commerce } from "./classes/commerce";
import { Industry } from "./classes/industry";
import { ComercialClient } from "./classes/comercialClient";

//Herança

// const igor = new User ("01", "email@doigor", "igor nome", "Pass")

// console.log(igor.getEmail(), igor.getId(), igor.getName())
// igor.introduceYourself()

// const consumista = new Customer(
//   "02",
//   "cosumi@email",
//   "Consumista",
//   "Pass",
//   "1407")

// console.log(
//   consumista.getCreditCard(),
//   consumista.getEmail(),
//   consumista.getName(),
//   consumista.purchaseTotal
//   )


//  Polimorfismo

// const client: Client = {
//   name: "João",
//   registrationNumber: 1,
//   consumedEnergy: 1,
//   calculateBill: () => {
//     return 2
//   }
// }

// console.log(client)

// const cepItajai = new Place ("8805320")

// const houses = new Residence (6, "80085")
// console.log(houses.getCep(), houses.getResidentsQuantity())

// const shop = new Commerce (4, "52000")
// console.log(shop.getCep(), shop.getFloorsQuantity())

// const machine = new Industry (2, "0076500")
// console.log(machine.getCep(), machine.getMachinesQuantity())

const testeClients = new ComercialClient( //residentialClient, industryClient
    5,
    "8008",
    "cnpjotiscpf",
    "Nomezim",
    7,
    100
)
console.log(testeClients, testeClients.calculateBill())

