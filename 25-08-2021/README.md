# Clase 08-25-2021 🌟

Temas abordadados en clase:

- CRUD en la memoria de Node modulo usuario
- Enviar correos electronicos desde Node

RESUMEN:
1) Creamos el app, configuramos el servidor,hago que escuche el puerto,llamamos al archivo de rutas
1) Cuando arranca el app.js se crean las rutas
3) Se aplican las validaciones solo en el controlador y tocamos solo un poco el modelo solo para hacer las modificaciones correspondientes
4) Procesos de almacenamiento,elimiacion,modificacion y listar lo vamos a hacer en el modelo.


# NOTAS    🌻

## PROCESO
Arranco haciendo todo lo que necesito en las rutas. 
Historias de usuario final (funcionalidades que me piden para la aplicación)
Analista de software: analiza y verifica los que puede necesitar un programa.Crea las historias de usuario

CRUD
- Un sistema que almacene un usuario
- Un sistema que modifique los usuarios creados
- Un sistema que me permite eliminar un usuario creado
- Un sistema que permita listar los usuarios creados

1) RUTAS
Defino las rutas principales:
- NOMBRE APLICACION DESDE  DONDE ARRANCA: generalmente se escriba "app"
- METODO: get o post
- API: para indicar que se esta consumiendo un api (es opcional)
- NOMBRE DEL MODULO: modulo a trabajar: usuario,permisos,roles,pedidos,facturación,ventas.
- EVENTO O FUNCIONALIDAD:guardar,eliminar,listar,modificar
app.metodo('API/nombre del modulo/evento',function(request,response){})
Ejemplo: app.post('API/Usuarios/Guardar',function(request,response){})
.. en algunas empresas encontramos las rutas escritas asi: app.post('API/Usuarios/Guardar', Usuarios.guardar())

2) CONTROLADOR:
- Creamos el objeto usercontroller = {}.Exportamos todos los metodos CRUD que vamos a trabajar para que puedan ser expuestos en las rutas con: module.exports.usuario = usercontroller 
- Creamos las funcionalidades en el UserController
Ej: usercontroller.Modificar = function(request,response){}

MODELO GUARDAR:
 1) -En el modulo guardar creamos la variable: "post" que es un objeto y le asigno nombres de los campos a guardar.   -Capturamos "el request" por donde está llegando la información asi: var post =  {nombre:request.body.nombre,email:request.body.email,telefono:request.body.telefono}
 2) Creamos las validaciones con los condicionales if
 3) Hacemos la petición que va directamente al modelo para eso creamos el modelo de usuarios "UserModel"
 4) Creo el objeto var Modeluser = {} que tiene los mismos eventos del controlador(Guardar,Modificar,Eliminar,Listar).
 5) Debemos exportar ese  Modeluser para que pueda ser usado por otros archivos asi: module.exports.usuario = usercontroller
 6) Para el caso del evento "Guardar" este NO recibe un request sino un "post". Este "post" es el objeto que trae el nombre,email,telefono.Adicionalmente, va a recibir otro parámetro o mejor dicho, va a generar una salida de información que se hace a traves de un "callback". 
 -Los callbacks son atributos que vienen asociados a las funciones.
 Conclusion: llega la información por un "post", la procesa y la devuelve por un "callback" y al delvolverla llega nuevamente al controlador.

COMO GENERAR EL CALLBACK?
 -Creo el array var miusuarios = []; que es la que va a trabajar en memoria y capturo los datos que vienen del controlador asi:misusuarios.push({nombre:post.nombre,email:post.telefono,telefono:post.telefono})
-Ahora para ver como quedo el array le damos: return callback({state:true,mensaje:"ok"})
-La info se retorna al controlador por el return callback por lo que no olvidar que si coloco "return callback" en los parametros que recibe la función Guardar debe estar tambien function(post,callback).
7)Llamamos la funcionalidad "Guardar" del modelo desde el controllador por lo cual le entregamos el parametro "post" y para recibir la informacion debo crear una funcion es decir, la respuesta de un callback se captura por medio de una funcion asi: ModelUsuarios.Guardar(post,function(respuesta){console.log(respuesta)}. Lo que me va a devolver aquí es el callback osea: return callback({state:true,mensaje:"ok"})
8)Comprobamos si el proceso de envío de información fue exitoso a traves de una petición que creamos en "Postman"

