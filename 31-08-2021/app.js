/******MONTAR EL SERVIDOR CON NODEMON******/
var express = require('express')
global.app = express() // app es una variable global
var path = require('path')
global.appRoot = path.resolve(__dirname) // Esto me trae toda la raiz del aplicativo
global.config = require(__dirname + '/config.js').config


// CONEXION A MONGOOSE
const mongosee = require('mongoose')
mongosee.connect('mongodb://127.0.0.1:27017/datosmujeres',{useNewUrlParser:true,useUnifiedTopology:true},(error,res) =>{

    if (error) {
        console.log(error)
        
    }else{
        console.log('Conexion a Mongo Correcta')
    }
})



















require('./routes/routes.js')

// Para mostrar una carpeta publica "Pagina"
app.use('/',express.static(__dirname + '/Pagina'))


// Configuración para poder trabajar una SPA  con Angular
/*app.get('/*',function(request,response,next){
    response.sendFile(path.resolve(__dirname + '/Pagina/index.html'))
})*/



app.listen(config.puerto,function(){
    console.log('servidor iniciado por el puerto'+ config.puerto)
})





