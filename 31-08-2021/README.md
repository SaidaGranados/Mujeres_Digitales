# Clase 08-31-2021  🐅

Durante la clase se trataron los siguientes puntos:
- Crud con Mongodb
- Creacion coleccion en Postman
- Uso paquete json2xls para convertir listado de usuarios a excel

# NOTAS  🐣

CRUD:

GUARDAR:
Si quiero que la edad sea un campo obligatorio,tipo numerico y que no se muestre, le coloco en la configuración del squema: age:{type:Number,select:false}

MODIFICAR:
- Para el guardar se usa una instancia "instance" pero para el modificar toca con el modelo "mymodel".
- Como estamos trabajando con identificadores, buscamos por id y modificamos los campos a modificar:  Mymodel.findByIdAndUpdate('Aqui va el id',{firstname:post.nombre,email:post.email,age:post.edad})
- Colloco una funcion de flecha para que me muertre si me arrojo un error o un resultado
- Vamos al controlador a pedirle que me nos mande el Id: Id:request.body.Id
- Incluimos una validación para el ingreso del Id
- Probamos en Postman

LISTAR
- Para listar se usa modelo "mymodel"
- Si no tengo ningun criterio de busqueda y quiero que me muestre  todos los campos de la coleccion: Mymodel.find({})
- Si quiero colocar un criterio de busqueda y que me traiga campos en particular: Mymodel.find({criterio de busqueda},{los campos que quiero mostrar}).
Ej: Para que me muestre el listado sin el :"__v": Mymodel.find({},{__v:0},(error,userList) => {}
0: para que no se vea un campo
1: para que se vea un campo
- Coloco una funcion de flecha para que me muestre si me arrojo un error o un resultado. Esta funcion es igual a decir Mymodel.find({},function(error,Usershow){ })
- Probamos en Postman

OJO: Si deseo que un campo de mi coleccion este ahi pero no sea visible Ej: Si no quiero que se vea la edad le coloco en la configuración del squema: age:Number,select:false

ELIMINAR:
- Para listar se usa modelo "mymodel"
- Coloco el criterio de busqueda (paar el ejemplo Id) y la funcion de flecha para que me muestre si me arrojo un error o un resultado asi:  Mymodel.findByIdAndDelete(post.Id,(error,userDelete) =>{}
- Vamos al controlador a pedirle que nos mande el Id: Id:request.body.Id
- Incluimos una validación para el ingreso del Id a eliminar
- Probamos en Postman

CREACION COLECCION EN POSTMAN
- Creamos una coleccion en postman llamada "Mujeresdigitales" y dentro ella la carpeta "Users" donde guardamos las peticiones del CRUD.

USO PAQUETE json2xls PARA CONVERTOR LISTADO USUARIO A EXCEL:
- Creo una petición Get para traer informacion: app.get('/Usuarios/ListarXLS',function(request,response){Usuarios.ListarXLS(request,response)})
- Vamos al controlador para crear el mismo metodo que usamos en Listar y este debe leer la info de los usuarios donde respuesta es la info que viene del modelo
- Importamos estas dos librerias: var fs = require("fs"); y var json2xls = require('json2xls');
- En un array json = [] recorremos con un ciclo for este array para inyectarle los registros de "respuesta"
- Guardamos en la variable xls la asignación del json2xls al array: var xls = json2xls(json);
- Convertimos el archivo a formato xlsx: fs.writeFileSync('usuarios.xlsx', xls, 'binary');
- Por ultimo, para descargar el archivo: response.download('usuarios.xlsx',function(err){}
- Creo una peticion en postman de tipo Get, copio la Url y la peho en el navegador para descargar el archivo generado
- El archivo se descarga, se envia al cliente final y se elimina asi: fs.unlinkSync('usuarios.xlsx')


## LINKS   🍄
- Instalación y configuracion paquete json2xls
[![N|Solid](https://topicchanger.com/wp-content/uploads/2019/04/npm.png)](https://www.npmjs.com/package/json2xls)