// A palavra reservada export torna a classe exportável e visível para outros módulos.
export class Negociacao {

    // Com a sintaxe abaixo no construtor o Typescript automaticamente cria as variáveis
    // de classe _data, _quantidade e _valor com modificador de acesso private sem a necessidade
    // de quaisquer declarações anteriores dessas variáveis.
    constructor(
        private _data: Date, 
        private _quantidade: number, 
        private _valor: number) { }

    get data(): Date {
        return this._data;
    }

    get quantidade(): number {
        return this._quantidade
    }

    get valor(): number {
        return this._valor;
    }

    get volume(): number {
        return this._quantidade * this._valor;
    }
}