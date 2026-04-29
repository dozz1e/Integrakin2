# Design

## Visual Theme
Dark-tech cinemático, minimalismo editorial de alta gama. Inspirado en la estética de empi.re: fondos oscuros profundos, tipografía masiva y un uso quirúrgico del espacio en blanco (o espacio oscuro).

## Color Strategy
**Restrained / Committed**. Fondo predominante en neutros oscuros casi negros, con acentos en azul cianótico y violeta metálico.

### Palette (OKLCH)
- **Background**: `oklch(14% 0.01 250)` - Obsidiana con un tinte azul casi imperceptible.
- **Surface**: `oklch(20% 0.01 250)` - Gris oscuro para elevaciones sutiles.
- **Text (Primary)**: `oklch(98% 0.005 250)` - Blanco roto, suave para los ojos.
- **Text (Secondary)**: `oklch(60% 0.01 250)` - Gris medio para jerarquía.
- **Accent (Primary)**: `oklch(65% 0.15 240)` - Azul Integrakin vibrante.
- **Accent (Secondary)**: `oklch(55% 0.18 310)` - Púrpura tecnológico.

## Typography
- **Headers**: `Syncopate` (Sans-serif, wide, aggressive). Usada en Uppercase con tracking negativo para impacto.
- **Body**: `Plus Jakarta Sans`. Moderna, legible y con excelente espaciado.
- **Scales**: Ratio 1.414 (Augmented Fourth) para una jerarquía dramática.

## Layout & Spacing
- **Grid**: Layout de 12 columnas con gutters anchos (4rem+).
- **Rhythm**: Espaciado vertical generoso (12rem+ entre secciones) para permitir que el diseño "respire".
- **Borders**: Bordes ultrafinos (0.5px) o ausencia total de bordes, usando el contraste de color para definir áreas.

## Motion & Interaction
- **Transitions**: Ease-out-expo para todas las transiciones de opacidad y escala.
- **Scroll**: Animaciones de scroll tipo "parallax" sutiles y revelaciones de texto por líneas.
- **Hover**: Escala suave (1.02) y cambios de intensidad de luz en lugar de cambios bruscos de color.

## Components
- **Hero**: Full-bleed video con overlay tipográfico masivo.
- **Product Display**: Imágenes en alta resolución sin marcos, flotando sobre el fondo oscuro.
- **Marquee**: Listas de categorías en movimiento constante pero suave.
- **Contact**: Sección minimalista con tipografía de gran tamaño y campos de formulario integrados orgánicamente.
