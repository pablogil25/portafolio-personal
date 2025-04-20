// Desplazamiento suave para los enlaces del menú
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });

        // Cerrar el menú si se hace clic en un enlace (opcional, para móviles)
        if (navMenu.classList.contains('show')) {
            navMenu.classList.remove('show');
        }
    });
});

// Animación de habilidades al aparecer en pantalla
window.addEventListener('scroll', () => {
    const skills = document.querySelectorAll('#habilidades li');
    skills.forEach(skill => {
        const position = skill.getBoundingClientRect().top;
        if (position < window.innerHeight) {
            skill.classList.add('visible');
        }
    });
});

// Mostrar u ocultar el menú hamburguesa
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('header nav ul');

menuToggle.addEventListener('click', (e) => {
    e.stopPropagation(); // Evitar interferencias al hacer clic
    navMenu.classList.toggle('show'); // Alternar clase 'show'
});

// Cerrar el menú al hacer clic fuera de él
document.addEventListener('click', (e) => {
    if (!navMenu.contains(e.target) && !menuToggle.contains(e.target)) {
        navMenu.classList.remove('show'); // Ocultar el menú
    }
});
