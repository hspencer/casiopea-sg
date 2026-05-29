# Casiopea: Sistema Gráfico

Sistema de diseño tipográfico para la [Wiki Casiopea](https://wiki.ead.pucv.cl) (e\[ad\] · PUCV), orientado a la skin **[Stella Nova](https://github.com/hspencer/stella-nova)**.

**→ [Ver en vivo](https://herbertspencer.net/casiopea-sg/)**

---

## Qué es esto

La [Wiki Casiopea](https://wiki.ead.pucv.cl) es el repositorio de obras y documentos de la Escuela de Arquitectura y Diseño de la PUCV. La skin **Stella Nova** es su nuevo vestido visual: sistema de tokens, grilla de línea base, tema claro/oscuro y soporte de 22 extensiones de MediaWiki.

Este repositorio contiene la **exploración tipográfica** previa a la decisión final de las fuentes del sistema. El objetivo es elegir un trío (serif · sans · mono) que:

- Sea completamente **libre (OFL)** y **auto-alojable** (sin CDN en producción)
- Respete la **grilla de línea base** (`--sn-baseline = fs-base × 1.65`)
- Ofrezca lectura cómoda, elegante y flexible para todos los registros de la wiki
- Funcione en modo claro y oscuro sin retoques

---

## Contenido del repo

```
casiopea-sg/
├── index.html               ← Portada del sistema
├── feedback.html            ← Comparador y recolector de preferencias
├── specimen/
│   ├── Tipografías Stella Nova.html   ← Espécimen interactivo (11 tríos)
│   ├── tokens.css           ← Tokens reales de Stella Nova + capa de tríos
│   ├── specimen.css         ← Layout y tipografía del espécimen
│   ├── trios.js             ← Datos de los 11 tríos
│   ├── Specimen.jsx         ← Componente React: página wiki simulada
│   ├── app.jsx              ← App React: monta espécimen + panel Tweaks
│   └── tweaks-shell.jsx     ← Panel de Tweaks (controles flotantes)
└── resources/
    └── casiopea.svg         ← Logotipo (isotipo + wordmark)
```

---

## Los 11 tríos

Todos son fuentes OFL, disponibles en Google Fonts y auto-alojables como `.woff2`.

### Lectura cómoda · humanista / editorial

| # | Nombre | Serif | Sans | Mono |
|---|--------|-------|------|------|
| 01 | **Plex** | IBM Plex Serif | IBM Plex Sans | IBM Plex Mono |
| 02 | **Source** | Source Serif 4 | Source Sans 3 | IBM Plex Mono |
| 03 | **Literata** | Literata | Libre Franklin | IBM Plex Mono |
| 04 | **Newsreader** | Newsreader | Hanken Grotesk | JetBrains Mono |
| 05 | **Spectral** | Spectral | Work Sans | IBM Plex Mono |

### Precisión geométrica

| # | Nombre | Serif | Sans | Mono |
|---|--------|-------|------|------|
| 06 | **Space** | Crimson Pro | Space Grotesk | Space Mono |
| 07 | **Geist** | Lora | Geist | Geist Mono |
| 08 | **Sora** | Bitter | Sora | JetBrains Mono |

### Moderna condensada · rendidora

| # | Nombre | Serif | Sans | Mono |
|---|--------|-------|------|------|
| 09 | **Barlow** | Source Serif 4 | Barlow | IBM Plex Mono |
| 10 | **Archivo** | Newsreader | Archivo | JetBrains Mono |
| 11 | **Plex Cond.** | IBM Plex Serif | IBM Plex Sans Condensed | IBM Plex Mono |

---

## Cómo usar el espécimen

Abre [`specimen/Tipografías Stella Nova.html`](https://herbertspencer.net/casiopea-sg/specimen/Tipograf%C3%ADas%20Stella%20Nova.html) en un navegador moderno.

- **Tarjetas de trío** → clic en cualquiera para cambiar toda la página al instante
- **Grilla** (botón en la cabecera) → superpone la retícula en carmín para verificar el ritmo vertical
- **Oscuro/Claro** → alterna el tema
- **Panel de Tweaks** (se activa desde el entorno de Claude o desde código) → controles avanzados: voz serif/sans en títulos y cuerpo, igualar altura-x, monoespaciada independiente, tamaño de fuente

---

## Cómo dar feedback

Visita la página de [**Comparador y feedback**](https://herbertspencer.net/casiopea-sg/feedback.html):

1. Selecciona dos tríos (A vs. B)
2. Lee el mismo contenido en ambas tipografías
3. Marca tu preferencia con «Prefiero este»
4. Usa «Comentar en GitHub» para dejar tu razonamiento en los issues del repo Stella Nova

También puedes abrir un issue directamente en [hspencer/stella-nova](https://github.com/hspencer/stella-nova/issues) indicando tu trío favorito y por qué.

---

## Sobre la implementación final

El espécimen usa **Google Fonts CDN** solo durante la fase de exploración. Al elegir el trío definitivo, el paso a producción es:

1. Descargar los `.woff2` de las familias elegidas (subset `latin`)
2. Alojarlos en `resources/fonts/` dentro de Stella Nova
3. Actualizar las cuatro líneas `--sn-font-*` en `tokens.css`

El sistema de tokens, la grilla de línea base y los componentes de interfaz **no cambian** — son independientes de la familia tipográfica.

---

## Relación con Stella Nova

Este repositorio es complementario a [hspencer/stella-nova](https://github.com/hspencer/stella-nova), la skin MediaWiki de la Wiki Casiopea. Stella Nova define:

- Los **tokens de color** (`--sn-field`, `--sn-paper`, `--sn-ink`, `--sn-nova`, ...)
- La **grilla de línea base** (`--sn-baseline`, `--sn-leading: 1.65`)
- Los **componentes** de interfaz (pestañas, TOC, washes, botones, tabla, código)
- Las **preferencias de usuario** (tema claro/oscuro, tamaño de fuente)

Los tokens usados en este espécimen son los tokens reales de producción de Stella Nova. Al elegir la tipografía, solo se actualizan `--sn-font-text`, `--sn-font-serif` y `--sn-font-mono`.

---

*Casiopea: Sistema Gráfico · e\[ad\] · Pontificia Universidad Católica de Valparaíso*
