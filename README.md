# Softtek API REST

Este proyecto es un servicio API desarrollado con Serverless, Express, Typescript y MySQL.

## Requisitos Previos

La base de datos ya esta creada pero si quieres crear tu porpia base de datos corre el script sql
que se encuentra en la base del proyecto en tu base de datos: db.sql

Añade tu archivo .env con las variables de ejemplo en .env-example

 - DATABASE_URL=mysql://admin:admin2024**@softtek-db.cbcgko4026ku.us-east-1.rds.amazonaws.com:3306/softtek
 - SW_URL_API=https://swapi.py4e.com/api

Asegúrate de tener instalados los siguientes elementos antes de ejecutar la aplicación:

- Node.js v18
- npm o yarn
- serverless

## Configuración

1. **Clona el repositorio:**

   ```bash
   git clone git@github.com:jaggervlad/backend-softtek.git
   cd backend-softtek
   ```

2. **Instala las dependencias:**
   ```bash
   npm install
   ```

3. **Configurar variables de entorno:**

   Renombra el archivo .env-example -> .env y añade la url de tu base de datos MySQL

 **Ejecutar entorno de desarrollo:**
   ```bash
   npm run dev
   ```

 **Ejecutar entorno de desarrollo serverless:**
   ```bash
   npm run serverless:dev
   ```
   
 **Deploy con serverless:**
   ```bash
   npm run serverless:deploy
   ```


## Endpoints

Base url
- local: http://localhost:4000/dev
- production: https://pfe3ke6lyl.execute-api.us-east-1.amazonaws.com/dev

### `GET /dev/api/characters`

Este endpoint proporciona una lista de personajes.

Ejemplo:

```bash
curl http://localhost:4000/dev/api/characters
```

### `GET /dev/api/characters/:id`

Este endpoint obtiene un personaje por su ID.

Ejemplo:

```bash
curl http://localhost:4000/dev/api/characters/{id}
```


### `GET /dev/api/users`

Este endpoint proporciona una lista de usuarios.

Ejemplo:
```bash
curl http://localhost:4000/dev/api/users
```


### `GET /dev/api/users/:id`

Este endpoint obtiene un usuario por su ID.

```bash
curl http://localhost:4000/dev/api/users/{id}
```
