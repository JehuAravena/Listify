# README de pruebas automatizadas de proyecto LISTIFY #

Este README proporciona información importante sobre la configuración, instalación y uso de la ejecución de pruebas del proyecto LISTIFY.
Asegúrate de leerlo completamente antes de ejecutar las pruebas y sigue los pasos para garantizar el correcto funcionamiento de las pruebas automatizadas.

### Requisitos previos ###

Antes de ejecutar las pruebas automatizadas, asegúrate de tener instalado lo siguiente:

1. **MySQL 8.0.34:** Debes tener MySQL instalado en tu sistema. Puedes descargarlo [aquí](https://dev.mysql.com/downloads/installer/).
2. **Node.js 18.18.0:** Debes tener Node.js instalado en tu sistema. Puedes descargarlo [aquí](https://nodejs.org/es/).
3. **NPM 7.15.1:** Debes tener NPM instalado en tu sistema. Puedes descargarlo [aquí](https://www.npmjs.com/get-npm).
4. **Mochawesome:** Debes tener Mochawesome instalado en tu sistema. Puedes descargarlo [aquí](https://www.npmjs.com/package/mochawesome) o a través de comandos npm.
5. **Chai:** Debes tener Chai instalado en tu sistema. Puedes descargarlo [aquí](https://www.npmjs.com/package/chai) o a través de comandos npm.
6. **Chromedriver (^119.0.1):** Debes tener Chromedriver instalado en tu sistema. Puedes descargarlo [aquí](https://www.npmjs.com/package/chromedriver) o a través de comandos npm. (La versión debe coincidir con las dependencias del archivo `package.json`).
7. **Selenium-webdriver (^4.15.0):** Debes tener Selenium-webdriver instalado en tu sistema. Puedes descargarlo [aquí](https://www.npmjs.com/package/selenium-webdriver) o a través de comandos npm. (La versión debe coincidir con las dependencias del archivo `package.json`).
8. **Mocha:** Debes tener Mocha instalado en tu sistema. Puedes descargarlo [aquí](https://www.npmjs.com/package/mocha) o a través de comandos npm. (La versión debe coincidir con las dependencias del archivo `package.json`).
9. **Web Socket:** Debes tener Web Socket instalado en tu sistema. Puedes descargarlo [aquí](https://www.npmjs.com/package/websocket) o a través de comandos npm. (La versión debe coincidir con las dependencias del archivo `package.json`).

### Instalación ###
1. **Clonar el repositorio:** Para clonar el repositorio, debes ejecutar el siguiente comando en la terminal: `git clone https://(nombre de usuario valido)@bitbucket.org/ja-olivero/listify-tests.git`
```
#!git

git clone https://bitbucket.org/ja-olivero/listify-tests.git
```
2. **Instalar dependencias:**
Para instalar las dependencias del proyecto, debes ejecutar el siguiente comando en la terminal: `npm install`.
```
#!npm

npm install
```
3. **Instalar dependencias:**
Para instalar las dependencias específicas como chromedriver, selenium-webdriver, mocha, mochawesome, chai y websocket, debes ejecutar el siguiente comando en la terminal: `npm install chromedriver selenium-webdriver mocha mochawesome chai websocket`.
```
bash
npm install chromedriver 
npm install selenium-webdriver 
npm install mocha 
npm install mochawsome 
npm install chai 
```
4. **Encender funcionamiento de la web:**
Recuerda que para poder ejecutar las pruebas, tanto la API como la web principal deben estar corriendo correctamente. Para esto, lee el README de la API y el README de la web principal.

5. **Ejecución de base de datos y scripts necesarios para pruebas:**
Para poder ejecutar las pruebas, se debe haber ejecutado la base de datos con la carga base del archivo `start_up.sh`. Además, se debe ejecutar en una nueva hoja SQL dentro de MySQL Workbench los scripts que se encuentran en el archivo `SCRIPT_INSERT_DUMMY_TEST.` Estos scripts son necesarios para poder ejecutar las pruebas, ya que contienen la data dummy de las pruebas de tarea, permiso de rol y roles.



### Ejecución de pruebas ###

Recomendaciones para ejecutar las pruebas:

-No entrar a la página web mientras se ejecutan las pruebas.
-Mantener la ejecución de pruebas en primer plano.
-Verificar que la base de datos esté corriendo correctamente.
-Verificar que la api esté corriendo correctamente.
-Verificar que la web principal esté corriendo correctamente.
-Verificar que la base de datos haya sido cargada correctamente con el archivo `start_up.sh`.
-Verificar que los scripts de la base de datos hayan sido ejecutados correctamente con el archivo `SCRIPT_INSERT_DUMMY_TEST.`
-Verificar que el archivo `package.json` contenga las dependencias en las versiones necesarias para la ejecución de las pruebas.
-También se recomienda que la ejecucion de las pruebas se realice 2 veces para verificar que no existan errores de conexión con la base de datos (Para esto también se debe ejecutar 2 veces la base de datos y los scripts de dummy data).

Para iniciar las pruebas automatizadas, debes ejecutar el siguiente comando en la terminal: `npm test` dentro de la carpeta del proyecto (LISTIFY_TEST).
```bash
#!npm

npm test
```

### Reporte de pruebas ###

Para visualizar el reporte de las pruebas, debes abrir el archivo `mochawesome.html` que se encuentra en la carpeta `mochawesome-report` dentro de la carpeta del proyecto (LISTIFY_TEST). Este archivo se genera automáticamente al ejecutar las pruebas.

A través de este archivo, puedes obtener información sobre el estado de las pruebas, el tiempo de ejecución, el estado de las pruebas, capturas de pantalla de los resultados, el estado de los casos de prueba, posibles errores y su causa, así como las pruebas pasadas y fallidas.

### Contacto ###

Para cualquier duda o consulta, puede contactarnos a través de los siguientes correos electrónicos:

-ni.montecinoso@duocuc.cl
-ja.olivero@duocuc.cl
-ma.parraguezv@duocuc.cl
-jeh.aravena@duocuc.cl

### Autores ###
-Jehu Aravena
-Nicolas Montecinos
-Javiera Olivero
-Mauricio Parraguez

### Agradecimientos ###

Agradecemos a Duoc UC por la oportunidad de realizar este proyecto y a nuestro profesor guia por su apoyo y ayuda en el desarrollo del mismo.
```
#!agradecimientos

Duoc UC
```

### Referencias ###

-https://www.npmjs.com/package/mochawesome
-https://www.npmjs.com/package/chai
-https://www.npmjs.com/package/chromedriver
-https://www.npmjs.com/package/selenium-webdriver
-https://www.npmjs.com/package/mocha
-https://www.npmjs.com/package/websocket
-https://dev.mysql.com/downloads/installer/
-https://nodejs.org/es/
-https://www.npmjs.com/get-npm

### Version ###

1.0.0
```






