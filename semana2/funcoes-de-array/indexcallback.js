//EXERCÍCIOS DE INTERPRETAÇÃO 

//1.a

// { nome: "Amanda Rangel", apelido: "Mandi" },
// { nome: "Laís Petra", apelido: "Laura" },
// { nome: "Letícia Chijo", apelido: "Chijo" }

//2.a
//Apenas os nomes: "Amanda Rangel","Laís Petra", "Letícia Chijo"

//3.a
//Apenas os objetos que não forem contém "Chijo"
// { nome: "Amanda Rangel", apelido: "Mandi" },
// { nome: "Laís Petra", apelido: "Laura" }

//EXERCÍCIOS DE ESCRITA

//1.

const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]

//a.

// const listaNomes = pets.map((bicho) => {
//     return bicho.raca
// })
// console.log(listaNomes)

//b.

// const listaSalsicha = pets.filter((bichos) => {
//     return bichos.raca === "Salsicha"
// })
// console.log(listaSalsicha)

//c.

// const listaPoodle = pets.filter((desconto) => {
//     return desconto.raca === "Poodle"
// }).map((desconto) => {
//     return desconto.nome
// })

// console.log(`Parabéns ${listaPoodle[0]} você ganhou um desconto de 10%!`)
// console.log(`Parabéns ${listaPoodle[1]} você ganhou um desconto de 10%!`)

//2.

const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]

//a.

// const apenasNomes = produtos.map((produtoNome) => {
//     return produtoNome.nome
// })
// console.log(apenasNomes)

//b.

// const objetoComPreco = produtos.map((precoObjeto) => {
//     return ([`Nome: ${precoObjeto.nome} - Preço: R$${precoObjeto.preco * 0.95.toFixed()}`])
// })
// console.log(objetoComPreco)

//c.
// const bebidas = produtos.filter((bebida) => {
//     return bebida.categoria === "Bebidas"
// })
// console.log(bebidas)

//d.

// const obejetosYpe = produtos.filter((objetoYpe) => {
//     return objetoYpe.nome.includes("Ypê")
// })
// console.log(obejetosYpe)

//e.

// const compreYpe = produtos.filter((comprarYpe) => {
//     return comprarYpe.nome.includes("Ypê")
// }).map((comprarYpe) => {
//     console.log(`Compre ${comprarYpe.nome} por R$${comprarYpe.preco}`)
// })

//Desafios

//1.

const pokemons = [
    { nome: "Bulbasaur", tipo: "grama" },
    { nome: "Bellsprout", tipo: "grama" },
    { nome: "Charmander", tipo: "fogo" },
    { nome: "Vulpix", tipo: "fogo" },
    { nome: "Squirtle", tipo: "água" },
    { nome: "Psyduck", tipo: "água" },
 ]

//a.

// const ordemPokemon = pokemons.map((pokedex) => {
//     return pokedex.nome
// })
// console.log(ordemPokemon.sort())

// //b.
// const listaTipos = pokemons.map((repetidos) => {
//     return repetidos.tipo
// })
// const semRepetir = [...new Set(listaTipos)]
// console.log(semRepetir)

//Dia feliz!
