const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('#primary-navigation');
const header = document.querySelector('header');

function setMenuOpen(isOpen) {
    if (!menuToggle || !navMenu) return;
    navMenu.classList.toggle('show', isOpen);
    menuToggle.setAttribute('aria-expanded', String(isOpen));
    menuToggle.setAttribute('aria-label', isOpen ? 'Cerrar men\u00fa' : 'Abrir men\u00fa');
}

if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
        setMenuOpen(menuToggle.getAttribute('aria-expanded') !== 'true');
    });

    navMenu.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', (event) => {
            const target = document.querySelector(link.getAttribute('href'));
            if (target) {
                event.preventDefault();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
            setMenuOpen(false);
        });
    });

    document.addEventListener('click', (event) => {
        if (!header.contains(event.target)) setMenuOpen(false);
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && menuToggle.getAttribute('aria-expanded') === 'true') {
            setMenuOpen(false);
            menuToggle.focus();
        }
    });

    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) setMenuOpen(false);
    });
}

const formulario = document.getElementById('formulario-contacto');
if (formulario) {
    formulario.addEventListener('submit', (event) => {
        event.preventDefault();
        const nombre = document.getElementById('nombre').value.trim();
        const email = document.getElementById('email').value.trim();
        const mensaje = document.getElementById('mensaje').value.trim();
        const numeroWhatsApp = '573024498608';
        const textoWhatsApp = 'Hola, soy ' + nombre + '. Mi correo es ' + email + '.\n\n' + mensaje;
        const enlaceWhatsApp = 'https://wa.me/' + numeroWhatsApp + '?text=' + encodeURIComponent(textoWhatsApp);
        const estado = document.getElementById('form-feedback');

        window.open(enlaceWhatsApp, '_blank', 'noopener,noreferrer');
        estado.textContent = 'WhatsApp se abrirá con tu mensaje preparado. Revisa el texto y pulsa Enviar.';

        const enlaceAlternativo = document.createElement('a');
        enlaceAlternativo.href = enlaceWhatsApp;
        enlaceAlternativo.target = '_blank';
        enlaceAlternativo.rel = 'noopener noreferrer';
        enlaceAlternativo.textContent = 'Si no se abrió, continúa por WhatsApp.';
        estado.append(' ', enlaceAlternativo);
    });
}
