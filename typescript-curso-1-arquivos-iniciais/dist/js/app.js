import { Negociacao } from "./models/negociacao.js";

const negociacao = new Negociacao(new Date(), 10, 1000);
console.log(negociacao.volume);
// Ao contrário do que se possa pensar, a linha abaixo não está alterando o valor do atributo
// quantidade. O atributo é privado e só pode ser alterado por um método da própria classe.
// O que a linha abaixo faz é criar um novo atributo também chamado quantidade e que recebe
// o valor 25.
//negociacao.quantidade = 25;