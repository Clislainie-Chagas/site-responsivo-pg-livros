
const btnMenu = document.getElementById('btn_barra')
const menu = document.getElementById('menu-mobile')
const overlay =document.getElementById('overlay')

btnMenu.addEventListener('click', function() {
    menu.classList.add('abrir_menu')
}) 

menu.addEventListener('click', function() {
    menu.classList.remove('abrir_menu') 
})

overlay.addEventListener('click', function() {
    menu.classList.remove('abrir_menu') 
}) 

