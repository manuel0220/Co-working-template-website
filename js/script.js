AOS.init();
const menu = document.getElementById('menu-mobile');
const movimiento = document.getElementById('menu-movimiento');
const icono = document.getElementById('icono-hamburguesa');

menu.addEventListener('click', function(){
  if(movimiento.className === 'container-nav'){
   movimiento.className += ' container-nav-2';
   icono.className += ' fa-x';
  } else {
    movimiento.className = 'container-nav';
    icono.className = ' fa-solid fa-bars';
      }
  });