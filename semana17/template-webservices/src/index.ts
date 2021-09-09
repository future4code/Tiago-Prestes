import app from "./app"
import createUser from './endpoints/createUser'
import { getAddressInfo } from "./services/getAddressInfo"

app.post('/users/signup', createUser)

console.log("Teste do Via CEP: ")

getAddressInfo("85807530")
    .then(console.log)