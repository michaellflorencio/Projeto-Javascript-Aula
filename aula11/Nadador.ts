import { Atleta } from "./Atleta";

export class Nadador extends Atleta{
    constructor(nome:string){
        super(nome)
    }

    public aquecer(): void {
        console.log("Estou fazendo polichinelo...") // herdando a funcao(aquecer) da classe atleta e implementando oq ela faz
    }

        public nadar(): void{
            console.log("Estou nadando")
        }



}