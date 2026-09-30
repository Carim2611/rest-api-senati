# REST API SENATI

API REST desarrollada con **Node.js**, **Express** y **MySQL** que implementa operaciones CRUD completas para tres recursos: **estudiantes**, **profesores** y **empresas**.

Proyecto académico desarrollado en SENATI.

## Tecnologías

- [Node.js](https://nodejs.org/) con ES Modules
- [Express 5](https://expressjs.com/)
- [MySQL](https://www.mysql.com/) mediante [mysql2](https://github.com/sidorares/node-mysql2) (con `Promise` y connection pool)
- [dotenv](https://github.com/motdotla/dotenv) para variables de entorno
- [Nodemon](https://nodemon.io/) para desarrollo

## Funcionalidades

- CRUD completo (crear, listar, consultar por id, actualizar y eliminar) para `estudiantes`, `profesores` y `empresas`.
- Actualización parcial con `PATCH`: solo se modifican los campos enviados.
- Consultas parametrizadas para evitar inyección SQL.
- Respuestas `404` cuando el recurso no existe (también para endpoints inexistentes) y `500` ante errores del servidor.
- Configuración de la conexión a la base de datos por variables de entorno.

## Estructura del proyecto

```text
rest-api-senati/
├── db/
│   └── database.sql          # Creación de la base de datos, tablas y datos de ejemplo
├── src/
│   ├── controllers/          # Lógica de cada recurso
│   ├── routes/               # Definición de rutas
│   ├── app.js                # Configuración de Express
│   ├── config.js             # Variables de entorno
│   ├── db.js                 # Pool de conexión a MySQL
│   └── index.js              # Punto de entrada
└── package.json
```

## Instalación y ejecución

### Requisitos

- Node.js
- MySQL en ejecución

### Pasos

1. Clonar el repositorio:

   ```bash
   git clone https://github.com/Carim2611/rest-api-senati.git
   cd rest-api-senati
   ```

2. Instalar dependencias:

   ```bash
   npm install
   ```

3. Crear la base de datos importando el script (crea `senatidb`, las tablas y datos de ejemplo):

   ```bash
   mysql -u root -p < db/database.sql
   ```

4. Crear un archivo `.env` en la raíz del proyecto (todos los valores son opcionales; estos son los predeterminados):

   ```env
   PORT=3000
   DB_HOST=localhost
   DB_PORT=3306
   DB_USER=root
   DB_PASSWORD=
   DB_DATABASE=senatidb
   ```

5. Iniciar el servidor en modo desarrollo:

   ```bash
   npm run dev
   ```

La API quedará disponible en `http://localhost:3000/api`.

## Endpoints

Ruta base: `/api`

| Método | Endpoint | Descripción |
| ------ | -------- | ----------- |
| GET | `/estudiantes` | Lista todos los estudiantes |
| GET | `/estudiantes/:id` | Obtiene un estudiante |
| POST | `/estudiantes` | Crea un estudiante |
| PATCH | `/estudiantes/:id` | Actualiza un estudiante (parcial) |
| DELETE | `/estudiantes/:id` | Elimina un estudiante |
| GET | `/profesores` | Lista todos los profesores |
| GET | `/profesores/:id` | Obtiene un profesor |
| POST | `/profesores` | Crea un profesor |
| PATCH | `/profesores/:id` | Actualiza un profesor (parcial) |
| DELETE | `/profesores/:id` | Elimina un profesor |
| GET | `/empresas` | Lista todas las empresas |
| GET | `/empresas/:id` | Obtiene una empresa |
| POST | `/empresas` | Crea una empresa |
| PATCH | `/empresas/:id` | Actualiza una empresa (parcial) |
| DELETE | `/empresas/:id` | Elimina una empresa |

### Modelos (cuerpo JSON)

**Estudiante**

```json
{
  "nombre": "Carim",
  "apellido": "Estrada",
  "email": "carime@gmail.com",
  "fecha_nac": "2003-11-26"
}
```

**Profesor**

```json
{
  "nombre": "Felipe",
  "apellido": "Gutierrez",
  "curso": "Matematicas",
  "email": "felipeg@senati.pe",
  "fecha_nac": "1975-08-18"
}
```

**Empresa**

```json
{
  "ruc": 20739481520,
  "razon_social": "Innovaciones Andinas S.A.C",
  "ubicacion": "Avenida Los Libertadores 1420"
}
```

### Ejemplo de uso

```bash
# Listar estudiantes
curl http://localhost:3000/api/estudiantes

# Crear un estudiante
curl -X POST http://localhost:3000/api/estudiantes \
  -H "Content-Type: application/json" \
  -d '{"nombre":"Ana","apellido":"Perez","email":"ana@gmail.com","fecha_nac":"2004-02-10"}'

# Actualizar solo el apellido
curl -X PATCH http://localhost:3000/api/estudiantes/1 \
  -H "Content-Type: application/json" \
  -d '{"apellido":"Lopez"}'

# Eliminar
curl -X DELETE http://localhost:3000/api/estudiantes/1
```

### Códigos de respuesta

| Código | Significado |
| ------ | ----------- |
| `200` | Operación exitosa |
| `204` | Recurso eliminado |
| `404` | Recurso o endpoint no encontrado |
| `500` | Error del servidor |

## Base de datos

Base de datos `senatidb` con tres tablas independientes: `estudiante`, `profesor` y `empresa`. El esquema completo y los datos de ejemplo están en [`db/database.sql`](db/database.sql).

## Autor

**Carim Estrada** — [@Carim2611](https://github.com/Carim2611)
