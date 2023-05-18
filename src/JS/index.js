 const botaoAlterarTema = document.getElementById("alterar-tema"); //1-pegar no JS o elemento HTML correspondente ao botao troca de tema.

 const body = document.querySelector("body"); //2-dar um jeito de pegar no JS o elemento HTML correspondente ao body.

 const imagemBotaoTrocaDeTema = document.querySelector(".imagem-botao"); //5-trocar imagem do botão de alterar tema para lua.

       botaoAlterarTema.addEventListener("click", () => {

       //6-Verificar se o body contem o modo escuro.
       const modoEscuroEstaAtivo = body.classList.contains("modo-escuro");

       if(modoEscuroEstaAtivo) {
       body.classList.remove("modo-escuro");//7-Remover o modo escuro do body
       imagemBotaoTrocaDeTema.setAttribute("src", "./src/Imagens/sun.png");//8-trocar a imagem do botão de alterar tema para o sol.
       } else {
            body.classList.add("modo-escuro");//4-adicionar classe modo escuro no body.
            imagemBotaoTrocaDeTema.setAttribute("src", "./src/Imagens/moon.png"); //5-trocar imagem do botão de alterar tema para lua.
       };
       });//3-dar um jeito de identificar o clique do usuario no botao de troca de tema.

