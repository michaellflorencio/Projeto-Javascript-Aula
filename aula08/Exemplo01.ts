import readlinesync = require("readline-sync")

// Exemplo de Funções
export function somar(a: number, b:number): number{
    let resultado: number = a + b

    return resultado
}

export function logar(usuario: number | string): void{
    if (typeof(usuario) === "number" )
        console.log("\nVocê está acessando pelo seu celular");
    else
        console.log("\nVocê está acessando pelo seu Email");
}

// export function transformaNumeroEmExtenso(valor:number): string{
//     let texto: string

//     if(valor === 5){
//         texto = "Valor digitado é cinco"
//     }else{
//         texto = "Voce digitou  valor diferente de cinco"
//     }
// }

// Chamada das funcoes

let valor: number = somar(readlinesync.questionInt(), readlinesync.questionInt())
let valor2: number = somar(2,5)
let login: string | number = "michael@gmail.com" // valor digitado pode ser numero ou string

console.log(`O resultado da sua adição é: ${valor}`)
console.log(`O resultado da sua adição é: ${valor2}`)


logar(login)

// let login: number | string = readlinesync.question()
// logar(login) // testar depois, question só retorna string

