const item = process.argv[2]
const tarefas = [
    "Lavar a louça",
	"Comprar Leite"
]

const addTarefa = [...tarefas, item]

console.log(`Tarefas: ${addTarefa}`)