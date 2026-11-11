# Guia De Migracion

La arquitectura nueva ya existe, pero los archivos actuales del sitio se mantienen intactos para evitar romper la version vigente.

## Fase 1

Crear estructura profesional de carpetas, documentacion y datos base.

## Fase 2

Migrar `pagina.css` hacia `src/styles/` por responsabilidades:

- settings
- base
- layout
- components
- sections
- utilities

## Fase 3

Migrar `pagina.js` hacia `src/scripts/` por modulos:

- navigation
- contact-form
- animations
- utils

## Fase 4

Renombrar `pagina.html` a `index.html`, actualizar rutas y conectar datos/recursos finales.

## Fase 5

Optimizar SEO, accesibilidad, rendimiento y preparar deployment.
