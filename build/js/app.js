const boton = document.querySelector('.app__puntos');
const nav = document.querySelector('nav');

boton.addEventListener('click', () => {
    nav.classList.toggle('activo');
    boton.classList.toggle('activo');

})