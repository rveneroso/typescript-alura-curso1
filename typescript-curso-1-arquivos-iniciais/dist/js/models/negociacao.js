// A palavra reservada export torna a classe exportável e visível para outros módulos.
export class Negociacao {
    // O # à frente dos nomes dos atributos faz deles atributos privados.
    #data;
    #quantidade;
    #valor;

    constructor(data, quantidade, valor) {
        this.#data = data;
        this.#quantidade = quantidade;
        this.#valor = valor;
    }

    get data() {
        return this.#data;
    }

    get quantidade() {
        return this.#quantidade
    }

    get valor() {
        return this.#valor;
    }

    get volume() {
        return this.#quantidade * this.#valor;
    }
}