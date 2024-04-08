# README - Base de Datos

Este README proporciona información esencial sobre la configuración y el uso de la base de datos.

## Requisitos Previos ##
1. **MySQL Workbench 8.0.34:** Debes tener MySQL Workbench instalado en tu sistema. Puedes descargarlo [aquí](https://dev.mysql.com/downloads/workbench/).



## Configuración Inicial ##
instalar MySQL Workbench 8.0.34

Clonar repositorio:

```bash
git clone git clone https://@bitbucket.org/ja-olivero/bd-listify.git

```
Para comenzar, siga estos pasos:

1. Abra el archivo `start_up.sh`.
2. En la variable `MYSQL_PASSWORD`, asegúrese de ingresar la contraseña correcta. El usuario por defecto es "root".

   Ejemplo:

   ```bash
   MYSQL_PASSWORD="ContrasenaDeMySQL"
   ```

3. En la variable `DB_NAME`, asegúrese de ingresar el nombre correcto de la base de datos. El nombre de la base de datos será el que se utilizará para conectarse a la base de datos.

4. Guarde y cierre el archivo. El resto del archivo es la configuración de lectura de archivos que tiene el script, por lo que no es necesario modificarlo.

5. Ejecute el archivo `start_up.sh` en una consola bash con el siguiente comando:

   ```
   bash start_up.sh
   ```

   Este comando ejecutará la base de datos además de mostrar algún error de sintaxis en los archivos SQL.

   Es recomendable que las siguientes interacciones sean realizadas directamente en la interfaz de MySQL.

## Interacción con la Base de Datos

### Visualización de Tablas

Las tablas se pueden visualizar directamente desde la base de datos MySQL.

### Llamado de Procedimientos Almacenados

Para llamar a un procedimiento almacenado, utilice el siguiente formato en un archivo SQL dentro de MySQL:

```sql
CALL PL_X_X (Argumentos, Argumentos de salida: @ID_RESULT_OUT, @ERROR_CODE_OUT , @ERROR_MESSAGE_OUT)
```

Ejemplo:

```sql
CALL PL_ROLE_CREATION ('Nombre', 'Descripción', @ID_RESULT_OUT, @ERROR_CODE_OUT , @ERROR_MESSAGE_OUT);
```

Si desea confirmar el resultado de algún procedimiento almacenado, utilice el siguiente código:

```sql
SELECT @STATUS_OUT, @ERROR_CODE_OUT , @ERROR_MESSAGE_OUT;
```
Ejemplo 2: 
    
```sql
CALL PL_TASK_UPDATE ('Nombre', 'Descripción', 'Estado', 'Fecha de Inicio', 'Fecha de Término', 'Fecha de Vencimiento', 'Prioridad', 'ID de Tarea', @STATUS_OUT, @ERROR_CODE_OUT , @ERROR_MESSAGE_OUT);
```

Si desea confirmar el resultado de algún procedimiento almacenado, utilice el siguiente código:

```sql
SELECT @STATUS_OUT, @ERROR_CODE_OUT , @ERROR_MESSAGE_OUT;
```
Algunos de los scripts poseen como variable de salida STATUS_OUT y otros ID_RESULT_OUT. Para verificar esto, mirar la carpeta procedures. Cada procedimiento almacenado muestra sus variables de salida correspondientes en caso de necesitar comprobar cuál se requiere en específico.

## Verificación del Funcionamiento

Asegúrese de seguir las instrucciones detalladas anteriormente para garantizar que la base de datos esté funcionando correctamente.

## Información Adicional

Los procedimientos almacenados se pueden observar en la carpeta `procedures`.

Los archivos de inserción SQL se pueden observar en la carpeta `scripts`.

Los scripts e inserts en el archivo SCRIPT_INSERT_DUMMY_TEST.sql se pueden observar en la carpeta scripts. Este archivo contiene los inserts necesarios para la ejecución de pruebas automatizadas.
Se ejecutará de forma automática con el resto de los scripts.


---

### Contacto ###

Para cualquier duda o consulta, puede contactarnos a través de los siguientes correos electrónicos:

-ni.montecinoso@duocuc.cl
-ja.olivero@duocuc.cl
-ma.parraguezv@duocuc.cl
-jeh.aravena@duocuc.cl


### Referencias ###  

- [MySQL Workbench](https://dev.mysql.com/downloads/workbench/)
- [MySQL Workbench - Manual](https://dev.mysql.com/doc/workbench/en/)
- [MySQL Workbench - Tutorial](https://www.youtube.com/watch?v=7S_tz1z_5bA)

### Versión ###
- 1.0.0
