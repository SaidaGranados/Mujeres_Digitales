# Clase 06-10-2021  🧸

IMPORTANTE!!
- Con la intención de  darle continuidad a todo el curso se aborda el tema de Angular sin crear otro repositorio por lo cual se suben unicamente los archivos con los que trabajaron (para el caso de esta clase el archivo src)  mas no todas las carpetas que vienen con el aplicativo.

Durante la clase se abordaron los siguientes temas:
- Concepto de servicio
- Mensaje como servicio y como componente
- Jerarquía de las estructuras
- Cómo coloco un componente global para todas las vistas
- Concepto de constructor
- Cómo hacer un servicio de peticiones
- Concepto de promesa
- Crud:guardar y listar
- Creación de modelos

 ## Notas  🚀
SERVICIO:
Un servicio es un agente externo que nos devuelve algo para nuestro uso. El mesaje es algo muy comun que  esta dentro de la aplicacion.

MENSAJE:
El mensaje podria ser un servicio para usarlo de forma global. Los mensajes podemos crealos como un servicio que se encargue de mostrar informacion o podemos manejarlo como un componente que se utilice en todos lados

MENSAJE COMO COMPONENTE:
- Para crear el mensaje globalmente convierto el mensaje en un componente colococando: ng g c componentes/mensajeria 
y luego migro la información que tenia inicialmente en el html del contactenos a mensajeria asi:
<div class="mensajeria">{{mensaje}}</div>
- Coloco el componente en cada una de las vistas <app-mensajeria></app-mensajeria>

CÓMO COLOCO UN COMPONENTE GLOBAL PARA TODAS LAS VISTAS:
app.component.html que es un elemento global para todos los componentes.Los componentes que se colocan en el app.component.html van a aparecer en TODAS LAS VISTAS.
Ej: app-mensajeria es un componente de app.component.html

JERARQUÍA DE LAS ESTRUCTURAS (NIVEL)
-->Index.html
---->app.component.html
------> router-outlet(continen todos los componentes por medio de la rutas) 
--------> componentes, servicios o componentes hijos - ,vitas:home - contactenos - carrito de compras etc
Ej: app-mensajeria es un componente de app.component.html

MENSAJE COMO SERVICIO
- La mensajeria como componente tiene que conectarse en algún momento con c/u de las aplicaciones por lo cual debe hacer uso de un "servicio" por lo cual el servicio es el intermediario para llenar la información
- Una cosa es el MensajeriaComponent que esta dentro de mensajeria.component.ts y otra es el servicio de mensajeria.
- Se crea con: ng g s services/mensajeria
- Creo una variable publica "mensajes" que sea de tipo any[] dentro de mensajeriaservice.ts
- Creo una funcionalidad publica "crear mensaje" que va a recibir un "texto:string". Cuando alguien llame a esta función se va a llenar este array de datos con un push asi:
this.mensajes.push(texto)
- Me voy al componente de mensajeria y le inyecto el servicio de mensajeria asi: constructor(public msg:MensajeriaService). En este caso esta variable es publica para que pueda ser usada por fuera del ts del componente del servicio
-Como la idea es que los mensajes vayan apareciendo en la medida que voy utilizando los componentes vamos a al ts del componente contactenos para inyectarle el servicio de mensajeria asi: constructor(private msg:MensajeriaService) y hago uso del servicio: this.msg.crearmensaje('El Registro se guardó con exito')
- El problema es que al mirar en el navegador puedo notar con los mensajes se van acumulando y no desaparecen porque se va llenando el array para solucionar esto voy al serviicio de mensajeria y utilizo el settimeout para que cada vez que se llene el array con un registro lo elimine a los 5 min
- Otro problema es que a medida que salen los mensajes se va bajando la información, una solución sería colocarlos abajo o seria ajustar los estilos ccs de componentes dejando un div en posicion absoluta dentro del cual esten los estilos de los mensajes en posicion relativa

CONSTRUCTOR:
Construye ciertas cosas para que uno las utilice. Obtiene todos lo que necesito para poder trabajar.

1. CÓMO HACER UN SERVICIO DE PETICIONES:
- las peticiones son un servicio. - Coloco: ng g s services/peticion
- Se necesitan librerias para hacer peticiones las comunes son: HttpClient y HttpRequest entonces me voy a app.module.ts para configurar esas librerias asi:
import { HttpClientModule} from '@angular/common/http'; y luego lo adiciono a los imports: HttpClientModule
- Me voy para peticion.service y me traigo la funcionalidad del HttpClient asi: constructor( private http:HttpClient)

