export class Negociacoes {
    constructor() {
        // private negociacoes: Array<Negociacao> = [];
        // A linha abaixo é um atalho do Typescript para se criar a variável negociacoes como um Array 
        // exatamente como está na linha comentada acima.
        this.negociacoes = [];
    }
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    // lista(): Array<Negociacao> {
    // lista(): ReadonlyArray<Negociacao> {
    // Outra forma de se obter o mesmo resultado da linha comentada acima é declarar o método
    // como a seguir:
    lista() {
        // Uma solução para não permitir a alteração da lista sendo retornada por esse método é
        // utilizar o spread operator para criar uma cópia da lista original da classe e retornar
        // essa cópia. A linha comentada abaixo faz esse trabalho.
        // return [...this.negociacoes];
        // Entretanto, a melhor maneira de se alcançar esse mesmo resultado é fazer o tipo de
        // retorno do método ser um ReadonlyArray em vez de Array. Dessa forma, o Typescript
        // automaticamente bloqueia o acesso às operações que permitiriam a modificação do Array.
        return this.negociacoes;
    }
}
