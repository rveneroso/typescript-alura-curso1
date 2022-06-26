// A palavra reservada export torna a classe exportável e visível para outros módulos.
export class Negociacao {
    // Simplificando a classe com o modificador readonly de forma a não ser mais necessária a criação
    // dos métodos get para os atributos cujos valores não podem ser modificados.
    constructor(
    // O modificador readonly no atributo data impede apenas que seja feita um atribuição direta
    // ao atributo. Ele não impede que, uma vez que o valor do atributo seja obtido, seu valor
    // seja alterado através de algum dos métodos disponíveis do objeto Date. Para isso, ele será
    // tranformado novamente em private.
    _data, quantidade, valor) {
        this._data = _data;
        this.quantidade = quantidade;
        this.valor = valor;
    }
    get volume() {
        return this.quantidade * this.valor;
    }
    get data() {
        // Para evitar modificações no objeto _data através dos métodos nativos da classe Date,
        // um clone do objeto será criado e é esse clone que será retornado pelo método get. Assim,
        // quaisquer alterações feitas no objeto retornado não terão efeito sobre o atributo data.
        const data = new Date(this._data.getTime());
        return data;
    }
}
