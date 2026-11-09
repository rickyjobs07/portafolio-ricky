# Ricky Montero Terrero

Portafolio de un ingeniero de software enfocado en backend, arquitectura e integración de sistemas. La pieza central es un laboratorio interactivo: un cobro ficticio que elige el primer procesador disponible y conserva la misma clave en el reintento.

El sitio es una sola página en español e inglés. Los textos viven en `src/data/profile.js`.

## Dirección

El concepto es **ingeniería de lo invisible**: la arquitectura que sostiene un sistema y que el usuario no recorre. La paleta es grafito, papel cálido y un solo acento, un lima eléctrico usado para la decisión activa. La tipografía combina Instrument Serif, Instrument Sans e IBM Plex Mono.

No hay barras de habilidad, porcentajes ni tarjetas repetidas. El diagrama del inicio y el laboratorio son ilustraciones: no describen la arquitectura de ningún empleador.

## Stack

- React 19
- Vite 6
- JavaScript
- CSS
- EmailJS, solo en el envío real del formulario
- Vitest y Testing Library

## Desarrollo local

```bash
npm install
npm run dev
```

La aplicación queda en `http://localhost:5173/`.

Otros comandos:

```bash
npm test
npm run lint
npm run build
npm run preview
```

## Despliegue

Producción es GitHub Pages, en [rickymontero.com](https://rickymontero.com/). El workflow está en `main`, en `.github/workflows/deploy.yml`, y se llama Deploy Portfolio. Se dispara solo con un push a `main`: instala con `npm ci`, ejecuta `npm run build` y publica la carpeta `dist` con `actions/deploy-pages`. El último despliegue correcto es el de `f5f4105`, el 4 de junio de 2026.

La rama `gh-pages` es el método anterior. El sitio actual ya no sale de esa rama.

`public/CNAME` mantiene el dominio. `public/404.html` cubre las rutas de una sola página. `vite.config.js` usa `base: '/'`.

Este rediseño está en la rama local `redesign/engineering-the-invisible` y todavía no está en `main`. Esa rama no contiene el workflow; hay que integrar `origin/main` al fusionar, para no perder `deploy.yml`. No se ha publicado ni se ha tocado DNS, Cloudflare ni Namecheap.

## Contenido

Los cargos, las fechas y la formación salen del sitio publicado. Las capacidades técnicas salen de lo que Ricky confirmó para este rediseño. El único proyecto personal enlazado es el repositorio público [NodejsExpressAuth](https://github.com/rickyjobs07/NodejsExpressAuth). Los casos empresariales están anonimizados: sin clientes, sin cifras y sin arquitectura interna.

Ricky confirmó que el rol de Analista SOA en Humano Seguros es el actual. Sigue marcado como pendiente, dentro de la propia página:

- Cualquier resultado medible de los casos empresariales.
- La documentación en Render de la API de publicaciones: el README la menciona y no respondió durante esta revisión, así que no está enlazada.

El retrato de perfil es la fotografía de estudio que Ricky entregó para este rediseño.

## Contacto

El formulario usa la cuenta de EmailJS que ya estaba en el proyecto. La validación ocurre antes de llamar al servicio. Las pruebas inyectan un envío falso y no escriben a un buzón real.

## Pruebas

`npm test` cubre el enrutado del laboratorio, la validación del formulario y que la interfaz no publique enlaces vacíos. La revisión visual se hizo con Playwright en 1440, 1024 y 390 px: en las tres medidas no hubo desborde horizontal ni nodos del diagrama superpuestos. El formulario vacío se probó en el navegador y no llegó a EmailJS.

Lighthouse, sobre el build de producción en móvil (`http://localhost:4173`, no sobre el servidor de desarrollo):

| Categoría | Puntuación |
| --- | --- |
| Performance | 100 |
| Accessibility | 100 |
| Best Practices | 100 |
| SEO | 100 |

LCP 1,5 s, CLS 0, TBT 30 ms. El servidor de desarrollo, sin minificar, no sirve para esa medición: ahí Performance bajaba a 88 por el JavaScript sin comprimir.
