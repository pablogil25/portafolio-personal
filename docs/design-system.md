# Design System

Este documento define la base visual del portafolio. Su objetivo es que cada pagina, seccion y componente futuro se construya con los mismos criterios de calidad: claridad, rendimiento, accesibilidad y consistencia.

No define Hero, Navbar, secciones ni componentes finales. Define las reglas y tokens que esos elementos deberan consumir despues.

## Filosofia Visual

La identidad debe sentirse moderna, sobria y precisa. La inspiracion viene de productos como Vercel, Stripe, Linear, Notion, Apple, GitHub y Framer, pero sin copiar sus interfaces.

Decisiones principales:

- Base neutral para que el contenido profesional sea protagonista.
- Acentos controlados para comunicar tecnologia y accion.
- Espaciado amplio pero eficiente para mantener elegancia sin perder densidad.
- Bordes y sombras sutiles para profundidad sin ruido visual.
- Animaciones cortas, suaves y funcionales.
- Tokens desde el inicio para evitar colores, tamanos o efectos hardcodeados.

## Paleta Principal

La paleta combina neutros frios con acentos tecnologicos. Esto mantiene una sensacion premium y profesional sin depender de gradientes pesados o colores saturados en exceso.

| Token | Uso | Decision |
| --- | --- | --- |
| Primary | Acciones principales, elementos activos | Azul profundo, confiable y tecnico. |
| Secondary | Acciones secundarias, UI de soporte | Neutral oscuro para no competir con Primary. |
| Accent | Detalles destacados, indicadores, pequenas llamadas visuales | Teal/cyan para contraste moderno. |
| Background | Fondo principal | Blanco frio, limpio y de alto rendimiento visual. |
| Surface | Superficies elevadas suaves | Diferencia sutil contra el fondo. |
| Card | Tarjetas y bloques de contenido | Superficie clara y consistente. |
| Border | Separadores y limites | Bajo contraste para mantener minimalismo. |
| Text Primary | Texto principal | Casi negro, no negro absoluto para menor fatiga. |
| Text Secondary | Texto de soporte | Gris azulado legible. |
| Muted | Metadata, placeholders, ayudas | Menor jerarquia visual. |
| Success | Confirmaciones | Verde accesible y sobrio. |
| Warning | Advertencias | Ambar controlado. |
| Danger | Errores o acciones destructivas | Rojo claro y reconocible. |
| Info | Informacion contextual | Azul informativo. |
| Overlay | Modales, fondos bloqueantes | Transparencia neutral. |

Regla: ningun componente debe declarar colores directos. Siempre debe usar variables CSS.

## Tipografia

Fuente principal recomendada:

- `Inter`, con fallback a `ui-sans-serif`, `system-ui`, `-apple-system`, `BlinkMacSystemFont`, `Segoe UI`, `sans-serif`.

Fuente tecnica opcional:

- `JetBrains Mono`, `SFMono-Regular`, `Consolas`, `monospace`.

Decision: Inter y fuentes del sistema ofrecen alta legibilidad, buen rendimiento y una estetica compatible con productos modernos. La fuente mono se reserva para codigo, tecnologias o pequenos datos tecnicos.

### Escala Tipografica

| Token | Tamano | Uso recomendado |
| --- | --- | --- |
| xs | 12px | Labels, metadata compacta |
| sm | 14px | Texto secundario |
| md | 16px | Body principal |
| lg | 18px | Body destacado |
| xl | 20px | Subtitulos |
| 2xl | 24px | Titulos de bloques |
| 3xl | 30px | Titulos de seccion |
| 4xl | 36px | Titulos principales |
| 5xl | 48px | Titulos hero futuros |
| 6xl | 60px | Uso editorial muy puntual |

### Pesos

- 400 para lectura.
- 500 para navegacion, labels y microcopy importante.
- 600 para subtitulos y acciones.
- 700 para titulos principales.

### Line Height

- Tight: titulos compactos.
- Snug: subtitulos.
- Normal: lectura general.
- Relaxed: parrafos largos.

### Letter Spacing

No usar letter spacing negativo. La base debe ser `0`. Solo se permite un tracking ligeramente positivo en labels uppercase o metadata tecnica.

## Espaciados

El sistema usa una escala basada en 4px.

