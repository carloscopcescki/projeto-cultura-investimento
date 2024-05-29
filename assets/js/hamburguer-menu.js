const hamburguer = document.querySelector('.hamburguer');
const navmenu = document.querySelector('.navbar-menu');

hamburguer.addEventListener("click", () => {
    hamburguer.classList.toggle("active");   
    navmenu.classList.toggle("active"); 
})