# Clase 08-20-2021  🍇

ESTA CARPETA NO TIENE CODIGO PORQUE DURANTE LA CONFIGURACIÓN DE NODE NO SE INCLUYÓ EL REPOSITORIO DEL BACKEND YAQUE AUN NO SE HA CREADO

Temas abordadados en clase:

-Mean,api,aplicación web y pagina web
-Instalación de node
-Instalación del nmp
-Instalación paquete json
-Creación de mi primer servidor de backend y  algunas peticiones get.
-Creación de mi primer api con una respuesta renderizando info en html.

# NOTAS ⚽️

## CONCEPTOS IMPORTANTES

MEAN:
- Mean: mongo,angular,express,node
- Frontend:Html,css,js,Angular. Todo lo que el usuario final ve, con lo que trabaja e interactua
- Backend:Mongo, Express,Node. Es lo que esta detras de todo el programa, recibe la info y la procesa
- Node: herramienta creada por google basada en el motor v4 que ejecuta codigo javascript del lado del servidor(backend). Ese codigo javascript lo podemos ejecutar tanto del lado del front como del backend.Nos permite crear Apis o controlar el backend.Recibe la informacion,la procesa y devuelve un resultado.

API:
-Un Api es un intermediario entre muchas capaz de frontend con el backend o con cualquier otra aplicacion.
-Una api se conecta a la aplicacion a traves de un "endpoint" que es un canal de comunicación para traer los datos.
-Las Api permiten el intercambio de informacion entre el servidor y el cliente por medio del protocolo HTTP y HTTPS, la informacion se transportará por un xml o un json.
-El frontend consume una api: conectarse, leer los datos y enviar peticiones.
-El backend: crea las api.
-Api biblioteca: hacen uso de funciones,metodos o rutinas.Para usar funciones que tiene una api debemos importar la libreria
-Api de clases: nos permiten usar clases ya definidas.
-Permiten que una aplicación se comunique con otras aplicaciones sin necesidad de traer conocimientos de cómo fueron desarrolladas.

APIREST:
-APIREST(Representational State tranfer)
-Aplicacion en el backend capaz de contestar a las llamadas (REQUEST) de una serie de URLs por el protocolo HTTP y tambien es capaz de recibir JSON para gestionar la info que le enviemos.La ventaja es que podemos desarrollar 
una API en el backend y consumirla en cualquier cliente.
-Las comunicaciones clientes-servidor con STATELESS osea que se maneja de forma indepenediente.Envío una petición
recibo una respuesta.
-Multiples endpoints.Hace varias llamadas para obtener la informacion que necesita.
-Obtiene todos los datos, nmo puede pedir solo lo que necesita y esto afecta en el rendimiento.
-Utiliza verbos estandares de HTTP o en tras palabras tipos de peticiones entre el frontend y el backend:
Post(crear),Get(Obtener),Put(Editar),Delete(eliminar)
-Mneja formatos XML y XSON.

GRAPHQL:
-Tiene un unico endpoint. Con una sola llamada obtiene todos los datos y subdatos.Ej.Facebook
-Pide solo los datos que necesita  haciendo que la respuesta sea más rapida y eficiente

AJAX-WEBSOCKETS:
-Ajax: lo creo microsoft.Trabaja bajo el esquema request-response. Permite pedir partes especificas al servidor y  este a la vez me devuelve solo esa parte para no tener que recargar toda la pagina. El servidor envía esos datos a traves de un formato json.Ajax permite hacer cambios en tiempo real
-Fomato json(Javascript object notation): estan creados en una sintaxis clave-valor. Esta me va a enviar la URL de esa parte puntual que quiero cambiar de la pagina que luego yo puedo mostrar con javascript.
-Websocket:comunicación bidimensional.Canal siempre abierto entre cliente y servidor por lo cual la info
viaja libremente.

WEB:
-URL(UNiform resource locator):Identificador unico que tiene cada documento
-Resource:todo documento o archivo que puedes encontrar en la web
-Hyperlink:enlace dentro del texto
-HTML (Hypetext Markup languaje): lenguaje con el que se contruye la web.Texto que contiene enlaces
-HTTP (Hypertext transference protocole): Protocolo de comunicacion de la web para mandarse documentos html.Conjunto de reglas para que el destino y el origen se puedan comunicar
-HTTP: sinifica seguro
-Javascript permite dar interactividad a nuestra pagina web.

APLICACION WEB:
-Realizar procesos
-Algunos tienen accesibilidad.Solo para los que tengan autorización
-Tienden a durar más tiempo en su construcción

NODE:
-Node.js se usa para ejecutar JavaScript del lado del servidor, el cual tiene un gestor de paquetes llamado npm que cuenta con una comunidad gigante que sube constantemente sus paquetes de código para compartir con otros.
-Node va en la versión 14.17.5
-Para validar que node quedo instalado: node -v
-Para entrar a la consola de node: node + enter
-Para salir de la consola de node: ctrl + c

NPM:
-npm(net package management): Sistema de gestion de paquetes por defecto para Node.js. Los paquetes son codigo que se encuentra en una carpeta llamada “node_modules” y tendrán una configuración que los llamará dentro de un archivo llamado “package.json”.
-La paquete “package.json” se genera con el comando “npm init” despues de descargar node.js
-Para validar que el npm quedo instalado: npm -v

¿En que casos podria utilizar un paquete?
Para subir imagenes,para conectarme a cierta base de datos,para controlar la seguridad,enviar correos electronicos desde mi aplicacion. Las estrellas de calificación no son un paquete, son iconos en el frontend que se pueden implementar con plugins

¿En que casos podria utilizar un paquete?

