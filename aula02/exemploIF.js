const leia = require ('readline-sync')

let idade

console.log("Digite sua idade:" )
idade = leia.questionInt()

if (idade >= 18){
    console.log("Maior de idade")
}
else{
    console.log ("Menor de idade")
}

console.log("Fim do programa")


















