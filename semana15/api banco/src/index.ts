import express, { Express, Request, Response} from "express"
import cors from "cors"
import { accounts } from "./accounts"

const app: Express = express()

app.use(express.json())
app.use(cors())

app.post("/users", (req: Request, res: Response)=>{
    try {
        const { name, CPF, dateOfBirthString } = req.body

        const [day, month, year] = dateOfBirthString.split("/")

        const dateOfBirth: Date = new Date(`${day}-${month}-${year}`)

        const ageImMilisseconds: number = new Date().getTime() - dateOfBirth.getTime()

        const ageInYears: number = ageImMilisseconds / 1000 / 60 / 60 / 24 /365

        if(ageInYears < 18){
            res.statusCode = 406
            throw new Error("Usuário menor de idade!")
        }

        accounts.push({
            name,
            CPF,
            dateOfBirth,
            balance: 0,
            statement: []
        })

        res.status(201).send("Conta criada com sucesso!")

    } catch (error) {
        console.log(error)
        res.status(error.message)
    }
})

app.get("/users", (req: Request, res: Response)=>{
    try {
        if(!accounts.length){
            res.statusCode = 404
            throw new Error("Nenhuma conta encontrada")
        }

        res.status(200).send(accounts)
    } catch (error) {
        res.send(error.message)
    }
})

app.listen(3003, ()=>{
    console.log("Server is on!")
})