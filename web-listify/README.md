# README Web proyecto Listify

**Web-listify** es el Front que se encarga de conectar la **api-task** donde esta se conecta con la base de datos **bd-listify**, ten en cuenta que sin estas piezas el front carecerá de funcionalidades de **CRUD** (Create, Read, Update, Delete).

Asegúrate de seguir todos los pasos detallados a continuación para garantizar el correcto funcionamiento del proyecto.

## Requisitos Previos

1. **NodeJs v18.18.0:** Si aun no lo tienes instalado, puedes descargarlo en los enlaces a continuación.
   
   1.1. **Windows:** https://nodejs.org/dist/v18.18.0/node-v18.18.0-x64.msi
   
   1.2. **MacOs:** https://nodejs.org/dist/v18.18.0/node-v18.18.0.pkg
   
   1.3. **Linux 64-bit:** https://nodejs.org/dist/v18.18.0/node-v18.18.0-linux-x64.tar.xz

   Si la instalación es correcta esta tambien deberia instalar **npm**, para verificar que estos estén instalados usa los siguientes comandos en **CMD** o **Terminal**.

   ```bash
   node -v
   node --version
   npm -v
   npm --version
   ```
2. **Angular CLI:** Angular es la herramienta que se encarga de las funciones la conexión con la api y el front, este se instala mediante **CMD** o **Terminal**.

   ```bash
   npm install -g @angular/cli
   ```
3. **Git:** En windows es importante tener instalado **git** ya que de lo contrario los comando como **git clone** puede no funcionar. Puedes descargarlo [**aquí**](https://github.com/git-for-windows/git/releases/download/v2.42.0.windows.2/Git-2.42.0.2-64-bit.exe)

## Instalación

Una vez realizada la instalación de los **requisitos previos**, sigue los pasos a continuación para la instalacion del Front **web-listify**.

Los siguentes pasos puedes hacerlos desde **Visual Studio Code** o desde tu **IDE preferido**(abriendo una terminal dentro de esta) o desde tu **Cmd o terminal**.

1. Clona o descarga el repositorio a tu máquina.
2. En tu cmd o terminal navega hasta la carpeta raíz del proyecto.
3. Escribe y ejecuta el siguiente comando para instalar las dependencias necesarias:

```bash
npm install
npm install ws
```

## Uso

Si ya hizo la importación de los datos a **MySql** y esta ya esta corriendo **api-task** continúe con lo siguiente, dado que las funcionalidades del front depende de esto.

Una vez realizados todas las configuraciones mencionadas, solo queda ejecutar el siguiente comando para poder correr el front, para ello en la **terminal integrada** de tu **IDE** o en una **terminal o cmd** externa que esté situada dentro de la carpeta del proyecto de **web-listify**, ejecuta el siguiente comando.

```bash
ng serve -o
```

Esto iniciará el proceso de la **compilación de la aplicación**, si esto sale bien deberías poder ver en la terminal **"compiled successfully"**, esto ademas te entregará una dirección web:

**http://localhost:4200/** esta direccion corresponde a donde la aplicacion se despliega, la pagina se abrirá automáticamente.

### Navegador web

Una vez en el navegador, puedes usar los botones en la barra de navegación los que te permitirán acceder a las diferentes secciones de la aplicación.

La barra de navegación va a mostrar por defecto los enlaces para Home, Solution y Login, el landing siempre sera Home.

**Login:** Se establecieron dos tipos de cuentas predefinidas desde las cuales se puede acceder **Admin** y **Player**, el **mail de usuario** y su **contraseña** a continuación:

**Admin:**

      Email: ADMIN@EMAIL.COM
      Contraseña: 789012

**Player:**

      Email: PLAYER@EMAIL.COM
      Contraseña: 345678

Estos dos usuarios cuentan con tareas predefinidas donde se puede observar una buena parte del funcionamiento total de la aplicación. Además de esto es posible generar un usuario propio e ingresar con este, en este caso se deberan agregar tareas desde cero presionando el boton "Add Task" en vista de escritorio y el símbolo "+" en vista móvil.

#### Rutas funcionales

Dentro de la web se tienen una cantidad de rutas tanto para Player y Admin.

* Player - Considere estar logeado antes de navegar por las siguientes rutas.
   * Flujo por barra de direcciones
      * /home
      * /solution
      * /login
      * /register
      * ```/task/list```, si esta ruta se visita mediante la barra de direcciones y no se está correctamente logueado (email y password), esta se visualizará, pero no reflejará ninguna tarea ni cambios.
      * ```/settings```, si esta ruta se visita mediante la barra de direcciones y no se está correctamente logueado, esta se visualizará (email y password), pero no reflejara ningún cambio que 
      * /logout

   * Flujo por navbar
      * home
      * solution
      * Login
      * Register
      * Task
         * **Add Task** se completa el formulario y se puede visualizar la tarea agregada inmediatamente en la web de ser ese el caso.
      * settings
      * Logout

* Admin - Considere estar logeado antes de navegar por las siguientes rutas.
   * Flujo por barra de direcciones.
      * /home
      * /solution
      * /login
      * /register
      * /task/list
      * /level
      * /permission
      * /role
      * /user
      * /settings
      * /Logout

   * Flujo por navbar
      * home
      * solution
      * login
      * register
      * task
      * Admin (Submenu)
         * Levels
         * permission Roles
         * Roles
         * Users
      * settings
      * Logout

#### Login con google
Dentro de login se puede registrar con **google auth**, Se puede acceder a la aplicación mediante la cuenta de google, para ello se debe presionar el botón con la **"G"** característica de google y se abrirá una ventana emergente donde se debe ingresar el correo y la contraseña de la cuenta de google. Una vez ingresado será redirigido donde verá, **su foto**, **nombre**, **email**, selecciona continuar para ser redirigido a ```/register```, donde se pondrá un **nickname** y establecerá la **contraseña** para la aplicación, una vez hecho esto será redirigirá a la página ```/task/list```.

## Contacto

Si tienes alguna pregunta o comentario sobre la aplicación, no dudes en contactarnos a través de los siguientes correos electrónicos:

- Jehu Aravena: jeh.aravena@duocuc.cl
- Nicolas Montecinos: ni.montecinoso@duocuc.cl
- Javiera Olivero: ja.olivero@duocuc.cl
- Mauricio Parraguez: ma.parraguezv@duocuc.cl
