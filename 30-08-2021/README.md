# Clase 08-30-2021  馃コ

Durante la clase se trataron los siguientes puntos:
- Consultas para que se muestren o no se muestren campos de un documento en Mongodb
- Zona de configuracion
- Conexi贸n a la bases de Datos - Conexi贸n Mongoose
- Configuracion de eventos en Mongodb (Guardar)


# NOTAS   馃悹

CONSULTA PARA QUE SE MUESTREN O NO SE MUESTREN CAMPOS DE UN DOCUMENTO:
1:significa mostrar
0:significa no mostrar
El id siempre se muestra por defecto
Ej: Documentos:
{ "_id" : ObjectId("6143caed68d8d75f04a3da5a"), "nombre" : "saida", "age" : "35" }
{ "_id" : ObjectId("6143cb0f68d8d75f04a3da5b"), "nombre" : "teo", "age" : "35" }
{ "_id" : ObjectId("6143ccb368d8d75f04a3da5c"), "nombre" : "juan", "age" : "15" }
-Deseo que no se muestre el id del documento cuya edad es 15:
db.personal.find({age:'15'},{age:1,_id:0}).pretty(};
-Para que me muestre solamente el nombre:
db.personal.find({age:'15'},{nombre:1,_id:0}).pretty();
- mongodb://127.0.0.1:27017/ es la cadena de conecci贸n

ZONA DE CONFIGURACION config.js:
Todo lo que son contrase帽as, informaci贸n sencible y configuraci贸n se debe manejar desde el archivo de configuraci贸n "config.js":
1) Creo el archivo config.js
2) Creamos un objeto var configuracion = {}.
3) La agregamos propiedades:
configuracion.puerto = 3000;
configuracion.clavecorreo = 'zevixwimkasdjxld';
4)Para que se pueda acceder a la info de este archivo: module.exports.config = configuracion
5) La idea es que cuando vaya al app.js me lea la info del archivo config.js entonces coloco: global.config = require(__dirname + '/config.js').config
6) Ahora para que escuche el puerto le doy: app.listen(config.puerto,function()

CONEXI脫N A LA BASE DE DATOS - CONEXION DE MONGOOSE:
4) mongosee.connect('mongodb://127.0.0.1:27017/datosmujeres',{useNewUrlParser:true,useUnifiedTopology:true},(error,res) =>{})
5) Levantamos el servicio:sudo systemctl start mongod
6) Colocamos: mongo
7) Levantamos el servidor: npm start

CREACION EVENTOS DE MONGO "GUARDAR":
- Configuraci贸n de cada una de las colecciones:
1) Importamos la libreria Mongoose en UserModel: const mongosee = require('mongoose')
2) Definimos el tipo de schema(estructuras internas de como esta estructurada la tabla): const Schema = mongoose.Schema
3) Configuramos el schema: var UserSchema = New Schema({firstname:String,lastname:String,age:Number})
4) Asignamos el esquema a una palabra en especial (la coleccion)
5) Creamos el modelo "mymodel" donde le asignamos el schema "Userschema" a la coleccion "usuarios" asi: const mymodel = mongosee.model('usuarios',UserSchema) 
6) Ahora en cada funcionalidad (CRUD) "Empecemos por guardar", vamos a crear una instancia del modelo "Mymodel": const instance = new Mymoodel
7) Configuracion de la instancia: instance.firstname = post.nombre;instance.email = post.email;instance,age = post.edad;
8) Despues de que la informacion llega a traves del post(nombre,email,edad) la guardamos en una instancia a traves del metodo "save"



