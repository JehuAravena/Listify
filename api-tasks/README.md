# README de la API de Proyecto LISTIFY

Este README proporciona información importante sobre la configuración, instalación y uso de la API del Proyecto LISTIFY. Asegúrate de seguir todos los pasos detallados a continuación para garantizar el correcto funcionamiento del proyecto.

## Requisitos Previos

Antes de comenzar, asegúrate de tener instalados los siguientes componentes:

1. **MySQL 8.0.34:** Debes tener MySQL instalado en tu sistema. Puedes descargarlo [aquí](https://dev.mysql.com/downloads/installer/).
2. **Postman:** Postman es una herramienta útil para probar y documentar APIs. Puedes descargarlo [aquí](https://www.postman.com/downloads/).
3. **Node.js 18.18.0:** Debes tener Node.js instalado en tu sistema. Puedes descargarlo [aquí](https://nodejs.org/es/).

## Instalación

Después de haber instalado los requisitos previos, sigue estos pasos para configurar la API:

1. Clona o descarga este repositorio en tu máquina.
2. Abre una terminal y navega hasta la carpeta raíz del proyecto.
3. Ejecuta el siguiente comando para instalar las dependencias necesarias:

```bash
npm install
npm install ws
```

4. Abre el archivo `common/config/database.js` y asegúrate de configurar la contraseña del usuario `root` de MySQL:

```javascript
const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'tu_contraseña_de_mysql', //Establece aquí tu contraseña.
    database: 'BD_LISTIFY',
});

module.exports = connection;
```

## Rutas de la API

La API proporciona las siguientes rutas:

### Login

- Metodo: `GET`
- URL: `http://localhost:3000/api/login/:EMAIL_IN/:PASSWORD_IN`
- Parámetros en URL:
  - `EMAIL_IN`: Correo electrónico del usuario.
  - `PASSWORD_IN`: Contraseña del usuario.

### Consultar Niveles

- Método: `GET`
- URL: `http://localhost:3000/api/getAllLevel`

### Crear un Rol

- Método: `POST`
- URL: `http://localhost:3000/api/createRole`
- Cuerpo del Mensaje:

```json
{
  "ROLE_NAME_IN": "Nombre del Rol",
  "ROLE_DESCRIPTION_IN": "Descripción del Rol"
}
```

### Eliminar un Rol

- Método: `PUT`
- URL: `http://localhost:3000/api/deleteRole/:ID_ROLE_IN`
- Parámetros en URL:
  - `ID_ROLE_IN`: ID del Rol que deseas eliminar.

### Actualizar un Rol

- Método: `PUT`
- URL: `http://localhost:3000/api/updateRole`
- Cuerpo del Mensaje:

```json
{
  "ID_ROLE_IN": ID del Rol
  "ROLE_NAME_IN": "Nuevo Nombre del Rol",
  "ROLE_DESCRIPTION_IN": "Nueva Descripción del Rol"
}
```

### Obtener Todos los Roles

- Método: `GET`
- URL: `http://localhost:3000/api/getAllRole`

### Obtener Roles Activos

- Método: `GET`
- URL: `http://localhost:3000/api/getActiveRole`

### Crear Permiso de Rol

- Método: `POST`
- URL: `http://localhost:3000/api/createPermissionRole`
- Cuerpo del Mensaje:

```json
{
  "ROLE_ID_IN": ID del Rol,
  "PERMISSION_ID_IN": ID del Permiso
}
```

### Eliminar Permiso de Rol

- Método: `DELETE`
- URL: `http://localhost:3000/api/deletePermissionRole/:ID_ROLE_IN`
- Parámetros en URL:
  - `ID_ROLE_IN`: ID del Rol que deseas eliminar.

### Obtener Todos los Permisos de Rol por id

- Método: `GET`
- URL: `http://localhost:3000/api/getPermissionRole/:ID_ROLE_IN`
- Parámetros en URL:
  - `ID_ROLE_IN`: ID del Rol que deseas obtener.

### Obtener Todos los Permisos

- Método: `GET`
- URL: `http://localhost:3000/api/getPermission`

### Crear Tarea

- Método: `POST`
- URL: `http://localhost:3000/api/createTask`
- Cuerpo del Mensaje:

```json
{
  "TITLE_IN": "Título de la Tarea",
  "DESCRIPTION_IN": "Descripción de la Tarea",
  "PRIORITY_IN": Prioridad de la Tarea,
  "ID_USER_IN": ID del Usuario
}
```

### Actualizar Tarea

- Método: `PUT`
- URL: `http://localhost:3000/api/updateTask`
- Cuerpo del Mensaje:

```json
{
  "ID_TASK_IN": ID de la Tarea,
  "TITLE_IN": "Nuevo Título de la Tarea",
  "DESCRIPTION_IN": "Nueva Descripción de la Tarea",
  "PRIORITY_IN": Nueva Prioridad de la Tarea,
  "STATUS_IN": Nuevo Estado de la Tarea
}
```

### Eliminar Tarea

- Método: `DELETE`
- URL: `http://localhost:3000/api/deleteTask/:ID_TASK_IN`
- Parámetros en URL:
  - `ID_TASK_IN`: ID de la Tarea que deseas eliminar.

### Obtener Todas las Tareas

- Método: `GET`
- URL: `http://localhost:3000/api/getAllTask/`

### Obtener Tareas de un Usuario

- Método: `GET`
- URL: `http://localhost:3000/api/getUserTask/:ID_USER_IN`
- Parámetros en URL:
  - `ID_USER_IN`: ID del Usuario cuyas tareas deseas obtener.

### Crear Usuario

- Método: `POST`
- URL: `http://localhost:3000/api/createUser`
- Cuerpo del Mensaje:

```json
{
  "NAME_IN": "Nombre del Usuario",
  "NICKNAME_IN": "Nickname del Usuario",
  "LASTNAME_IN": "Apellido del Usuario",
  "EMAIL_IN": "Correo Electrónico del Usuario",
  "PASSWORD_IN": "Contraseña del Usuario",
  "ID_ROLE_IN": ID del Rol del Usuario
}
```

### Actualizar Usuario

- Método: `PUT`
- URL: `http://localhost:3000/api/updateUser`
- Cuerpo del Mensaje:

```json
{
  "ID_USER_IN": ID del Usuario,
  "NAME_IN": "Nuevo Nombre del Usuario",
  "NICKNAME_IN": "Nuevo Nickname del Usuario",
  "LASTNAME_IN": "Nuevo Apellido del Usuario",
  "EMAIL_IN": "Nuevo Correo Electrónico del Usuario",
  "PASSWORD_IN": "Nueva Contraseña del Usuario",
  "ID_ROLE_IN": ID del Rol del Usuario
}
```

### Eliminar Usuario

- Método: `PUT`
- URL: `http://localhost:3000/api/deleteUser/:ID_USER_IN`
- Parámetros en URL:
  - `ID_USER_IN`: ID del Usuario que deseas eliminar.

### Obtener Todos los Usuarios

- Método: `GET`
- URL: `http://localhost:3000/api/getAllUser`

### Obtener Usuarios Activos

- Método: `GET`
- URL: `http://localhost:3000/api/getActiveUser`

Asegúrate de proporcionar los valores correctos en el cuerpo del mensaje y en los parámetros de la URL según sea necesario para cada ruta.

### Obtener Usuario por ID

* Método: `GET`
* URL: `http://localhost:3000/api/getSpecificUser/:ID_USER_IN`

### Obtener Usuario por Mail

* Método: `GET`
* URL: `http://localhost:3000/api`

## Notas Adicionales

Asegúrate de que todos los pasos anteriores se hayan completado con éxito para garantizar el correcto funcionamiento del proyecto. Si encuentras problemas, verifica las configuraciones y los datos proporcionados.
