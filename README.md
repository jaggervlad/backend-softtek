# SoftTek API REST

Este proyecto es un servicio API desarrollado con Serverless, Express, Typescript y MySQL.

## Requisitos Previos

Asegúrate de tener instalados los siguientes elementos antes de ejecutar la aplicación:

- Node.js
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

4. **Ejecutar entorno de desarrollo:**
   ```bash
   npm run dev
   ```

5. **Ejecutar entorno de desarrollo serverless:**
   ```bash
   npm serverless:dev
   ```


## Estructura del Proyecto
```sql
backen-softtek/
|-- src/
|   |-- db/
|   |-- middlewares/
|   |-- services/
|   |-- app.ts -
|-- ...
```

## Endpoints


### `GET /api/characters`

Este endpoint proporciona una lista de personajes.

Ejemplo:

```bash
curl http://localhost:4000/api/characters
```

### `GET /api/characters/:id`

Este endpoint obtiene un personaje por su ID.

Ejemplo:

```bash
curl http://localhost:4000/api/characters/2
```


### `GET /api/users`

Este endpoint proporciona una lista de usuarios.

Ejemplo:
```bash
curl http://localhost:4000/api/users
```


### `GET /api/users/:id`

Este endpoint obtiene un usuario por su ID.

```bash
curl http://localhost:4000/api/users/2
```
