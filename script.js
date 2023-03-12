/*
     => OBJETIVO - quando clicarmos no botao temos que mostrar a imagem de fundo correspondente;
   
    - passo 1 - dar um jeito de pegar o elemento HTML dos botoes
   
    - passo 2 - dar um jeito de identificar o clique do usuario no botao
   
    - passo 3 - desmarcar o botao selecionado anterior
   
    - passo 4 - marcar o botao clicado como se estivesse selecionada
   
    - passo 5 - esconder a imagem anterior
   
    - passo 6 - fazer aparecer a imagem correspondente ao botao clicado
*/


//- passo 1 - dar um jeito de pegar o elemento HTML dos botoes;

const botoesCarrossel = document.querySelectorAll(".botao")

const imagens = document.querySelectorAll('.imagen') 



//- passo 2 - dar um jeito de identificar o clique do usuario no botao
botoesCarrossel.forEach( (botao, indice) => {   
    botao.addEventListener('click', () => {
        
        desativarbotaoSelecionado()


        selecionarBotaoCarrossel(botao)
        

        esconderImagemAtiva()


        mostrarImagemDeFundo(indice)   
    
    })
})



function desativarbotaoSelecionado() {
    const botaoSelecionado = document.querySelector('.selecionado')
    botaoSelecionado.classList.remove('selecionado')
}

function selecionarBotaoCarrossel(botao) {
    botao.classList.add('selecionado')
}

function esconderImagemAtiva() {
    const imgAtiva = document.querySelector(".ativo")
    imgAtiva.classList.remove('ativo')
}

function mostrarImagemDeFundo(indice) {
    imagens[indice].classList.add('ativo')
}
