/******MONTAR EL SERVIDOR******/
//request:para recibir los datos
//response:para responder

// Creación de variable express que alamacena la info del paquete express

var express = require('express')

// Crear aplicacion. Creo la variable app y llamo la variable express para que se ejecute
var app = express()

// Crear el puerto que es por donde viaja la info
var port = 3000;

/**Ejemplo Hola mundo para que responda un pagina web***/
//Creando mi primer api para exponer la ruta "/"
//send: es para enviar una repuesta renderizando info html del lado del servidor para que se muestre del lado del cliente
/*app.get('/',function(request,response){
    response.send('<h1 style="color:red">Hola mundo</h1>')
})*/

/**Ejemplo Hola mundo para que responda un archivo json o con datos***/
/*app.get('/',function(request,response){
    var datos = [{nombre:'saida',apellido:'granados'},{nombre:'wendy',apellido:'granados'}]
    response.json(datos)
})*/

//**Ejemplo pasandole un dato por la URL a traves de metodo GET */
/* ':/' significa que va recibir un dato
Quiero mandarle un dato "apellido" a esta api
cuando me llegue un dato quiero que me responda algo*/

/*app.get('/:apellido',function(request,response){

    console.log(request.params)
    var datos = [{nombre:'hola ' +  request.params.apellido}]
    response.json(datos)

})*/

/**********API 1**********/
//**Ejemplo 2 pasandole un dato por la URL a traves de metodo GET */
// Voy a pasarle mi nombre y mi apellido y el sistema lo tiene que concatenar

/*app.get('/:nombre/:apellido',function(request,response){

    console.log(request.params)
    var datos = [{nombre:'hola ' +  request.params.nombre + ' ' + request.params.apellido}]
    response.json(datos)

})*/

/**********API 2**********/
//** Ejemplo de un api que sume */
/*app.get('/suma/:valor1/:valor2',function(request,response){ // ojo:"suma2 no va con los ":" por que este es el nombre con el que yo identifico que se va a hacer
    var X = parseInt(request.params.valor1) + parseInt(request.params.valor2)
    response.json(X)
})*/


/*Ejercicio de renderizar html,css y javascript*/

//Creo la carpeta "Pagina" y una ruta estatica*/
app.use('/',express.static(__dirname + '/Pagina'))


// Le digo a la aplicacion que me escuche por medion de un puerto
app.listen(port,function(){
    console.log('servidor iniciado por el puerto'+ port)
})
