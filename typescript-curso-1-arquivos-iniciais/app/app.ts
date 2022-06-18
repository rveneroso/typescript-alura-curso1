// Quando o Typescript faz a importação automaticamente ele não coloca a extensão
// .js no nome do arquivo. É preciso ficar atento a esse comportamento para não tere
// erros.
import { NegociacaoController } from "./controllers/negociacao-controller.js";

const controller = new NegociacaoController();

const form = document.querySelector('.form');
form.addEventListener('submit', event => {
    // Por padrão o Javascript recarrega a página após um submit. A execução do método
    // preventDefault() elimina esse comportamento.
    event.preventDefault();
    controller.adiciona();
})