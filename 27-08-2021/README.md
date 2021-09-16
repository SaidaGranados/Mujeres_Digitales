# Clase 08-27-2021  👅

NO SE SUBE NINGÚN ARCHIVO AL REPOSITORIO YAQUE DURANTE ESTA CLASE SE ABORDARON LAS GENERALIDADES DE MONGO DB Y ALGUNAS SENTENCIAS

Durante la clase se trataron los siguientes puntos:
- Uso de Compass
- CRUD
- Operadores: actualización, comparación,lógicos

# NOTAS  🦄

USO DE COMPASS:
Para ingresar a Compass debo colocar el puerto que es: mongodb://127.0.0.1:27017 y con esto se abilita el acceso.
Uno se conecta a base de datos en servidores cuando uno trabaja en equipo.

Bases de datos desarrollo: cuando se está elaborando el código
Bases de datos de pruebas: cuando ya está estable
Bases de datos de producción: ya todo está bien

CRUD
REGISTRO DE DOCUMENTOS (CREATE):
-Para ingresar un solo documento: Ej:db.users.insertOne({name:"sue",age:26,status:"pending"})
-Para ingresar varios documentos en la misma coleccion:
Ej: db.songs.insertMany([{ "artista": "Queen"} { "artista":"Deep Purple" }])

CONSULTA DE DOCUMENTOS (READ):
-Consulta que me traiga todos los documentos de una colección: 
Ej: db.songs.find({age:{$gt:18}},{name:1, address:1}).limit(5)

-Collection:db.songs.find()
-Query creteria: {age:{$gt:18}}
-Projection: {name:1, address:1}
-Cursor modifier: limit(5)

-Consulta que me traiga un documento por su id:
-Ej: db.songs.find({"_id":ObjectId("5ebOcd3201508cbfof20c605")})
-Consulta que me traiga documentos dea cuerdo a un criterio especifico de busqueda:
-Ej: db.users.find({age:{$gt:18}}{name:1, address:1}).limit(5)

ACTUALIZACIÓN DE DOCUMENTOS (UPDATE):
-Ej: db.users.updateMany({age:{$lt:18}},{$set:{status:"reject"}})
-Colection: db.users.updateMany
-Update filter: {age:{$lt:18}}
-Update action: {$set:{status:"reject"}}

ELIMININAR DOCUMENTOS (DELETE):
-Ej: db.users.deleteMany({status:"reject"}})

FILTROS:
-Permiten econtrar y seleccionar documentos específicos dentro de nuestras colecciones.
-Lo logran a partir de la definición de uno o más criterios que son usados por Mongodb para 
filtrar y devolver solo los documentos que los cumplan.
Ej:Busqueda por artista AC/DC: db.songs.find({"artista":"AC/OC"})

OPERADORES:
Son herramientas para realizar múltiples operaciones como: aritmeticas,de comparación entres arreglos y etc.
Ej: db.songs.update({"_id":ObjectId("5eb0co080508cfb")},{$set:{"artista":"Queen"}})

OPERADORES DE ACTUALIZACIÓN:
$currentDate: Actauliza un campo de fecha a la fecha actual
$inc:Suma un número con el valor de un campo 
$min:cambia el valor de un campo solo si su nuevo valor es menor al anterior
$max:cambiar el valor de un campo solo si si nuevo valor es mayor al anterior
$mul: multiplica un número con el valor de un campo
$rename: cambia el nombre de un campo osea la clave
$set: guarda un nuevo valor en un campo

OPERADORES DE COMPARACIÓN:
$eq(Equal to a specified value): =
$gt(greater than a specified value): >
$gte(Greater than or equal to a specified value): >=
$lt(Less than a specified value): <
$lte(ess than or equal to a specified value): <=
$ne(not equal to a specified value): !=
$in(Valores dentro de un arreglo)
$nin(Valores que no están dentro de un arreglo)

OPERADORES LOGICOS:
$and: Permite unir diferentes criterios que se deben cumplir
$not: Invierte los resultados de la consulta
$or: Permite unir diferentes criterios opcionales
$nor:invierte la operación $or

EJEMPLOS:
- En Mongo no es necesario ingresar toda la información completa de un documento, inclusive se puede crear el campo y dejarle vacío así:  db.usuarios.insertOne({_id:101,nombre:'pedro',apellidos:''})
- Inserción de valores masivamente en una coleccion tipo many: db.ventas.insertMany([{producto:'papel'},{producto:'carton'}])
db.valores.insertMany([{valor:100},{valor:200},{valor:100},{valor:250}])
- Para contar cuantos documentos hay en una colección:
db.ventas.find().count();
- Para modificar los valores de varios campos:
db.ventas.updateMany({producto:'papel'},{$set:{producto:'Papel1'}})
- Para modificar el valor de un solo campo:
db.ventas.updateOne({criterio de busqueda)},{$operador:{producto:'nuevo valor'}})
{ "acknowledged" : true, "matchedCount" : 1, "modifiedCount" : 1 }
db.ventas.updateOne({_id:ObjectId("61423eb129bc3c323b844b3b")},{$set:{producto:'Papel11'}})
{ "acknowledged" : true, "matchedCount" : 1, "modifiedCount" : 1 }
- Para agregar un nuevo campo con valores: db.ventas.updateMany({},{$set:{estado:'Activo'}})
- Para agregar un nuevo campo o columna "estado:Activo": db.ventas.updateMany({},{$set:{estado:'Activo'}})
- A Papel1 y Papel11 le voy a colocar estado Inactivo:
db.ventas.updateMany({_id:ObjectId("6142403c29bc3c323b844b3d")},{$set:{estado:'inactivo'}})
- Para eliminar un solo documento:
db.ventas.deleteMany({producto:'carton11'})
- Para borar todos los documentos de una colección:
db.ventas.deleteMany();
- Para borrar un colección: 
db.ventas.drop();

Busquedas:
- Busquedas con el operador "or":
db.usuarios.find({$or:[{nombre:'saida'},{nombre:'wendy'}]})
- Busqueda con el operador "and":
db.usuarios.find({$and:[{nombre:'saida'},{estado:'Activo'}]})

db.valores.insertMany([{valor:100},{valor:200},{valor:100},{valor:250}])
- Busqueda por gt:>:
db.valores.find({valor:{$gt:100}})
- Busqueda por $n:!=
db.valores.find({valor:{$ne:200}})
- Busqueda por $gte:>=
db.valores.find({valor:{$gte:200}})
- Busqueda por $gt:>
db.valores.find({valor:{$gt:200}})
- Para cambiar el nombre de la tabla:
db.valores.renameCollection("record");

OJO:
password: {type: String, required: true,select:false}: El select:false indica que no quiero que me muestre ese campo

## LINKS  🐸

- Mongodb CRUD :
[![N|Solid](https://cftic.centrosdeformacion.empleo.madrid.org/web/educamadrid/principal/files/693904f5-6d73-4ed5-a20c-d162c2639767/logo_mongodb_atlas.jpeg?mediumSize=true)](http://docs.mongodb.com/manual/crud/)