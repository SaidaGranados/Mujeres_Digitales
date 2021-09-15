# Clase 08-26-2021  🎲

NO SE SUBE NINGÚN ARCHIVO AL REPOSITORIO YAQUE DURANTE ESTA CLASE SE ABORDARON LAS GENERALIDADES DE MONGO DB Y SU INSTALACION UNICAMENTE.

Durante la clase se trataron los siguientes puntos:
- Bases de datos sql y no sql
- Definición de Mongo
- Instalación de Mongo v5.0.2 para ubuntu 20.04.02
- Inserción y busqueda de documentos en Mongo

# NOTAS  🎷

BASES DE DATOS:
Es un conjunto de datos pertenecientes a un mismo contexto y almacenados sistematicamente para su posterior uso

BASES DE DATOS RELACIONALES:
-Un campo se relaciona con otro por medio de identificadores
-Los calculos son valores que se almacenan porque estar calculando todo el tiempo es un consumo del servidor
-Las bases de datos relacionales son buenas para hacer calculos internamente
Ej: Mysql,Postgres,Oracle,MaraiDB,mccql.

BASES DE DATOS NO RELACIONALES:
-Surgieron al detectar que habian ciertos datos que no eran necesario llenarlos pero que estaban consumiendo espacio de la base de datos al ser estructuras cuadradas (estan tanto en las columnas como en las filas) entonces decidieron recurrir a las bases de datos no relacionales.
-Las bases de datos no relacionales no exigen una estructura única sin tener que separar espacio en memoria.Solo me trae lo que le estoy pidiendo
-No tienen una estructura definida
-Puedes tener redundancia de datos
-Priorizan el acceso rápido sobre la normalización
Ej: Mongo,Firebase(es de google y esta basado en mongo),casandra,dynamodb

MONGO:
-Es una base de datos de documentos que ofrece una gran escabilidad y flexibilidad, y un modelo de consultas e indexación avanzada(ordenación de una serie de datos o informaciones de acuerdo con un criterio común a todos ellos).
-En mongo no hablamos de tablas y registros si no de colecciones y documentos
-Guarda estructuras de datos en formato BSON (una especificación similar a JSON)
-Prioriza la velocidad de lectura y escritura por encima de la integridad de los datos

INDEXAR LA INFORMACION:
Indice: estructura de una base de datos que mejora la velocidad de las operaciones,por medio de un identificador único de cada fila de una colección,permitiendo un rapido acceso a los documentos de una colección en una base de datos
-Mientras que los indices en las BDs relacionales tienen un indice por un campo que uno especifique, las BDs no relacionales tienen indices para todo.

DOCUMENTO:
-Esta compuesto por una clave y un valor
-Por cada documento Mongo genera un Id único "autonumerico" que no es consecutivo, es alfanumerico y aleatorio.Sin embargo yo podría cambiar el identificador.

Las bases de datos con identificadores autoincrementables son mas vulnerables que las que tienen secuencias dinamicas
Metodos de fuerza bruta: proceso para trabajar con secuencias dinamicas haciendo combinaciones hasta que coincidan.

FORMATO JSON (Javascript Object Notation): 
-Formato de texto sencillo para intercambio de datos.
-Se trata de la notación literal de objetos de Javascript(ahora funciona de forma independiente)
COMPASS: es la interfaz grafica para trabajar con Mongo.Solo vamos a trabajar con la linea de comandos porque asi es que se trabaja en Node

COMANDOS MONGO:
INSERTAR DOCUMENTOS 
- Listar bases de datos: show dbs "o" show databases
- Para pararme en una base de datos:use
- Crear una base de datos: use. Ej: use Mujeresdigitales
- Crear una colección: db.nombrecoleccion.insertnumerodecoleccionesacrear({Formato JSON})
- Para crear de a un documento: Ej: db.usuarios.insertOne({nombre:"saida",apellido:"castiblanco"})
    Para crear varios documentos: Ej: db.usuarios.insertMany({}).
    Esto me va a arrojar el "id" identificador único para este documento o registro.
- Como hacer si quiero colocar id propio: db.usuarios.insertOne({__id:1234567, nombre:'daniel',apellido:'perez'})

BUSCAR  DOCUMENTOS 
- Listar las colecciones: show collections
- Listar todos los documentos: db.nombrecoleccion.find() - Ej: db.usuarios.find().
- Como hacer para que esa coleccion de documentos se vea más organizada de arriba hacia abajo?: db.nombrecoleccion.find.pretty() - Ej: db.usuarios.find.pretty()
- Busqueda de un documento en concreto: db.usuarios.find({nombre:'saida'}).pretty

MODIFICAR DOCUMENTOS
- Modificar de a un documento: db.nombrecoleccion.updateOne() - Ej: db.usuarios.updateOne()
- Modificar varios documentos: db.nombrecoleccion.updateMany() - Ej: db.usuarios.updateMany()

ELIMINAR DOCUMENTOS
- Eliminar de a un documento: db.nombrecoleccion.deleteOne() - Ej: db.usuarios.updateOne()
- Eliminar varios documentos: db.nombrecoleccion.deleteMany() - Ej: db.usuarios.updateMany()

## LINKS  🦀

- Intalación de Mongodb para Ubuntu:
[![N|Solid](https://cftic.centrosdeformacion.empleo.madrid.org/web/educamadrid/principal/files/693904f5-6d73-4ed5-a20c-d162c2639767/logo_mongodb_atlas.jpeg?mediumSize=true)](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu/).

- Información bases de dartos sql y no sql:
[![N|Solid](http://www.ithinkupc.com/media/legacy/Web/images/blog/sql-nosql-esquema-base-datos.png)](https://www.ithinkupc.com/es/blog/sql-nosql-newsql-que-son-historia-y-eleccion/).

- Información bases de datos sql y no sql:
- [![N|Solid]((https://ed.team/comunidad/sql-vs-nosql)]