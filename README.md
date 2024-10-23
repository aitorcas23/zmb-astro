# Web Zornotzako Musika Banda
[zornotzakomusikabanda.eus](https://zornotzakomusikabanda.eus)

Este proyecto es la página web para Zonrnotzako Musika Banda.
El proyecto se puede dividir en tres secciones principales: el frontend, el cms y el backend.

## Frontend
El frontend de la página de la banda se encuentra en este repositorio de GitHub.
El frontend está desarrollado con el framework web de JavaScript **Astro**.
Astro es un framework enfocado en el desarrollo de páginas web enfocadas en contenido.
Astro no es un framework reactivo, pero cuenta con la posibilidad de utilizar componentes de otros frameworks como React, Vue o Svelte entre otros.
Se utiliza **TypeScript** en vez de JavaScript para tener el proyecto tipado y así prevenir posibles errores causados por la flexibilidad y ambigüedad de JavaScript.

Para los estilos se utiliza la librería **Tailwindcss** con componentes de **Flowbite**.
En el caso del carrusel de la página de inicio se utiliza un componente de **Svelte** utilizando un componente de **shadcn-svelte**.

Este frontend está alojado en **Vercel**.

## CMS
Un CMS, o "Content Management System" es un software que permite crear y gestionar contenido de una forma sencilla sin necesidad de conocimientos técnicos.
En este proyecto se utiliza un "Headless CMS", es decir, un CMS separado del apartado visual.
Para acceder a la información, el CMS expone un endpoint REST.
De esta manera hay total libertad a la hora de desarrollar el apartado visual de la página web, utilizando Astro para ese fin.

El CMS utilizado en el proyecto se llama **Payload CMS**.
En Payload CMS se utiliza JavaScript o, en el caso de este proyecto, TypeScript, para crear las colecciones del contenido.
Después, desde la página de administrador de la Zornotzako Musika Banda se puede añadir el contenido pudiendo ver los cambios en la página al momento.

Esta aplicación CMS se aloja en **Koyeb**.

## Backend
Para el backend se utiliza una herramienta BaaS o "Backend as a Service", con el fin de facilitar el desarrollo del mismo.
La herramienta utilizada se llama **Supabase**, que ofrece servicios backend de los cuales se utilizan la base de datos **PostgreSQL**, el almacenamiento de archivos estilo S3 y la autenticación de usuarios.
Estos servicios se utilizan desde el CMS para guardar el contenido de la página y gestionar los usuarios que tienen acceso a esta.

Estos tres servicios se alojan en el propio servicio de alojamiento de Supabase.