| Token | Valor |
| --- | --- |
| 1 | 4px |
| 2 | 8px |
| 3 | 12px |
| 4 | 16px |
| 5 | 20px |
| 6 | 24px |
| 8 | 32px |
| 10 | 40px |
| 12 | 48px |
| 16 | 64px |
| 20 | 80px |
| 24 | 96px |
| 32 | 128px |

Decision: una escala de 4px evita tamanos magicos y permite layouts consistentes desde mobile hasta 4K.

## Border Radius

| Token | Valor | Uso |
| --- | --- | --- |
| xs | 4px | Elementos pequenos |
| sm | 6px | Inputs compactos |
| md | 8px | Cards y controles base |
| lg | 12px | Superficies destacadas |
| xl | 16px | Contenedores amplios |
| full | 999px | Pills, avatares, icon buttons circulares |

Decision: mantener radios sobrios evita que el portafolio parezca infantil o demasiado decorativo.

## Sombras

Las sombras deben ser sutiles. La UI debe sentirse elevada solo cuando ayude a la jerarquia.

| Token | Uso |
| --- | --- |
| xs | Separacion minima |
| sm | Hover sutil |
| md | Cards destacadas |
| lg | Overlays, menus futuros |
| xl | Modales o superficies muy elevadas |

Decision: combinar sombras suaves con bordes sutiles da profundidad sin sacrificar rendimiento visual.

## Transiciones

Duraciones:

- Instant: 80ms
- Fast: 120ms
- Normal: 180ms
- Slow: 240ms
- Slower: 320ms

Timing:

- Standard: `cubic-bezier(0.2, 0, 0, 1)`
- Emphasized: `cubic-bezier(0.16, 1, 0.3, 1)`
- Exit: `cubic-bezier(0.4, 0, 1, 1)`

Estados:

- Hover: cambio ligero de color, borde, sombra o transformacion maxima de 1px a 2px.
- Focus: siempre visible y con contraste.
- Active: feedback inmediato, ligeramente mas compacto.

Decision: las animaciones deben comunicar respuesta, no entretener.

## Botones

No se crean clases todavia. Se definen tokens para que los botones futuros sean consistentes.

Variantes futuras:

- Primary: accion principal.
- Secondary: accion de soporte.
- Outline: accion neutral con borde.
- Ghost: accion de baja prominencia.
- Danger: accion destructiva.
- Disabled: estado no interactivo.

Reglas:

- Altura basada en tokens.
- Padding basado en spacing.
- Color desde variables.
- Focus visible obligatorio.
- Disabled no debe depender solo de opacidad; tambien debe cambiar cursor y contraste.

## Formularios

Elementos cubiertos:

- Inputs.
- Textarea.
- Select.
- Placeholder.
- Focus.
- Error.
- Disabled.

Reglas:

- Altura minima consistente.
- Labels visibles, no reemplazados solo por placeholder.
- Error con texto, no solo color.
- Focus con ring accesible.
- Placeholder con color muted.

Decision: los formularios suelen ser el primer punto donde se rompe la accesibilidad. Por eso se tokenizan desde el inicio.

## Tarjetas

Las tarjetas futuras deben usar:

- Fondo `--color-card`.
- Borde `--color-border`.
- Padding del sistema.
- Radius maximo recomendado `md` o `lg`.
- Shadow solo cuando aporte jerarquia.

Hover:

- Borde un poco mas visible.
- Sombra sutil.
- Transformacion maxima de `translateY(-2px)`.

Decision: cards limpias y sobrias ayudan a que proyectos y certificados parezcan piezas profesionales, no bloques decorativos.

## Enlaces

Estados:

- Default: color principal o texto principal segun contexto.
- Hover: color acento o subrayado visible.
- Focus: ring visible.
- Visited: mantener legibilidad, sin introducir colores fuera del sistema.

Regla: los enlaces dentro de parrafos deben tener una senal visual adicional al color.

## Iconografia

Tamanos:

- xs: 14px
- sm: 16px
- md: 20px
- lg: 24px
- xl: 32px

Reglas:

- Usar `currentColor` cuando sea posible.
- Mantener alineacion optica con texto.
- No usar iconos como unica forma de comunicar una accion critica.
- Separacion con tokens de spacing.

