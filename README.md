# Web Zornotzako Musika Banda
[zornotzakomusikabanda.eus](https://zornotzakomusikabanda.eus)

Este proyecto es la página web para Zonrnotzako Musika Banda.
La página está formada por tres partes: Frontend, CMS y Alojamiento.

# Frontend
El frontend está desarrollado con [Astro](https://astro.build/), un meta-framework de JavaScript/TypeScript para enfocado principalmente en páginas estáticas.
Este es un framework enfocado a la creación de páginas estáticas.

# CMS
En cuanto al CMS o Content Management System se utiliza [DecapCMS](https://decapcms.org/).
Este CMS gestiona el contenido utilizando GitHub.
Todo el contenido de la página está en el propio repositorio de GitHub en archivos Markdown.
De esta manera DecapCMS no requiere un servidor o una base de datos para la página web.
La propia página es estática (sin servidor).
Astro se encarga de coger todo el contenido en Markdown y utilizando la estructura de rutas definida crea toda la página web.

# Alojamiento
La página está alojada en [Cloudflare](https://www.cloudflare.com/).
Está alojada en "Cloudflare Pages", un servicio de alojamiento de páginas estáticas (sin servidor) gratuito.
La página se construye y se despliega de nuevo cada vez que hay un cambio en repositorio.

<img width="3604" height="1959" alt="image" src="https://github.com/user-attachments/assets/4ed6170d-920f-474e-884b-d8d8136f5bc3" />

En este diagrama se puede ver cómo en el modelo de DecapCMS no hay ninguna computación cuando un usuario hace una petición.
Pero al actualizar el contenido se vuelve a computar la página web entera.
Este modelo solo tiene sentido porque el contenido de la página se actualiza menos de una vez al mes.