1.1 CREACION PETICION POST:
- Ahora creo la funcionalidad Post() para que cuando yo la llame este responda la info correspondiente.

    PROMESA: Petición que se va a ejecutar solo hasta que la petición anterior halla terminado y se escribe asi: let promise = new Promise((resolve,reject) =>{})
    La promesa tiene dos eventos: resolve que es cuando se resuelven las cosas o un reject. Estos eventos van a generar una funcionalidad que es la promesa.
- Le doy this.http.post(url,data).toPromise() Donde le coloco mi url y la información que va a recibir "data"
- La url y el data deben estar dentro del contenido del post asi: Post(url:string,data:{})
- Luego el .then que es que va a pasar cuando tertmine.Este tiene dos elementos que son: res o respuesta y como no sabemos de que tipo va a ser le colocamos de tipo "any" y esa respuesta  va a generar como resultado el "resolve".
- Retornamos la promesa asi: return promise.

1.2 CREACIÓN PETICIÓN GET:
- Es igual a la post pero esta no recibe data unicamente la url

DEFINIR EL NOMBRE DEL HOST:
Para definir el nombre del host, voy a crear una variable publica y le digo que hay una url local que es la que hace la petición. Esta urlLocal va a apuntar a un servidor en algún lugar que es para nuestro caso el servicio de Node que tenemos osea a ese punto va a mandar la info asi: public urlLocal:string = 'http://localhost:3000'.

2. CRUD
2.1 GUARDAR
- Vamos a crear un nuevo componente llamado "clientes" a donde vamos a hacer la petición y lo incluyo en el archivo routes
. Vamos a la aplicación de nodeapp a traves de la consola y levantamos el servicio con nodemon app.js
- Vamos a clientes.ts y le inyectamos el servicio de la peticionService en el constructor
- Creo la funcionalidad "Guardar" a la cual le paso dos parametros: el host osea la url local y le concateno un texto asi:  this.peticion.Post(this.peticion.urlLocal + '/Usuarios/guardar',{}) y como segundo parametro la data{}
- OJO: Si yo deseo comunicarme con varios endpoints o con otras apis coloco en el servicio de la petición ej: public urlfacebook:string = 'http://facebook:3000'. La info del puerto se la entregan a uno las apis cuando va a conectarse.
VALIDAR SI ME ESTOY CONECTANDO CON MIS APIS DE nodeapp
- Voy a postman y envío la petición previamente creada de Usuarios/Guardar y me tiene que retornar informacion que se ingresa a nodeapp
- Ahora hagamos un ejercicio en el cual no se mandan datos {}.Le voy a colocar un nombre diferente en la url "guardar"
- Creamos un boton en el html de clientes

 PROBLEMA CON LOS CORS: 
Aparece porque nosotros estamos trabajando desde el localhost:4200(Angular) y la aplicación que nosotros corriendo esta desde el puerto 3000(Node) entonces cuando hay petición de un punto a un puerto diferente el navegador desconfia porque generalmente las peticiones se hacen desde el mismo puerto o el mismo dominio y coloca un bloqueo.

- CREAR LOS MODELOS
Ya me estoy conectando a mi nodeapp pero tengo que enviarle los datos de la dbs por eso voy al html de mi clientes y coloco  unos imputs con los modelos asi:<input type="text" [(ngModel)]= "nombre">
- Luego me voy al ts de clientes y declaro las variables de la info que recibo(nombre,apellido,email,direccion y telefono)
- Dentro de mi funcion "Guardar" instancio esas mismas variables dentro de una estrctura json llamada data asi: var data = {nombre:this.nombre,apellido:this.apellido,email:this.email,     telefono:this.telefono,direccion:this.direccion,edad:this.edad}
- Ahora dentro de mi peticion Post cambio el {} por "data" asi: this.peticion.Post(this.peticion.urlLocal + '/Usuarios/Guardar',data)
- Realizo las validaciones con in condicional if para ificar que si la respuesta "res" es de estado true mande un mensaje y si no mane otro

2.2. LISTAR
- Creo una funcion CargarDatos(), configuro tambien el host y el url pero a diferencia del guardar, aqui no recibo "data" .
- Creo un array para mostrar los datos que se van a cargar: datosusuarios:any[] = [];
- Durante la peticion hago un llamado a ese array this.datosusuarios = res indicandole que tiene que almacenar la respuesta "res ahi"
- Creo un ngFor en el html para mostrar los datos: <div *ngFor = "let i of datosusuarios">{{i.firstname}}</div>