Para subir imagenes,para conectarme a cierta base de datos,para controlar la seguridad,enviar correos electronicos desde mi aplicacion. Las estrellas de calificación no son un paquete, son iconos en el frontend que se pueden implementar con plugins.
EXPRESS:
-Servidor web que nos permite exponer hacia la web nuestro trabajo.Express es una libreria de package.json

## CREACION DE UN SERVIDOR
1)Creacion y configuracion de node.js
-Instalacion de node y del nmp (ver link guia)
-Crear la carpeta "nodeapp" en /home/saida/github/proyectodeprueba/nodeapp
-Generar el paquete package.json con “npm init” en /home/saida/github/proyectodeprueba/nodeapp. (ver link guia)
-app.js:archivo de inicio tambien le dicen server.js oindex.js,
-Crear un workplace para almacenar nodeapp
-Crear un arhivo dentro de la carpeta nodeapp llamado app.js.

2) Montar el servidor
-Necesitamos desargar el paquete "express" que es el servidor web. Express es un paquete que apenas lo instalemos va a hacer parte del conjunto de paquetes de "node_modules" cuya configuración se encuentra en dependencies dentro de “package.json”
-Instalamos express: npm install express
-La carpeta node_modules contiene todos los paquetes que tiene node.js.
-"Node_modules" nunca se sube al repositorio. Si la borramos la podemos recuperar con "npm install".
-var express = require('express'): con "require" le estoy diciendo que voy a requerir un paquete de mi node_modules que se llama "express" y estoy almacenando ese paquete en la variable "express" que cree.

3) Crear la aplicacion
Creamos la variable app y llamo a la variable express para que se ejcute var app = express()

4) Crear el puerto
-var port = 3000;
-Todas las aplicaciones que se hacen con Node del lado del backend corren a atraves de un puerto
-Puerto:tuberia o embudo por donde viaja la información. Ej:HTTP viaja por el puerto 80.
-Cuando se trabaja con Node toca definir el puerto por el cual voy a trabajar(puedo escoger el que yo quiera. Ej port 3000)

5) Le digo a la aplicacion que me escuche por medio de un puerto
app.listen(port,function(){
    console.log('servidor iniciado por el puerto'+ port)
})

6) Levantamos el servidor con el comando: node app.js y lo podemos visualizar en el navegador con 127.0.0.1:3000
Tres formas para referirse al equipo local:
-localhost:3000
-127.0.0.1:3000
dirección Ip local: le doy ifconfig y busco la ip de mi equipo asi:http://192.168.1.55:3000/

7) Me va a salir "Cannot GET /".Este es error 404 que indica que el host ha sido capaz de comunicarse con el servidor, pero no existe el recurso que ha sido pedido.Como solucionarlo?
Creando mi primer api para exponer la ruta "/": ('ruta',function(request,response))
response.send('hola mundo'): es para enviar una repuesta.

## CONSOLA ZONA DE NETWORK
-Aqui se evidencian las peticiones que yo hago al servidor en la pestaña "headers"- Ej: puedo ver que hice una petición a esta url: Request URL: http://192.168.1.55:3000/
-En response o en preview se puede ver la respuesta

## METODO GET:
-El metodo GET utiliza la URL para el envío de información
-':/' significa que va recibir un dato
-request:para recibir los datos
-response:para responder
-El metodo get puede ser usado  patra activar una cuenta asi uno puede mandar una url con el get para que solo con un click del usuario su cuenta quede activada.
-Para capturar la info que viene por get se usa"request.params"
-Para capturar la info que viene por post se usa "request.body"

## RENDERIZAR CODIGO HTML
Con esto logramos que la pagina este expuesta en internet para que otras personas puedan acceder a mi equipo Ej:"localhost:3000" es decir, si yo tuviera otros equipos en red y ellos accedieran a mi dirección ip
y al puerto 300o, ellos verían mi página.
Proceso:
1)Creo una carpeta llamada "Pagina"
2)Creo una ruta estatica que sirve para exponer archivos html,css y javascript asi:
nombreapi.use('/',express.stactic(__dirname + '/nombrecarpetadondeestamihtml'))
"dirname":hace referencia al directorio local osea a la raiz del proyecto


## LINKS   💻
- Infografía Api:
[![N|Solid](https://edteam-media.s3.amazonaws.com/infographics/original/84a53153-05a4-425f-a7f0-2e4c195b4878.png]
- Infografía Apirest y Graphql:
[![N|Solid](https://edteam-media.s3.amazonaws.com/community/original/3f120955-3020-48ab-891d-40137b3c2bce.jpg]
- Infografía Apliación web y pagina web:
[![N|Solid](https://edteam-media.s3.amazonaws.com/community/original/9816d4a2-3705-45ba-91b4-e2a823325fdd.jpg]
- Infografia Json:
[![N|Solid](https://ed.team/comunidad/que-es-json]
- Infografía Ajax y Websocket:
[![N|Solid](https://edteam-media.s3.amazonaws.com/infographics/original/05e3d830-d4e0-48b7-b558-26aa26233bf6.png]
- Instalación Node.js en Ubutu 20.04:
[![N|Solid](https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-ubuntu-20-04-es]
- ¿Que es un npm y de qué me sirve?:
[![N|Solid](https://platzi.com/tutoriales/1763-npm/6714-que-es-npm-y-de-que-me-sirve/?utm_source=google&utm_medium=cpc&utm_campaign=12915366154&utm_adgroup=&utm_content=&gclid=CjwKCAjwj8eJBhA5EiwAg3z0m1PaZVCO6-1lRfeZOS-5Ucu9nPfzeJEMDEGMCp7FevtIJ4EI3wTE3RoCW1QQAvD_BwE&gclsrc=aw.ds]