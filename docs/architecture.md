# Arquitectura

El proyecto esta organizado para separar contenido, presentacion, comportamiento y recursos publicos.

## Principios

- Mantener el HTML semantico y liviano.
- Separar datos editables del marcado.
- Dividir CSS por responsabilidad.
- Dividir JavaScript por modulos de comportamiento.
- Evitar dependencias pesadas.
- Preparar una futura migracion a React o Next.js.

## Carpetas principales

`public/` contiene archivos servidos directamente por el navegador: imagenes, iconos, fuentes, documentos, favicons y manifest.

`src/` contiene los recursos fuente del proyecto: contenido, datos, estilos, scripts, paginas auxiliares y utilidades.

`docs/` contiene documentacion para mantener el proyecto sin depender de memoria o decisiones implicitas.

## Estado actual

Los archivos existentes `pagina.html`, `pagina.css` y `pagina.js` se conservan para no romper el sitio actual. La migracion a la nueva arquitectura debe hacerse de forma progresiva.
