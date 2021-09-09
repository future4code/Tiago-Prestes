//1.
//a. Construtor é usado para inicializar os atributos e metodos.

//b. Uma vez.
// type Transaction = {
//    description: string,
//    value: number,
//    date: string
//  }

class UserAccount {
   private cpf: string;
   private name: string;
   private age: number;
   private balance: number = 0;
   private transactions: Transaction[] = [];
 
   constructor( cpf: string, name: string, age: number ) {
      console.log("Chamando o construtor da classe UserAccount")
      this.cpf = cpf;
      this.name = name;
      this.age = age;
   }
 
 }

 const firstUser = new UserAccount ("999999999", "Tiago", 30)

 //c. Getters e Setters

 //2.
 class Transaction {
   private date: string;
   private value: number;
   private description: string;
   
   constructor(newDate: string, newValue: number, newDescription: string) {
     this.date = newDate;
     this.value = newValue;
     this.description = newDescription;
   }
 } 

 const trade = new Transaction ("pix", 500, "30/08/2021")
 console.log(trade)

 //3.
 class Bank {
   private accounts: UserAccount[];
 
   constructor(accounts: UserAccount[]) {
     this.accounts = accounts;
   }

   getAccounts() {
      return this.accounts
   }

   setAccounts(newAccount: UserAccount) {
      this.accounts.push(newAccount)
   } 
 
 }