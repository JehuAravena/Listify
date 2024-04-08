#!/bin/bash

#------------------------------------------------------------
# conexion a la base de datos y almacenamiento de scripts
#------------------------------------------------------------

# credenciales de la base de datos
DB_NAME="bd_listify"
MYSQL_USER="root"
MYSQL_PASSWORD="" # dejar vacio antes de hacer el pull request
MYSQL_HOST="localhost"
MYSQL_PORT="3306"

# configuracion de la base de datos
MYSQL_COMMAND="mysql -u$MYSQL_USER -p$MYSQL_PASSWORD -h$MYSQL_HOST -P$MYSQL_PORT"

# scripts (EL ORDEN ES IMPORTANTE, SI DA ERROR, PRUEBA PONER EL SCRIPT QUE DA ERROR AL FINAL)
SCRIPTS_PATH="./scripts"
SCRIPTS=(
        "BD_CREATION.sql" 
        "SCRIPT_INSERT_ERRORS_ROLES.sql"
        "SCRIPT_INSERT_ERRORS_TASKS.sql"
        "SCRIPT_INSERT_ERRORS_USERS.sql"
        "SCRIPT_INSERT_LEVELS.sql" 
        "SCRIPT_INSERT_PERMISSIONS.sql" 
        "SCRIPT_INSERT_ROLES.sql" 
        "SCRIPT_INSERT_DUMMY_USERS.sql" 
        "SCRIPT_INSERT_ROLE_PERMISSIONS.sql"
        "SCRIPT_INSERT_ERRORS_ROLE_PERMISSIONS.sql"
        "SCRIPT_INSERT_ERRORS_LOGIN.sql"
        "SCRIPT_INSERT_DUMMY_TASKS.sql"
        "SCRIPT_INSERT_DUMMY_TESTS.sql"
        )

# pl
PROCEDURES_PATH="./procedures"
PROCEDURES=(
            "PL_TASK_CREATION.sql" 
            "PL_USER_CREATION.sql"
            "PL_ROLE_CREATION.sql"
            "PL_USER_UPDATE.sql"
            "PL_TASK_UPDATE.sql"
            "PL_TASK_DELETE.sql"
            "PL_USER_DELETE.sql"
            "PL_ROLE_UPDATE.sql"
            "PL_ROLE_DELETE.sql"
            "PL_ROLE_PERMISSION_CREATION.sql"
            "PL_LOGIN.sql"
            "PL_ROLE_PERMISSION_DELETE.sql"
            )

#------------------------------------------------------------
# funcion para ejecutar los .sql 
#------------------------------------------------------------

execute_sql() {
    echo "Iniciando ejecución de $1"
    $MYSQL_COMMAND < $1
    if [ $? -eq 0 ]; then
        echo "$1 ejecutado exitosamente."
    else
        echo "Error al ejecutar $1."
        exit 1
    fi
}

#------------------------------------------------------------
# ejecucion de los scripts
#------------------------------------------------------------

for script in "${SCRIPTS[@]}";
do
    execute_sql "$SCRIPTS_PATH/$script"
done

#------------------------------------------------------------
# ejecucion de los pl
#------------------------------------------------------------

for procedure in "${PROCEDURES[@]}";
do
    execute_sql "$PROCEDURES_PATH/$procedure"
done

#------------------------------------------------------------

echo "Finalizado."

#------------------------------------------------------------