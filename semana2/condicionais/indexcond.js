//EXERCÍCIOS DE INTERPRETAÇÃO

//EXERCÍCIO 1---------------------------------------------------------------------

//A.
// "const numero" transforma a resposta do usuário  em número.
// "if" confere se o restante do número do usuário é identico a 0
//"else" se não for identico a 0 o usuário recebe a resposta "Não passou no teste"

//B.
// números pares

//C.
// números impares

//EXERCÍCIO 2----------------------------------------------------------------------

//A. Descobrir o nome da fruta escolhida

//B. O preço da fruta Maçã é R$2.25

//C. O preço da fruta Pêra é R$5.5
//   O preço da Undefined Maçã é R$2.25

//EXERCÍCIO 3------------------------------------------------------------------------------------------------------------------------

//A. Pedindo um número para o usuário e transformando em Number

//B. "Esse número passou no teste" / Se fosse -10 não apareceria nada, já que a mensagem deve aguardar a confirmação de um true.

//C. O erro vai se dever ao "console.log(mensagem)" pois ele não tem permissão para acessar o "let mensagem" que está dento do bloco.

//EXERCÍCIOS DE ESCRIA //

//EXERCÍCIO 1-------------------------------------------------------------------------------------------------------------------------

//A. B. C.
// const ageUser = Number(prompt("Qual sua idade?"))

// const permission = () => {
//     if(ageUser >= 18) {
//         console.log("Você pode dirigir")
//     } else {
//         console.log("Você não pode dirigir")
//     }
// }

// permission()

//EXERCÍCIO 2-------------------------------------------------------------------------------------------------------------------------

// const turnoAluno = prompt("Qual seu turno Matutino, Noturno ou Verspertino?").toLowerCase()

// const saudacao = () => {
//     if  (turnoAluno === "matutino") {
//         console.log("Bom dia")
//     }else if (turnoAluno === "noturno") {
//         console.log("Boa noite")
//     }else {
//         console.log("Boa tarde")
//     }
// }
// saudacao()

//EXERCÍCIO 3-----------------------------------------------------------------------------------------------------------------

// const saudacao = () => {
//     const turnoAluno = prompt("Qual seu turno Matutino, Noturno ou Verspertino?").toLowerCase()
//     switch (turnoAluno) {
//         case "matutino":
//             console.log("Bom dia")
//             break
//         case "noturno":
//             console.log("Boa noite")
//             break
//         case "verspertino":
//             console.log("Boa tarde")
//             break
//         default:
//             console.log("Esse turno não existe")
//     }
// }

// saudacao()

//EXERCÍCIO 4--------------------------------------------------------------------------------------------------------------------

// const cineChoice = () => {

//     const movie = prompt("Qual o gênero de filme vai assistir?").toLowerCase()
//     const price = prompt ("Qual o preço está disposto a pagar?")

//              if  (movie === "fantasia" && price <= 15) {
//                 console.log("Bom filme")
//             } else {
//                 console.log("Escolha outro filme :(")
//         }
// }

// cineChoice()

//DESAFIOS-----------------------------------------------------------------------------------------------------------------------

//1.

const cineChoice = () => {

    const movie = prompt("Qual o gênero de filme vai assistir?").toLowerCase()
    const price = prompt ("Qual o preço está disposto a pagar?")

             if  (movie === "fantasia" && price <= 15) {
                const snack = prompt("Digite o lanche que deseja para ver o filme")
                console.log("Bom filme")
                console.log(`Aproveite seu ${snack}`)
            } else {
                console.log("Escolha outro filme :(")
            }
}

cineChoice()


