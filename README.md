Este documento proporciona las instrucciones necesarias para instalar y ejecutar la aplicación que utiliza la API de Ticketmaster para realizar consultas sobre eventos y entradas.

#### Requisitos Previos

Antes de instalar la aplicación, asegúrate de tener instalado:
- Node.js

- npm (gestor de paquetes de Node.js)


#### Instalación


Para instalar la aplicación, sigue estos pasos:

1. Clona el repositorio:
   git clone URL_DEL_REPOSITORIO
      cd NOMBRE_DEL_DIRECTORIO
         npm install

         
#### Configuración del Archivo .env

Para que la aplicación funcione correctamente, necesitas configurar las credenciales de la API de Ticketmaster. Sigue estos pasos para crear y configurar el archivo `.env`:


1. Crea un archivo `.env` en el directorio raíz del proyecto:


2. Abre el archivo `.env` y añade la siguiente línea:
   TICKETMASTER_API_KEY=TU_API_KEY_AQUÍ

   
   Reemplaza `TU_API_KEY_AQUÍ` con tu clave de API personal de Ticketmaster.

   
#### Ejecución


Para ejecutar la aplicación, utiliza el siguiente comando:

npm run dev


#### Funcionamiento de la Aplicación


La aplicación realiza llamadas a la API de Ticketmaster para obtener información sobre eventos. Puedes interactuar con la aplicación a través de una interfaz de línea de comandos o una interfaz web, dependiendo de cómo esté configurada.


### Notas Adicionales

- Asegúrate de no subir el archivo `.env` a repositorios públicos para mantener seguras tus credenciales.

- Para obtener una clave de API de Ticketmaster, debes registrarte en su plataforma de desarrolladores.
