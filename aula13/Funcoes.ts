import { ExcecaoSimples } from "./exceptions/ExcecaoSimples";

export function converte(conteudo: any): string{
    return conteudo.toUpperCase();
}

export function validarIdade(idade: number): void {

    if (idade < 18){
        throw new Error("A Pessoa não está apta a dirigir!")
    }else {
        console.log("A Pessoa está apta a dirigir!")
    }
}