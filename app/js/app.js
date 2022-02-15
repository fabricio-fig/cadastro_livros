// import { Livro } from "./models/livro";
System.register(["./controllers/livrocontroller"], function (exports_1, context_1) {
    "use strict";
    var livrocontroller_1, controller;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (livrocontroller_1_1) {
                livrocontroller_1 = livrocontroller_1_1;
            }
        ],
        execute: function () {// import { Livro } from "./models/livro";
            // let livro = new Livro("Meu Livro", "Fabricio", "UFRN", 2022);
            // console.log(livro);
            controller = new livrocontroller_1.LivroController();
            document.querySelector('.form').addEventListener('submit', controller.cadastrar.bind(controller));
        }
    };
});
