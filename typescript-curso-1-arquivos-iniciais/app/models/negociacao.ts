// A palavra reservada export torna a classe exportável e visível para outros módulos.
export class Negociacao {

    // Simplificando a classe com o modificador readonly de forma a não ser mais necessária a criação
    // dos métodos get para os atributos cujos valores não podem ser modificados.
    constructor(
        public readonly data: Date, 
        public readonly quantidade: number, 
        public readonly valor: number) { }

   

    get volume(): number {
        return this.quantidade * this.valor;
    }
}