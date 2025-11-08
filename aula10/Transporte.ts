export class Transporte {
    // ATRIBUTOS
    private _capacidade: number

    // MÉTODO CONSTRUTOR
    constructor (capacidade: number){
        this._capacidade = capacidade
    }

    // MÉTODOS DE ACESSO - GET e SET
    public get capacidade(){
        return this._capacidade
    }
    public set capacidade(novaCapacidade: number){
        this._capacidade = novaCapacidade
    }

    // MÉTODO DE SUPORTE / AUXILIAR
	public visualizar(): void {
		
		console.log("\n\n************************************************************");
		console.log("Dados do Meio de Transporte:");
		console.log("****************************************************************");
		console.log("Capacidade (número de passageiros): " + this._capacidade);
	}

}