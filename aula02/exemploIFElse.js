const leia = require('readline-sync')

let nota1, nota2, media

nota1 = leia.questionFloat("Digite sua primeira nota: ")
nota2 = leia.questionFloat("Digite sua segunda nota: ")

media = (nota1+nota2) /2

if (media >=6){
    console.log("Parabéns, você passou!")
} 
else if(media == 5){
    console.log("Você está de exame")
} else{
    console.log("Você reprovou!")
}

console.log("A sua média é: ", media)











