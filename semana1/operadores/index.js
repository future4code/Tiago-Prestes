/*
1. Leia o código abaixo. Indique todas as mensagens impressas no console,
SEM EXECUTAR o programa.
a. FALSE
b. FALSE
c. TRUE
d. Booleano

2. Por falta do "Number" antes do comando "prompt" vão se formar strings. 
   O resultado será o primeiroNumero (ex: 2) concatenado com o segundoNumero (ex: 2) e não a soma.
   O resultado no console será 22

3. Adicionar o Number:
   let primeiroNumero = Number(prompt("Digite um numero!")) //ex: 2
   let segundoNumero = Number(prompt("Digite outro numero!")) // ex: 2
   O console vai mostrar 4
*/

// Exercício 1 
/*
let idadeUser = Number(prompt("Digite sua idade"))
let idadeBff = Number(prompt("Qual a idade do seu melhor amigo?"))

let idadeMaior = idadeUser >= idadeBff
let diferencaIdade =  idadeUser - idadeBff

console.log("Sua idade é maior que a do seu melhor amigo?", idadeMaior)
console.log("Diferença de idade", diferencaIdade)
*/

//Exercício 2
/*
let numberPar = Number(prompt("Digite um número par:"))
console.log("Resto do número par", numberPar % 2)
//O padrão é sempre 0, pois números pares divididos por 2 e nunca tem sobra.
//O padrão com número impar é sempre 1, pois um impar divido por 2 sempre sobra 1.
*/

//Exercício 3
/*
let idadeUser = Number(prompt("Digite sua idade"))

console.log("Idade em meses", idadeUser * 12)
console.log("Idade em dias", idadeUser * 365)
console.log("Idade em horas", idadeUser * 8760)
*/

//Exercício 4

/*
let primeiroNumero = Number(prompt("Digite um numero de 10 a 100!"))
let segundoNumero = Number(prompt("Digite outro numero menor que o primeiro!"))

let divisivel1 = primeiroNumero % segundoNumero === 0
let divisivel2 = segundoNumero % primeiroNumero === 1

console.log("O primeiro numero é maior que segundo?", primeiroNumero > segundoNumero)
console.log("O primeiro numero é igual ao segundo?", primeiroNumero == segundoNumero)
console.log("O primeiro numero é divisível pelo segundo?", divisivel1)
console.log("O segundo numero é divisível pelo primeiro?", divisivel2)
*/
