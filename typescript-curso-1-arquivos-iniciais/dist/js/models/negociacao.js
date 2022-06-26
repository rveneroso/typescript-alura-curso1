// A palavra reservada export torna a classe exportável e visível para outros módulos.
export class Negociacao {
    // Simplificando a classe com o modificador readonly de forma a não ser mais necessária a criação
    // dos métodos get para os atributos cujos valores não podem ser modificados.
    constructor(data, quantidade, valor) {
        this.data = data;
        this.quantidade = quantidade;
        this.valor = valor;
    }
    get volume() {
        return this.quantidade * this.valor;
    }
}
