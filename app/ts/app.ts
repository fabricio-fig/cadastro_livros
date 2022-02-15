// import { Livro } from "./models/livro";

import { LivroController } from "./controllers/livrocontroller";

// let livro = new Livro("Meu Livro", "Fabricio", "UFRN", 2022);

// console.log(livro);

let controller = new LivroController();

document.querySelector('.form').addEventListener('submit', controller.cadastrar.bind(controller));