const modoNoturnoBotao = document.getElementById('modo-noturno-botao');
const corpo = document.body;
const header = document.querySelector('header');
const main = document.querySelector('main');
const footer = document.querySelector('footer');
function darkMode() {
    console.log('darkMode() foi chamada');
    corpo.classList.toggle('dark-mode');
    header.classList.toggle('dark-mode');
    main.classList.toggle('dark-mode');
    footer.classList.toggle('dark-mode');
}