MODELO LISTAR:
-Este modelo permite leer la información que se ha almacenado. En este modulo no es necesario enviar parametros(nombre,email,telefono..etc) solo es necesario pedirle que responda
1) Creamos una nueva funcionalidad en el modelo llamada "Listar" asi: Modeluser.Listar = function(post,callback).
2) Como "Listar" no recibe ningun parametro el "post" no hace nada, solo le colocamos "return callback", ese callback va a ser un objeto : return callback({datos:misusuarios})
3)Llamo al modelo "Listar" desde mis UserController. Como no hay post para enviar simplemente le pongo "null" y le envio como segundo parametro la respuesta del callback "function()" asi: ModelUsuarios.Listar(null,function(respuesta)
4) Vemos el resultado desde postman

MODELO MODIFICAR:
-Vamos a modificar el identificador de la posición en la que está ese dato para modificar.
1) Creamos una nueva funcionalidad en el modelo llamada "Modificar" asi: Modeluser.Modificar = function(post,callback).
2) Yo tengo que recibir la posición del registro que quiero modificar. Ej: misusuarios[post.posicion].nombre = post.nombre;
3) Retorno la respuesta: return callback({state:true,mensaje:"Uusario actualizado"})
4) Con esto recibo el nombre y el telefono por el "post" pero adicionalmente, debo recibir la posición del registro la cual voy a recibir desde el "userController.Modificar" asi: posicion:request.body.posicion
5) Debo incluirle los mismos criterios de validación del "guardar" y agregar al criterio de evaluación de la "posicion"
6) Llamo  a la funcionalidad de "Modificar" en el controlador: ModelUsuarios.Modificar(post,function(respuesta)
7)Vemos el resultado desde postman
OJO: En el modulo modificar pese a que  "guardar" y el "modificar" comparten la misma información no es bueno por temas de seguridad modificar un usuario o un email despues de ser activadoo.

MODELO ELIMINAR:
1) Creamos una nueva funcionalidad en el modelo llamada "Eliminar" asi: Modeluser.Eliminar = function(post,callback).
2) Colocolo la posicion del registro a eliminar: misusuarios.splice(parseInt(post.posicion),1). "1" es la cantidad de registro a eliminar.Debo covertir el dato post.posicion de string a entero.
3) Le retorno la respuesta: return callback({state:true,mensaje:"Usuario eliminado"})
4) Voy al controlador para capturar en la variable post la posicion del dato a eliminar asi: var post = {posicion:request.body.posicion}
5) Coloco la validación de la posición de esta forma obligo a que me tienen que mandar una posicion
6)Vemos el resultado desde postman.

ENVIO DE CORREOS ELECTRONICOS DESDE NODE:
La idea es que yo me pueda enviar un correo. Esto es para capturar información. Si alguien entra a la página y se resgitra, yo tengo la info y me la envío a un correo para contactar a la persona.

- Instalamos el paquete nodemailer: npm install nodemailer --save
- app.post('enviarcorreo',function(request,response))
- Importamos nodemailer asi: var nodemailer = require('nodemailer')
- En la ruta debemos colocar un sistema de transporte de información
- Configuramos la variable "var transporter" la cual llama o utiliza el "nodemailer.createTransport" y le pasa unos parametros(host,port,secure..etc) 
- Creamos la variable var mailOptions para configurar el correo y la contraseña
- Utilizo la variable "transporter" llamando al metodo "sendMail" para pasarle como parametro "mailOptions" y de esta forma me arroja si el mensaje fue enviado o si arrojó error
-Probamos en postman

Configuración correo:
1)Creo un correo de prueba para capturar la información: pruebassaida323@gmail.com.
2)Debo hacer una configuración en la cuenta de ese correo de prueba: Voy a Gestionar tu cuengta de Google -> Seguridad -> Verificación de dos pasos (debe estar activado).
3)Configuro la contraseña: .. voy a mi correo a "contraseñas de aplicaciones" ->  le indico que voy a crear la contraseña para un "correo" y el seleccionar dispositivo:ordenador en windows u otra -> generar -> copio la contraseña generada: zevixwimkasdjxld -> hecho
-Esta contraseña es para que nos autoenviemos en correo electronico.

TIP:
Para modificar varias palabras al mismo tiempo: Click sobre la palabra + CTRL + D.dir_name es "nodeapp" o sea la raiz del aplicativo

## LINKS  🍄
- En npm se puede encontrar info sobre como instalar paquetes en Node: coloco en google: npm + el paquete que quiero instalar:
[![N|Solid](https://digital.ai/sites/default/files/pictures/styles/maxwidth_300/public/pt_logos/npm.png?itok=t8SEeog8)](https://nodemailer.com/about/)
