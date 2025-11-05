import readlinesync = require("readline-sync")
import { logar,somar } from "./Exemplo01"


let valor: number = somar(readlinesync.questionInt(), readlinesync.questionInt())
let valor2: number = somar(2,5)
let login: string | number = "michael@gmail.com" // valor digitado pode ser numero ou string

console.log(`O resultado da sua adição é: ${valor}`)
console.log(`O resultado da sua adição é: ${valor2}`)


logar(login)

// let login: number | string = readlinesync.question()
// logar(login) // testar depois, question só retorna string