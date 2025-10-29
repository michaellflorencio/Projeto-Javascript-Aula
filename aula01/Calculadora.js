// importanto a bliblioteca
const leia = require('readline-sync')

// variaveis
let celsius, fahrenheit

// entrada de dados
celsius = leia.questionFloat("Insira a temperatura em Celsius: ")

// processamento - multiplicar a temperatura em graus Celsius por 1,8 e somar 32.
fahrenheit = celsius * 1.8 + 32

// saida de dados
console.log("A temperatura em fahrenheit é: " + fahrenheit)

if (fahrenheit >= 86){
    console.log("Ta calor hoje")
}
if(fahrenheit <= 59){
    console.log("Ta frio hoje")
}
else{
    console.log("Hoje ta de boaas")
}


