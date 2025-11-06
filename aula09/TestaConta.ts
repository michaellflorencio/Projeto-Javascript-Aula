import { Conta } from "./Conta"

import readlinesync = require("readline-sync")

export function main(){
    // INSTANCIA DA CLASSE CONTA
    const conta1: Conta = new Conta(43221, 103, 1,"Michael", 102020 )
    console.log(`Saldo da conta ${conta1.saldo}`)
    console.log(`Titular da conta ${conta1.titular}`)

    conta1.saldo = 2323 // ATUALIZEI O SALDO PARA
    console.log(`Saldo da conta ${conta1.saldo}`)

    conta1.titular = readlinesync.question(`Digite seu nome`) // ATUALIZA E INSERE O NOME DESEJADO DO TITULAR

    console.log(`Titular da conta atualizado ${conta1.titular}`) // MOSTRA O NOME ATUALIZADO

}

main()





