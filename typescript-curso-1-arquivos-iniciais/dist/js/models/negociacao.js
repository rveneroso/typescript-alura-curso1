// A palavra reservada export torna a classe exportável e visível para outros módulos.
export class Negociacao {
    // Com a sintaxe abaixo no construtor o Typescript automaticamente cria as variáveis
    // de classe _data, _quantidade e _valor com modificador de acesso private sem a necessidade
    // de quaisquer declarações anteriores dessas variáveis.
    constructor(_data, _quantidade, _valor) {
        this._data = _data;
        this._quantidade = _quantidade;
        this._valor = _valor;
    }
    get data() {
        return this._data;
    }
    get quantidade() {
        return this._quantidade;
    }
    get valor() {
        return this._valor;
    }
    get volume() {
        return this._quantidade * this._valor;
    }
}
