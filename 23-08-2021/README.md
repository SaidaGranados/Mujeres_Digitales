# Clase 08-23-2021  🦉

ESTA CARPETA TIENE UNICAMENTE LOS ARCHIVOS: app.js, Usercontroller.js y routes.j PARA MOSTRAR LA CONFIGURACION DEL CONTROLADOR,LAS RUTAS Y ALGUNAS PETICIONES GET Y POST PERO NO SE HA CREADO NINGÚN REPOSITORIO PARA EL BACKEND AÚN.

Temas abordadados en clase:

-Instalación paquete nodemon
-Formas de levantar un servidor
-Configuración para trabajar en una SPA
-Modelo vista controlador MVC
-Definición de rutas y controlador
-Validaciones del lado del controlador
-Herramienta postman


# NOTAS  🐼
## CONSIDERACIONES IMPORTANTES
- Utilizar puertos del 3000 hacia arriba.
- Cada aplicación debe ir en un puerto distinto pero se pueden montar en el mismo servidor todas las aplicaciones que me quepan en cuanto a espacio y memoria
- -Cuando uno levanta un servicio como Node, este consume aprox entre 70 y 100MGs.En 1 giga de ram que son 100mg puede caber mas o menos 10 aplicaciones
- Quitandole el "^" de un paquete, impido que me sea instalada la última versión del paquete en caso de que borre el "node_modules" y me toque darle nuevamente npm install.

NODEMON:
- Herramienta de configuracion donde no tenga que estar tumbe y levante el servidor
- Para instalar: /home/saida/github/proyectodeprueba/nodeapp "npm install -g nodemon --save"
- Para desinstalar:"npm uninstall -g nodemon"
- -g : Significa que el paquete no quedará instalado en "node-modules" sino en el ambiente de mi linux.
--save: se utiliza cuando un paquete se instale en node_modules pero no aparece en el "package.json:dependencies". Esto hace que me quede guardado ahí.
..verifico la version: nodemon -v : 2.0.12

FORMAS DE LEVANTAR UN  SERVIDOR:
Forma 1: nodemon app.js
Forma 2: 
-Voy a package.jon->"scripts":
Agrego el siguiente script:  ,"start":"nodemon app.js"
levanto el servidor: npm start.
-Es mejor levantar el servidor con el script porque cuando uno crea aplicaciones aveces es dificil identificar
con cual archivo inicia el aplicativo por lo cual creamos un script de inicio "start".

CONFIGURACION PARA EXPONER EL RENDERIZADO DE MIS PAGINAS HTML:
-Exponemos la carpeta publica:app.use('/',express.static(__dirname + '/Pagina'))

CONFIGURACION PARA TRABAJAR UNA SPA CON ANGULAR:
- Creamos un api: app.get('/*') esta significa que le vamos a hacer una petición de tipo "get" es decir,por medio de la la URL y que cualquier ruta (*) que venga despues del '/' que sea de tipo get va a mandar la siguiente respuesta:
app.get('/*',function(request,response,)...y de esta forma incluimos en el function: el request, el response y un callback de tipo "next".Los callbacks son respuestas que obtienen las funciones despues de hacer ciertos llamados.
.. entonces colocamos como respuesta: response.sendFile(path.resolve(__dirname + '/Pagina/index.html'))..donde path es la ruta del proyecto.
- En conclusión, esa configuración lo que hace es detectar cualquier otra ruta que venga despues del "/"y la esta resolviendo directamente sobre el archivo index cuya ruta es: /Pagina/index.html es decir, le estoy pidiendo que cuando haya alguna petición por la url,me responda directamente desde el renderizado del index.html

QUE ES UNA SINGLE PAGE APPLICATION?:
-Permite que exista un solo html y ese unico html va ir cambiando a medida que el usuario va navegando por la web.Solo hay un encabezado y el cierre,el resto está vacio.En cada petición la respuesta llena el espacio vacio con codigo javascript.Estos datos se van llenando sobre la marcha,en el momento automaticamente con los datos que llena el servidor.
-REACT,ANGULAR O VIEW trabajan con single Page Applications (SPA) osea que trabajan a traves de un solo archivo osea dentro de mi index.html esta el login.html, el contactenos.html etc.

MODELO VISTA CONTROLADOR MVC:
VISTA -----> RUTAS-----> CONTROLADOR -----> MODELO
La VISTA-->La info viaja desde la pagina hasta la RUTA -> la RUTA envia esos datos al controlador --> El CONTROLADOR valida la info,si todo esta bien le manda esos datos al modelo--> El MODELO guarda esa info en la base de datos.

DEFINICION DE RUTAS:
- Vamos a segmentar mejor la aplicación creando una carpeta llamada "routes", donde creo un archivo routes.js para almacenar las rutas
- Como el archivo es app.js es por donde arranca mi aplicación, debo vincular "routes.js" desde ahí para que app.js pueda hacer uso de las rutas asi: require('./routes/routes.js')
- Convierto la variable app en una variable global yaque va a hacer manipulada por muchos archivos asi: global.app = express()
- require: sirve para vincular o importar carpetas o mudulos

DEFINICION DEL CONTROLADOR:
-Controlador: archivo que valida la información para verificar que me este llegando la correcta antes de que se procese en la base de datos. Es la segunda capa de verificación.
1) Primero:
- Creamos la carpeta "api" y dentro de esta creamos dos carpetas: una carpeta llamada "controllers" y otra llamada "models".
- Creo mi primer archivo controlador en este caso "Usercontroller.js". Los controladores se crean depediendo de los modulos que yo tenga en mia aplicacion (ej.usuarios,facturaciones,pedidos..etc).
- UserController.js va a tener toda la configuración y validación de lo que me envie el archivo routes.js
2) Segundo:
Enlasamos la ruta con el controlador asi:
- Vamos a app.js e importamos las librería path asi: var path = require('path')
- Creamos una variable global: global.appRoot = path.resolve(__dirname) con el fin de que esta variable contenga toda la raiz de mi aplicativo y luego esa raiz de mi aplicativo que se llamó appRoot la coloco en "routes" y le concateno la ubicación de UserController.js de esta forma: var Usuarios = require(apiRoot + '/api/controllers/UserController.js').Todo esto se descarga sobre la variable "Usuarios" para que yo pueda hacer uso de las funciones o metodos de Usuarios(guardar,borrar,actualizar etc) desde "routes".
3) Tercero:
Hacemos la configuración de UserController asi:
- Creamos un array de objetos usercontroller = {}. Los corchetes indican que es un array de objetos
- Creamos una funcionalidad "guardar".Ejemplo: usercontroller.guardar = function(request,response){}
- Debemos exportar la variable usercontroller para que pueda ser usado por otros archivos asi: module.exports.usuario = usercontroller. Ya que "userconroller" es un modulo que esta ahí pero toca que se exporte para hacer uso de el. Con esto toda la info de "userconroller" va a estar en "usuario" por lo que debe agregarse en routes asi: var Usuarios = require(apiRoot + '/api/controllers/UserController.js').usuario.
- Le coloco a mi ruta '/Usuarios/Guardar'

