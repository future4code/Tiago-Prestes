import { UserDatabase } from "../data/UserDatabase";
import { LoginInputDTO, SignupInputDTO, User } from "../entities/User";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/hashManager";
import { IdGenerator } from "../services/idGenerator";

export class UserBusiness {

   async signup(input: SignupInputDTO): Promise<string> {

      try {
         if (!input.name || !input.email || !input.password) {
            throw new Error('"name", "email" and "password" must be provided')
         }

         const idGenerator = new IdGenerator();
         const id: string = idGenerator.generateId()

         const hashManager = new HashManager()
         const cypherPassword = await hashManager.hash(input.password);

         const user: User = {
            id,
            name: input.name,
            email: input.email,
            password: cypherPassword
         }

         const userDatabase = new UserDatabase()
         await userDatabase.insertUser(user)

         const authenticatorManager = new Authenticator
         const token: string = authenticatorManager.generateToken({ id })

         return token

      } catch (error: any) {
         throw new Error(error.message)
      }
   }

   async login(input: LoginInputDTO) {

      try {
         if (!input.email || !input.password) {
            throw new Error('"email" and "password" must be provided')
         }

         const userDatabase = new UserDatabase()
         const user: User = await userDatabase.getUserByEmail(input.email)

         if (!user) {
            throw new Error("Invalid credentials")
         }

         const hashManager = new HashManager()
         const passwordIsCorrect: boolean = await hashManager.compare(input.password, user.password)

         if (!passwordIsCorrect) {
            throw new Error("Invalid credentials")
         }

         const authenticatorManager = new Authenticator()
         const token: string = authenticatorManager.generateToken({
            id: user.id
         })

         return token
         
      } catch (error: any) {
         throw new Error( error.sqlMessage || error.message )
      }

   }
}