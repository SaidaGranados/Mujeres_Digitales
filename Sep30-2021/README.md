# Clase 30-09-2021  🎀

IMPORTANTE!!
- Con la intención de  darle continuidad a todo el curso se aborda el tema de Angular sin crear otro repositorio por lo cual se suben unicamente los archivos con los que trabajaron (para el caso de esta clase el archivo src)  mas no todas las carpetas que vienen con el aplicativo.


Durante la clase se trataron los siguientes puntos:
- Instalacion de angular CLI
- Creación de un proyecto
- Breve descipcion carpetas de angular y src
- Creación de rutas
-Creación dde un componente

# NOTAS   🛼
1) INTALAR ANGULAR CLI:
- sudo npm install -g @angular/cli
g:significa que se instala de manera global
- Verifico la version de Angular asi: ng version
y me debe aparecer:
Angular CLI: 12.2.7
Node: 14.17.5
Package Manager: npm 7.22.0
OS: linux x64

2) CREAR UN PROYECTO:
- Coloco el comando: ng new nombredemiproyecto
- Si me pregunta si quiero agregar Angular routing contesto Y
- Si me pregunta que procesador deseo utilizar(css,sass,less,scss) le doy css
Angular routing: me permite navegar entre cada uno de los componentes

CONTENIDO CARPETAS ANGULAR:
- node_modules: donde se descargar paquetes para trabajar
- src: donde vamos atrabajar
- browserlistrc: configuraciones por defecto del aplicativo(no se toca- es informativo)
- editorconfig: es para manejar como voy a trabajar en el aplicativo de Angular (como voy a ir codificando y como se va a ver Ej: identacion,charset=utf-8)
- gitignore: ya viene con unos datos por defecto.Es donde relacionamos todas las carpetas que no se suben a git.Exclusiones para posibles codigos que uno vaya trabajando
- angular.json: Contiene la configuración de todo nuestro proyecto. A medida que instalo paquetes en Angular se pueden ver esta carpeta. Aqui aparece el el css global  de la pagina.
- karma.config.js: archivo de configuracion para hacer test unitarios
Test unitarios: es una forma de revisar el codigo fuente verificando cada funcionalidad en el lado del frontend.
- package-lock-json: archivo donde aparece todo los paquetes que vamos instalando
- package.json: es el mismo package que vemos en Node. Aqui encuentro los script que voy a usar para Angular "ng","ng serve","ng build etc.Aqui encuentro "las dependencies" que no son las mismas que trabajamos en Node pero cuando integremos backend y frontend las dependencias de Node van a aparecer aqui: @angular/.. son depedencias de Angular, rxjs,tslib y zone.js son depedencias de npm.
En devDependencies encontramos dependencias de Angular y de typescript
- README.md: es el mismo archivo readme del git que es donde viene como se instala el proyecto
- tsconfig.app.json: tiene la configuracion de como va a funcionar typescript
- tsconfig.json: tiene la configuracion intrerna de tyscript.Dice que tyscriptesta trabajando con las librerias de es2018 que significa ECMASCRIPT que es un estandar de Javascript pero que en realidad va a trabajar con el 2017
Ojo: Estandar para trabajares: ecmascript 2015 que es sistema estandar para trabajar con tyscript
El ecmascript trabaja dependiendo de ciertos navegadores 
Cuando sacan un standar de javascript algunos navegadores adoptan este estandar "ecmascript"
- tsconfig.spec.json: hace parte del typescript pero para pruebas unitarias. Estas pruebas de hacen con "jasmine"

CONTENIDO CARPETA SRC:
- test.ts: test unitarios
- style.css: es cuando yo quiero colocar los estilos y que se repliquen en todo mi proyecto. Para que lo detecten globalmente todos los elementos ya que cada componente tiene su propio estilo
- polyfils.ts: archivo de lectura que unicamente lo que hace es reportar la libreria 'zone.js' que hace parte de Angular Cli que es la que permite que cada vez que hagamos modificaciones se reflejen en el navegador
- main.ts: configuracion inicial por donde arranca nuestra aplicacion. Este archivo esta importando las libreria de Angular Cli. Cuando uno instala Angular Cli en realidad esta esta trabajando con @ngular/core que es una libreria que tiene todos los procesos, funcionalidades de javascript.
typescript compila todo lo que uno escribe y lo convierte en javascript nativo
- index.html: primer archivo que se renderiza.Archivo padre por el que todo inicia.Aqui coloco todo lo que yo quiera importar o vincular como por ejemplo archivos css o scripts.De hecho el css se puede vincular por aqui y o por angular.json 
<app-root>: raiz desde donde todo se va a compilar y mostrar.Internamente tiene el <app-autlet>
<app-outlet>: es el que carga directamente el componente
- favicon.ico: icono que va en las esquinas de las paginas
- enviroments: es la parte que uno configura para los pasos a produccion.
- assets: todos los recursos que yo necesito para trabajar como imagenes,javascript,archivos de texto
- app-routing.module.ts: rutas de Angular que son las que permiten crear enlaces para que traigan la informacion de los componentes a la pagina index.html. Esto se configura con una estructura json. En const routes: Routes = []; se agregan las rutas.
Los componentes estan formados por:html,css y ts:
- app.component.ts: tiene la configuracion del componente donde coloco:
selector: nombre como quiero que se llame mi componente
templateUrl: ruta de la plantilla donde esta mi html
styleUrls: ruta de la plantilla donde estan los estilos del componente
title:va el nombre del proyecto
- app.module.ts: archivo padre donde defino las configuraciones de lo que yo voy a utilizar. Es el equivalente al app.js de Node. Por donde arranca todo el proceso pero a nivel de Typescript

COMANDO PARA LEVANTAR EL SERVIDOR:
- Para que corra Angular.Levanta el servidor: ng serve. 
- Copiamos la ruta que aparece: http://localhost:4200

CÓMO CREAR UN COMPONENTE:
- Dentro del app.component.html esta el <router-outlet> por lo cual borramos toda la informacion y dejamos solo la etiqueta
- Borramos la info que esta dentro de app.component.html y unicamente dejamos  la etiqueta <router-outlet> yaque siempre debe estar dentro de app.component para que cargue el componente. Debo dejar la pagina vacia al menos de que quiera dejar algo que aparezca en todas las paginas
- Freno el compilador con ctrl + c
- Voy a mi proyecto y creo el componente desde la consola con: ng generate component nombrecarpeta/nombredelcomponente o tambien puedo colocar el comando abreviado que seria: ng g c nombrecarpeta/nombredelcomponente. Ej: ng generate component componentes/home
- Le doy ng serve para que levante el proyecto y si reviso debe estar creada la carpeta "componentes" con el componente "home" adentro
- Si reviso home.component.ts noto que se creo la clase HomeComponent y su constructor()

CREACION DE RUTAS:
- Creo el la ruta de home en el paquete del rutas voy app-routing.module.ts y creo la ruta dentro del array "routes" creo un objeto con la palabra path:el nombre de la ruta "preferiblemente" y le digo que maneja el componente HomeComponent asi: {path:'home',component:HomeComponent} con esto el sistema importa inmediatamente la libreria que viene de HomeComponent.
- Si creo varios componentes(home,menu,carrusel etc). Los puedo colocar si quiero en el componente home

Ojo: Si se estan utilizando plantillas que tienen varios css o javascript debo colocarlos en la carpeta assets y llamarlos dentro del head del archivo index.html 

## LINKS   👾
- Link manual Angular instalación: 
[![N|Solid](https://docs.angular.lat/assets/images/logos/angular/angular.png)](https://angular.io/guide/setup-local).