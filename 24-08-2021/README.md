# Clase 08-24-2021  ☂️

Temas abordadados en clase:

-Resumen Modelo Vista Controlador
-Formas de capturar informacion: a traves de formularios,
-Configuración para trabajar en una SPA
-Modelo vista controlador MVC
-Definición de rutas y controlador
-Validaciones del lado del controlador
-Herramienta postman


# NOTAS   🐌
MODELO VISTA CONTROLADOR:
- Ruta:Nombres de destino
- Controlador: Valida la información antes de que llegue a su destino
- Vista: Todo lo que ve el usuario final
- Modelo: Procesamiento en base de datos (insertar,leer,actualizar,eliminar info)
VISTA ==> RUTA ==> CONTROLADOR ==> MODELO
VISTA <== CONTROLADOR <== MODELO

-Toda la información llega por el request
-El que responde es el controlador no la ruta.
-GET: traer info - POST:insertar info - DELETE:borrar info - PUT:modificar info - Hoy en día POST se puede usar para hacer todas las peticiones y GET para mandar por la URL

CAPTURAR INFORMACION METODO POST POR MEDIO DE FORMULARIOS:

-Form "form" consta de la etiqueta "Submit" que al darle click va a ejecutar el action="http://127.0.0.1:3000/mipost"
-Vamos a apuntar hacia el servidor que estamos trabajando asi: action="http://127.0.0.1:3000/mipost" o tambien se puede: action="/mipost"
-Ahora agregamos el metodo: method="POST"
-Tener en cuenta que el name del form tiene que coincidir con el name que tenemos en "Postman" es decir colocar name="nombre"
-Si le damos inspeccionar en el navegador en la pestaña de "network" nos muestra todas las peticiones que se hacen hacia un servidor al darle click en "Submit".Ademas puedo ver:
Headers: Encabezado de como se envío la información donde se puede ver:
Request. URL:http://127.0.0:3000/mipost hacia donde apunta
Request Method: POST
-Creo una petición entre  mi  "index.html" y la aplicación de Node. Conexión entre vista,ruta y controlador asi:
1) Voy a postman,coloco la ruta localhost:3000/mipost
2) Coloco post -> Body-> x-www-form-urlencoded
3) Escribo los datos clave-valor
4) Espero que las condiciones de validación en un ambito de que falle
5) Para hacer una petición basica vamos a utilizar "formularios" en el script del archivo index.html con la etiqueta form.

-Form "form" consta de la etiqueta "Submit" que al darle click va a ejecutar el action="http://127.0.0.1:3000/mipost"
-Vamos a apuntar hacia el servidor que estamos trabajando asi: action="http://127.0.0.1:3000/mipost" o tambien se puede: action="/mipost"
-Ahora agregamos el metodo: method="POST"
-Tener en cuenta que el name del form tiene que coincidir con el name que tenemos en "Postman" es decir colocar name="nombre"
-Si le damos inspeccionar en el navegador en la pestaña de "network" nos muestra todas las peticiones que se hacen hacia un servidor al darle click en "Submit" donde se puede ver:
- Headers: Encabezado de como se envío la información donde se puede ver:
- Request. URL:http://127.0.0:3000/mipost hacia donde apunta
- Request Method: POST
- En la parte de "Form Data" podemos ver que el dato no se mando por la url sino por un form "nombre; Jhon"

CAPTURAR INFO ATRAVES DE UNA URL - EJEMPLO  ACTIVACIÓN CUENTA - METODO GET:

Petición GET activardesde mi HTML hacia node: se envian los datos al servidor por la url y el servidor contesta enviandome los datos que hay dentro de "misdatos" y el autor al darle click en la Url.
1) Creo la ruta de "activar" asi: app.get('/Usuarios/Activar/:nombre',function(request,response)
2) Creo la funcionalidad "activar" en el controlador y le mando como respuesta lo que hay dentro de "misdatos" + el parametro "nombre" si: response.json({datos:misdatos,autor:request.params.nombre})
3) Voy a mi archivo index.html y le paso la ruta: <a href="/Usuarios/Activar/saidas">De click aquí para activar cuenta</a>

CAPTURAR INFO DESDE JAVASCRIPT CREANDO UNA PETICION GET TOMANDO CODIGO DE POSTMAN:
- Copio el codigo que Postman me ofrece para mandar peticiones POST:
- Verifico la ruta de postman localhost:3000/mipost y que sea POST
- Voy a code snippet -> JavaScript - XHR (que es código JS)
- Creo la función "nuevafuncion" y pego ese código javascrip que encontre en postman
- Creo un botón en el html que invoque la función "nuevafuncion"
Punto importante: los datos de estos ejemplos se guardan en la memoria temporal de node que se borra apenas se tumba el servidor

ENCRIPTACIÓN DE INFORMACIÓN:
REGISTRO DE USUARIO POR MEDIO DEL METODO POST QUE GUARDE UN USUARIO Y CONTRASEÑA EN LA MEMORIA DE NODE:
- Creamos una nueva petición POST en "routes": Usuarios.registro(request,response)
- Creo la funcionalidad "registro"  en UserController: 
- Creo un array tipo array de datos para almacenar mis datos de registro: var registro = [];Esta va amanejar dos campos "correo" y "password"
- Primero cuando lleguen los datos voy a hacer un validación luego lleno el array. Creo el objeto "registro" donde por el metodo POST capturo el email y el password
- Hago las validaciones con condicionales "If"
- En caso de pasar todas las validaciones mando la respuesta: response.json({state:true})
- Vamos ahora a postman a probar la petición POST 127.0.0.1:3000/Usuario/Registro.No olvidar colocar la opción: x-www-form-urlencode

ENCRIPTACIÓN DE PASSWORDS:
- Encriptar consiste en convertir los datos a otros totalmente diferentes pero que signifiquen los mismo
- Esto se puede hacer con librerias de encriptación: md5 o SHA256
- Hago la instalación: npm install md5 --save
- Importo el paquete: var MD5 = require('md5')
- Lo coloco en el codigo: password:MD5(post.password)
- El password encriptado es el que debemos almacenar en la base de datos

INICIAR SESION O LOGIN:
- Petición de validación de email.
- Creo la ruta:Usuarios.login(request,response)
- Creo la funcionalidad login en UserController y las validaciones
- Creo un ciclo "for" que me compare el email y password ingresados por el usuario con los que se ingresaron cuando se registro
- Debo hacerle una coversión de los datos que ingresó el usuario para encriptar el password


## LINKS 🌞
- En npm se puede encontrar info sobre como instalar paquetes en Node: coloco en google: npm + el paquete que quiero instalar:
[![N|Solid](https://digital.ai/sites/default/files/pictures/styles/maxwidth_300/public/pt_logos/npm.png?itok=t8SEeog8)](https://getbootstrap.com/)