Decision: iconos sobrios refuerzan tecnologia y eficiencia sin convertir la UI en decoracion.

## Responsive

Breakpoints:

| Token | Valor | Uso |
| --- | --- | --- |
| mobile | 360px | Moviles pequenos |
| tablet | 768px | Tablets y moviles grandes |
| laptop | 1024px | Laptops |
| desktop | 1280px | Desktop |
| wide | 1440px | Pantallas amplias |
| ultrawide | 1920px | 4K y ultrawide |

Decision: el layout debe escalar por contenedores, no solo por viewport. Las secciones futuras deben tener `max-width` y padding fluido.

Nota tecnica: CSS custom properties no funcionan directamente dentro de media queries en CSS nativo. Los valores quedan documentados como tokens y deben duplicarse de forma controlada cuando se escriban media queries.

## Accesibilidad

Reglas obligatorias:

- Contraste minimo WCAG AA.
- Focus visible para todo elemento interactivo.
- Navegacion por teclado completa.
- Respetar `prefers-reduced-motion`.
- No usar color como unica senal.
- Mantener objetivos tactiles comodos.
- Evitar tamanos de texto inferiores a 12px.

Decision: la accesibilidad es parte del sistema, no una auditoria final.

## Dark Mode

El sistema define variables para tema claro y oscuro desde el principio.

Reglas:

- Usar `:root` para tema claro.
- Usar `[data-theme="dark"]` para tema oscuro.
- No crear componentes con colores fijos.
- Probar contraste en ambos temas.

Decision: preparar dark mode ahora evita reescribir componentes despues.

## Naming Convention

### Variables

Usar prefijo semantico:

- `--color-*`
- `--font-*`
- `--text-*`
- `--space-*`
- `--radius-*`
- `--shadow-*`
- `--duration-*`
- `--ease-*`
- `--z-*`
- `--button-*`
- `--field-*`
- `--card-*`

### Clases

Usar BEM simple:

- `.block`
- `.block__element`
- `.block--modifier`

### Utilidades

Usar prefijo `u-`:

- `.u-hidden`
- `.u-visually-hidden`
- `.u-flow`

### JavaScript

Usar `data-*` para comportamiento:

- `data-theme-toggle`
- `data-modal-trigger`
- `data-project-filter`

Decision: separar estilos de comportamiento reduce regresiones cuando cambie el diseno.

## CSS Architecture

Organizacion ideal:

```txt
styles/
  variables.css

src/styles/
  settings/
  base/
  layout/
  components/
  utilities/
  animations/
  responsive/
```

Responsabilidades:

- `variables`: tokens del sistema.
- `globals/base`: reset, body, tipografia base.
- `layout`: contenedores, grids y secciones.
- `components`: botones, cards, formularios futuros.
- `utilities`: helpers pequenos y reutilizables.
- `animations`: keyframes y patrones de motion.
- `responsive`: reglas de adaptacion cuando el proyecto crezca.

Decision: los tokens viven separados de la implementacion para que puedan sobrevivir a una migracion a React o Next.js.

## Animaciones

Permitido:

- Opacity.
- Transform.
- Color.
- Border-color.
- Box-shadow con moderacion.

Evitar:

- Animar width, height, top, left o propiedades que fuerzan layout.
- Rebotes exagerados.
- Animaciones infinitas no esenciales.
- Motion critico sin alternativa para reduced motion.

Decision: Apple y Linear usan movimiento como feedback refinado. Ese es el objetivo: precision, no espectaculo.

## Performance

Reglas:

- No duplicar estilos.
- Evitar selectores excesivamente especificos.
- Evitar CSS no usado.
- No importar fuentes innecesarias.
- Preferir variables sobre repetir valores.
- Mantener efectos visuales baratos para el navegador.
- Agrupar estilos por responsabilidad.

Decision: un portafolio premium debe sentirse rapido antes de verse complejo.

## Escalabilidad

Todo nuevo componente debera:

- Consumir exclusivamente tokens del sistema.
- Usar spacing del sistema.
- Usar colores semanticos.
- Soportar dark mode.
- Tener estados hover, focus, active y disabled cuando aplique.
- Mantener accesibilidad por teclado.
- Evitar estilos duplicados.

Decision: el sistema debe permitir crecer sin perder coherencia visual ni tecnica.
