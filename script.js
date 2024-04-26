const modoNoturnoBotao = document.getElementById('modo-noturno-botao');
const corpo = document.body;
const header = document.querySelector('header');
const main = document.querySelector('main');
const footer = document.querySelector('footer');
modoNoturnoBotao.addEventListener('click', function() {
    modoNoturnoBotao.classList.toggle('dark-mode')
})