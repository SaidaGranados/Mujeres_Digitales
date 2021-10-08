# Clase 04-10-2021  🪀

IMPORTANTE!!
- Con la intención de  darle continuidad a todo el curso se aborda el tema de Angular sin crear otro repositorio por lo cual se suben unicamente los archivos con los que trabajaron (para el caso de esta clase el archivo src)  mas no todas las carpetas que vienen con el aplicativo.

Durante la clase se abordaron los siguientes temas:

- Creación ruta que me lleve al home con solo colocar http://localhost:4200/
- Creación componente pagina error404
- Contenido del archivo ts de un componente
- Sintaxis funciones en angular
- Tipos de datos en typescript
- Interfaces
- Constructor
- Servicio
- Pasar datos del typescript al archivo html
- Formatos

 ## Notas  🍸

CREACIÓN RUTA QUE MUESTRE EL HOME CON SOLO COLOCAR http://localhost:4200/

- Si quiero que cuando coloque http://localhost:4200/ unicamente me aparezca el home debo colocar en la ruta {path:'',component:HomeComponent}.

CREACION COMPONENTE PAGINA ERROR 404:
- Para crear el componente 404 que es una ruta que diga que si colocan una ruta que no exste se vaya a una pagina que diga que esa pagina no existe asi: ng g c componentes/p404
- Coloco lo que quiera en el p404.component.html ej:"Recurso no disponible"
- Creo la ruta y la configuracion path match full asi: {path:'**',component:P404Component,pathMatch:'full'}

CONTENIDO DEL ARCHIVO TYPESCRIPT DE UN COMPONENTE:

- import { Component, OnInit } from '@angular/core': significa que utiliza el elemento Component que esta dentro de @angular/core para usar componentes
- Oninit: es una funcion que esta dentro de c/u de los componentes y sirve para ejecutar cualquier cosa apenas se cargue el componente
- @Component({selector: 'app-home',templateUrl: './home.component.html',styleUrls: ['./home.component.css']}): es la configuracion de como esta conformado un componente: nombre del selector,la ruta del html y del css
- Angular crea la clase HomeComponent que implementa las funcionalidades del Oninit por eso cualquier funcion que este  dentro del Oninit se ejecutara  apenas se renderice la pagina
- Dentro de la clase HomeComponent deben ir todos sus metodos los cuales se ejecutan con la palabra "this". Ejemplo: this.cargarusuarios()

SINTAXIS FUNCIONES EN ANGULAR:
nombrefuncion():tipodefuncion{}, por ejemplo:ngOnInit(): void{}

TYPESCRIPT: nos sugiere tipar las variables osea definirle de que tipo va a ser(string,number,boolean..)

TIPADO DE DATOS EN TYPESCRIPT
- El tipado es asi: nombrevariable:tipo = valor. Ej:estado:boolean = true.
- Es posible utilizar el tipo any pero no es muy recomendable: datos1 : any[]= ['Teo',true,false,2]
- En caso de tener un array que tenga varios tipos de datos puedo indicar que es de un tipo o de otro asi: datos : (string | boolean | number)[]= ['Teo',true,false]
- En caso de querer inyectar info en un array, simplemente declaro el array con su tipado y le aplico el metodo push asi:
datos:string[] = [] 
this.datos.psuh('1')

INTERFACES
- Si estamos consumiendo informacion de un api rest va a ser dificil saber que tipo de datos llegan entonces tenemos dos opciones:
podemos colocar que el array es de tipo any asi: datos: any[]= ['Teo',true,false,2] o creando tipos de datos especiales llamados interfaces
- Para crear una interfaz: export interface nombreinterface Ej: export interface ifcCarrito 
- Una interfaz es un modelo de datos.Permite generar contratos entre el componente y la interfaz. Las interfaces son como las clases abstractas que obligan a las clases implementar o sobreescribir sus metodos. Esto se debe a la comprobacion estricta de tipos de datos de typescript
- Ej: export interface ifcCarrito{id:string,cantidad:number} entonces la variable me quedaria this.carrito.push({id:'',cantidad:0}) .Va exports porque esta operando sobre otro archivo(service o component)
- Si quiero que un atributo de mi interfaz sea opcional le pongo el signo de pregunta(?)
- Las interfaces son buenas para definir estructuras.Las puedo definir dentro del componente oo  por aparte

CÓMO CREAR INTERFACES FUERA DEL COMPONENTE:
- Colocar el comando: ng g i interface/personas

CARRITO DE COMPRAS:
- La estructura del carrito debe tener dos datos: el Id que es un string y la cantidad que es un numero

CONSTRUCTOR:
-Es un intermediario para hacer uso de elementos que se crean de forma general

SERVICIO:
- Son como las peticiones y es un servicio general para todo el aplicativo.
- Los servicios: datos o tareas comunes que necesitan mis componentes los programo en un servicio y se lo inyecto a  mis componentes. Angular lo hace de forma automatica .Inyeccion de dependencias
- Los servicios se crean con: ng g s services/datosusuario
- Voy al servicio y creo por ejemplo un servicio que me muestre el nombre de un usuario: public nombreusuario = 'john Castiblanco'
- Si deseo que desde homeComponent sea use ese servcio debo colocarlo en el constructor de home asi: constructor(public datouser: DatosusuarioService)
- Despues puedo mostrarlo en consola asi:console.log(this.datouser.nombreusuario)
- Si quiero que los datos de ese servicio(datouser) se visualicen en el html de mi home coloco: {{datouser.nombreusuario}}

PASAR DATOS DE TS A HTML SIN NECESIDAD DE USAT EL GETELEMENTBYID DE JS:
-Se coloca la varibale en {{}} . Ej: Tengo en el ts minuevonombre:string = 'pedro perez' y lo paso a html asi: {minuevonombre}}

PASAR DATOS CON ESTRUCTURA JSON DE TS A HTML:
- Si quiero que me muestre toda la estructura en el html se coloca: {{nombreestructura || json}}. Ej: {{misusuarios | json}}
- Si quiero ver un elemento concreto de ese objeto: {{nombreestructura.clave}}. Ej: {{misusuarios.apellido}}

PARA INCLUIR DATOS DE TIPO DATE EN EL HTML
- Creo una instancia de tipo date asi: fecha:Date = new Date() en el homeComponent y luego la paso al html asi: {{fecha}} y mer: Fri Oct 08 2021 16:14:31 GMT-0500 (Colombia Standard Time)  debe aparecer

FORMATOS 
- Formato fecha : {{fecha | date}} y me va a salir:  Oct 8, 2021
- Formato de fecha con hora : {{fecha |date:'medium'}} queda asi: Oct 8, 2021, 4:23:44 PM
- Formato valor: {{valor | currrency}}: me debe mostrar: $25,000.00


## LINKS🍦
- Link manual Angular opciones de formato Datepipe: 
[![N|Solid](https://docs.angular.lat/assets/images/logos/angular/angular.png)](https://angular.io/api/common/DatePipe).