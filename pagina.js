// Mostrar u ocultar el menú hamburguesa
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('header nav ul');

// Desplazamiento suave para los enlaces del menú
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });

        // Cerrar el menú si está abierto (en móviles)
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

// Alternar menú hamburguesa
menuToggle.addEventListener('click', (e) => {
    e.stopPropagation();
    navMenu.classList.toggle('show');
});

// Cerrar menú al hacer clic fuera
document.addEventListener('click', (e) => {
    if (!navMenu.contains(e.target) && !menuToggle.contains(e.target)) {
        navMenu.classList.remove('show');
    }
});

// Captura de formulario de contacto
document.addEventListener("DOMContentLoaded", function () {
    const formulario = document.getElementById("formulario-contacto");

    if (formulario) {
        formulario.addEventListener("submit", function (e) {
            e.preventDefault();

            const nombre = document.getElementById("nombre").value;
            const email = document.getElementById("email").value;
            const mensaje = document.getElementById("mensaje").value;

            console.log("Nombre:", nombre);
            console.log("Email:", email);
            console.log("Mensaje:", mensaje);

            alert(`¡Gracias, ${nombre}!\nTu mensaje fue recibido correctamente:\n\n"${mensaje}"`);

            formulario.reset();
        });
    }
});