VALIDACIONES DEL LADO DEL CONTROLADOR:
Le voy a enviar el dato name por la url para que me lo valide:
1)Primero creo una variable objeto "datos" donde capturo la petición de tipo GET asi: "name:request.params.nombre" y luego incluyo ese "name" en "routes" asi: '/Usuarios/Guardar/:nombre'. No olvidar colocar '/:' para indicar que "name" es un parametro que llega al guardar.
Agrego el "name" en el response del controlador asi:response.json({mensaje:'respuesta desde el controlador',name:datos.name})
2)Voy a validar los datos de name: hago validaciones a traves de condicionales if, si el valor ingresado no entra en ningua de esas condiones dadas de error debo retornar: response.json({state:true,mensaje:'usuario guardado',name:datos.name})

ALMACENAMIENTO DE UN USUARIO PARA EN LA MEMORIA DE EXPRESS:
Ejemplo que me guarde una lista de personas y cada vez que se almacene me muestre la lista de personas que hay:
- Creo un array para almacenar los nombres var misdatos = []
- Almaceno el "name" dentro de "misdatos" en una variable datos asi: var datos = misdatos.push(datos.name)
- En la respuesta le envío la clave: "usuario" y el valor: mis datos asi: response.json({state:true,mensaje:'usuario guardado',usuario:misdatos})
- Estos datos van a permanecer perpetuamente al menos que se caiga y se levante el servidor

POSTMAN:
Como en las peticiones tipo POST los datos vienen encriptados, debo hacer uso de la herramienta "Postman"
Collections: Se hacen carpeticas para guardar las Apis.

1)Ejercicio para enviar datos por el GET:
- Escogemos en la consola de postman: GET
- Colocamos la ruta de la petición: 127.0.0.1:3000/Usuarios/Guardar/saidas
- Click en "Send"

2)Ejercicio para enviar datos por el POST:
- Las peticiones GET funcionan dentro de express pero cuando una maneja peticiones POST debemos instalar la libreria "body-parser" as: npm install body-parser. No olvidar tumbat el servidor primero con ctrl + C.

- Configuración del body-parser:
-Lo configuro en "routes.js o en app.js" asi: var bodyParser = require('body-parser')
app.use(bodyParser.json())

- Vamos a Postman:
-Escogemos en la consola de postman: POST
-Colocamos la ruta de la petición: 127.0.0.1:3000/mipost
-Vamos al tab body--> x-www-form-urlencoded
-le pasamos los parametros: Ej: key: 		- value:

## LINKS    🐰
- Infografía SPA:
[![N|Solid](https:https://edteam-media.s3.amazonaws.com/community/original/956a244c-335f-4091-b230-b8c2ad4f5b98.jpg]
- Postman Documentación:
[![N|Solid](https://learning.postman.com/docs/getting-started/introduction/]
