import { Atleta } from "./Atleta"
import { Ciclista } from "./Ciclista"
import { Nadador } from "./Nadador"

export function main(){

    // OBJETO DA CLASSE NADADOR
    const nadador: Nadador = new Nadador("Michael")
    const ciclista: Ciclista = new Ciclista("Tommy")


    // metodos chamados
    nadador.aquecer()
    nadador.nadar()
    nadador.visualizar()

    ciclista.aquecer
    ciclista.pedalar
    ciclista.visualizar
}


main()