# Clase 08-24-2021  鈽傦笍

Temas abordadados en clase:

- Resumen Modelo Vista Controlador
- Formas de capturar informacion: a traves de formularios,url y javascript
- Encriptaci贸n de un password
- Inicio de sesi贸n - Login


# NOTAS   馃悓
MODELO VISTA CONTROLADOR:
- Ruta:Nombres de destino
- Controlador: Valida la informaci贸n antes de que llegue a su destino
- Vista: Todo lo que ve el usuario final
- Modelo: Procesamiento en base de datos (insertar,leer,actualizar,eliminar info).
VISTA ==> RUTA ==> CONTROLADOR ==> MODELO
VISTA <== CONTROLADOR <== MODELO

-Toda la informaci贸n llega por el request
-El que responde es el controlador no la ruta.
-GET: traer info - POST:insertar info - DELETE:borrar info - PUT:modificar info - Hoy en d铆a POST se puede usar para hacer todas las peticiones y GET para mandar por la URL

CAPTURAR INFORMACION METODO POST POR MEDIO DE FORMULARIOS:

-Form "form" consta de la etiqueta "Submit" que al darle click va a ejecutar el action="http://127.0.0.1:3000/mipost"
-Vamos a apuntar hacia el servidor que estamos trabajando asi: action="http://127.0.0.1:3000/mipost" o tambien se puede: action="/mipost"
-Ahora agregamos el metodo: method="POST"
-Tener en cuenta que el name del form tiene que coincidir con el name que tenemos en "Postman" es decir colocar name="nombre"
-Si le damos inspeccionar en el navegador en la pesta帽a de "network" nos muestra todas las peticiones que se hacen hacia un servidor al darle click en "Submit".Ademas puedo ver:
Headers: Encabezado de como se env铆o la informaci贸n donde se puede ver:
Request. URL:http://127.0.0:3000/mipost hacia donde apunta
Request Method: POST
-Creo una petici贸n entre  mi  "index.html" y la aplicaci贸n de Node. Conexi贸n entre vista,ruta y controlador asi:
1) Voy a postman,coloco la ruta localhost:3000/mipost
2) Coloco post -> Body-> x-www-form-urlencoded
3) Escribo los datos clave-valor
4) Espero que las condiciones de validaci贸n en un ambito de que falle
5) Para hacer una petici贸n basica vamos a utilizar "formularios" en el script del archivo index.html con la etiqueta form.

-Form "form" consta de la etiqueta "Submit" que al darle click va a ejecutar el action="http://127.0.0.1:3000/mipost"
-Vamos a apuntar hacia el servidor que estamos trabajando asi: action="http://127.0.0.1:3000/mipost" o tambien se puede: action="/mipost"
-Ahora agregamos el metodo: method="POST"
-Tener en cuenta que el name del form tiene que coincidir con el name que tenemos en "Postman" es decir colocar name="nombre"
-Si le damos inspeccionar en el navegador en la pesta帽a de "network" nos muestra todas las peticiones que se hacen hacia un servidor al darle click en "Submit" donde se puede ver:
- Headers: Encabezado de como se env铆o la informaci贸n donde se puede ver:
- Request. URL:http://127.0.0:3000/mipost hacia donde apunta
- Request Method: POST
- En la parte de "Form Data" podemos ver que el dato no se mando por la url sino por un form "nombre; Jhon"

CAPTURAR INFO ATRAVES DE UNA URL - EJEMPLO  ACTIVACI脫N CUENTA - METODO GET:

Petici贸n GET activardesde mi HTML hacia node: se envian los datos al servidor por la url y el servidor contesta enviandome los datos que hay dentro de "misdatos" y el autor al darle click en la Url.
1) Creo la ruta de "activar" asi: app.get('/Usuarios/Activar/:nombre',function(request,response)
2) Creo la funcionalidad "activar" en el controlador y le mando como respuesta lo que hay dentro de "misdatos" + el parametro "nombre" si: response.json({datos:misdatos,autor:request.params.nombre})
3) Voy a mi archivo index.html y le paso la ruta: <a href="/Usuarios/Activar/saidas">De click aqu铆 para activar cuenta</a>

CAPTURAR INFO DESDE JAVASCRIPT CREANDO UNA PETICION GET TOMANDO CODIGO DE POSTMAN:
- Copio el codigo que Postman me ofrece para mandar peticiones POST:
- Verifico la ruta de postman localhost:3000/mipost y que sea POST
- Voy a code snippet -> JavaScript - XHR (que es c贸digo JS)
- Creo la funci贸n "nuevafuncion" y pego ese c贸digo javascrip que encontre en postman
- Creo un bot贸n en el html que invoque la funci贸n "nuevafuncion"
Punto importante: los datos de estos ejemplos se guardan en la memoria temporal de node que se borra apenas se tumba el servidor

ENCRIPTACI脫N DE INFORMACI脫N:
REGISTRO DE USUARIO POR MEDIO DEL METODO POST QUE GUARDE UN USUARIO Y CONTRASE脩A EN LA MEMORIA DE NODE:
- Creamos una nueva petici贸n POST en "routes": Usuarios.registro(request,response)
- Creo la funcionalidad "registro"  en UserController: 
- Creo un array tipo array de datos para almacenar mis datos de registro: var registro = [];Esta va amanejar dos campos "correo" y "password"
- Primero cuando lleguen los datos voy a hacer un validaci贸n luego lleno el array. Creo el objeto "registro" donde por el metodo POST capturo el email y el password
- Hago las validaciones con condicionales "If"
- En caso de pasar todas las validaciones mando la respuesta: response.json({state:true})
- Vamos ahora a postman a probar la petici贸n POST 127.0.0.1:3000/Usuario/Registro.No olvidar colocar la opci贸n: x-www-form-urlencode

ENCRIPTACI脫N DE PASSWORDS:
- Encriptar consiste en convertir los datos a otros totalmente diferentes pero que signifiquen los mismo
- Esto se puede hacer con librerias de encriptaci贸n: md5 o SHA256
- Hago la instalaci贸n: npm install md5 --save
- Importo el paquete: var MD5 = require('md5')
- Lo coloco en el codigo: password:MD5(post.password)
- El password encriptado es el que debemos almacenar en la base de datos

INICIAR SESION O LOGIN:
- Petici贸n de validaci贸n de email.
- Creo la ruta:Usuarios.login(request,response)
- Creo la funcionalidad login en UserController y las validaciones
- Creo un ciclo "for" que me compare el email y password ingresados por el usuario con los que se ingresaron cuando se registro
- Debo hacerle una coversi贸n de los datos que ingres贸 el usuario para encriptar el password


## LINKS 馃尀
- En npm se puede encontrar info sobre como instalar paquetes en Node: coloco en google: npm + el paquete que quiero instalar:
[![N|Solid](https://digital.ai/sites/default/files/pictures/styles/maxwidth_300/public/pt_logos/npm.png?itok=t8SEeog8)](https://getbootstrap.com/)