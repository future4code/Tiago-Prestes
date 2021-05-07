// Exemplos

// Exercício 0A

// function soma(num1, num2) {
//    // implemente sua lógica aqui
//    return num1 + num2
// }

// Exercício 0B

// function imprimeMensagem() {
//    // implemente sua lógica aqui
//    const mensagem = prompt('Digite uma mensagem!')

//    console.log(mensagem)
// }

// Exercícios

//Exercício 1

function calculaAreaRetangulo() {
   // implemente sua lógica aqui
   const altura = prompt('Digite uma mensagem!')
   const largura = prompt('Digite uma mensagem!')

   console.log(altura * largura)
}

//Exercício 2

function imprimeIdade() {
   // implemente sua lógica aqui
   const anoAtual = prompt('Digite uma mensagem!')
   const anoDeNascimento = prompt('Digite uma mensagem')

   console.log(anoAtual - anoDeNascimento)
}

//Exercício 3

function calculaIMC(peso, altura) {
   // implemente sua lógica aqui
   return(peso / (altura * altura))
}


//Exercício 4

function imprimeInformacoesUsuario() {
   // implemente sua lógica aqui
   const nome = prompt('Digite um nome')
   const idade = prompt('Digite um idade')
   const email = prompt('Digite um email')
   console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
}

//Exercício 5

function imprimeTresCoresFavoritas() {
   //implemente sua lógica aqui
   const cor1 = prompt('Digite uma cor')
   const cor2 = prompt('Digite uma cor')
   const cor3 = prompt('Digite uma cor')
   const cores = [cor1, cor2, cor3]

   console.log(cores)
}

//Exercício 6

function retornaStringEmMaiuscula(string) {
   // implemente sua lógica aqui
   return string.toUpperCase()
}

//Exercício 7

function calculaIngressosEspetaculo(custo, valorIngresso) {
   // implemente sua lógica aqui
   return custo / valorIngresso
}

// Exercício 8

function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  return string1 != string2
}

// Exercício 9

function retornaPrimeiroElemento(array) {
   // implemente sua lógica aqui
   return array[0]
}

// Exercício 10

function retornaUltimoElemento(array) {
   // implemente sua lógica aqui
   return array[array.length-1]
}

//Exercício 11

function trocaPrimeiroEUltimo(array) {
   // implemente sua lógica aqui
   const novorArray = Number['5,2,3,4,1']
   return array.splice(array, novorArray) //Várias tentatvias sem sucesso.
}

// Exercício 12

function checaIgualdadeDesconsiderandoCase(string1, string2) {
   // implemente sua lógica aqui
   return string1.toUpperCase() === string2.toUpperCase()
}

// Exercício 13

function checaRenovacaoRG() {
   // implemente sua lógica aqui
   const anoAtual = prompt('Digite o ano atual')
   const anoDeNascimento = prompt('Digite o ano de nascimento')
   const carteiraId = prompt('Digite a data de emissão do ID')
   
   console.log() //AAAAAAAAAAAAAAAAAcabou o tempo.
}

// Exercício 14

function checaAnoBissexto(ano) {
   // implemente sua lógica aqui
}

// Exercício 15

function checaValidadeInscricaoLabenu(pessoa) {
   // implemente sua lógica aqui
}