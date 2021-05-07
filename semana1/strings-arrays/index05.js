/* 
1. 
a. undefined
b. null
c. 11
d. 3
e. [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]
f. 9

2.
SUBI NUM ÔNIBUS EM MIRROCOS 
27
*/


//1.
/*const userEmail = prompt("Qual seu email?")
const userName = prompt("Digite seu nome")
console.log(`O e-mail ${userEmail} foi cadastrado com sucesso ${userName}`)*/


//2.

//a.
const food = [
    ` panqueca`,
    ` lasanha`,
    ` macarrão`,
    ` pão`,
    ` churrasco`
]
console.log(food)

//b.
console.log(` 
    ${food[0]}
    ${food[1]}
    ${food[2]}
    ${food[3]}
    ${food[4]}
    `)
console.log(`Essas são as minhas comidas preferidas: ${food}`)

//c.

let userFood = prompt("Qual seu comida preferida?")
food [1] = userFood
console.log(food)
*/

//3.

//a.
const listaDeTarefas = []

//b.
const tarefasUsuario1 = prompt("Diga uma tarefas que precisa realizar?")
const tarefasUsuario2 = prompt("Diga outra tarefas que precisa realizar?")
const tarefasUsuario3 = prompt("Diga mais uma tarefas que precisa realizar?")
listaDeTarefas.push(tarefasUsuario1, tarefasUsuario2, tarefasUsuario3)

//c.
console.log(listaDeTarefas)

//d.
const tarefaFeita = prompt("Digite a tarefa que foi feita 0, 1 ou 2")

//e.
listaDeTarefas.splice(tarefaFeita, 1)

//f.
console.log(listaDeTarefas)
*/


