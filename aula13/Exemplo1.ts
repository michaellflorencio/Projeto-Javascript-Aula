import { converte } from "./Funcoes";

export function main(){


    try{
        const resultado = converte(123);

        console.log(resultado);

    } catch(error){ // verifica o possivel erro

        if(error instanceof TypeError ){ // verifica o tipo do erro
            console.error("TypeError: " + error.message)
        }
    } finally{
        console.log("Sempre irá executar!") // finally é opcional, mas sempre sera executado caso seja declarado
    }




}



main()