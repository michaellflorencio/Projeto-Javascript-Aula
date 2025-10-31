const leia = require("readline-sync");

// ele faz(do) primeiro e depois verifica(while) a condiçao
let numero, resultado, contador = 3;

do {
    
    numero = leia.questionInt("\nDigite um numero inteiro: ");

    resultado = numero * 5;

    console.log("\nO resultado da multiplicação é: " + resultado);

}while (contador <= 2);





