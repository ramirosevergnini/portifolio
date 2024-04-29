const modoNoturnoBotao = document.getElementById('modo-noturno-botao');
const html = document.querySelector('html')
const checkbox = document.getElementById('switch')
const hamburguer = document.getElementById('menuHamburguer')
const menu = document.getElementById('menu')

checkbox.addEventListener('change', function()  {
    html.classList.toggle('dark-mode')
})
function abrirMenu(){
    if(menu.style.display == 'block'){
        menu.style.display = 'none'
    }else{
        menu.style.display = 'block' 
    }
}