/******MONTAR EL SERVIDOR CON NODEMON******/
var express = require('express')
global.app = express() // app es una variable global
var path = require('path')
global.appRoot = path.resolve(__dirname) // Esto me trae toda la raiz del aplicativo
var port = 3000;

// Configuracion body-parser
var bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true})) // Para decodificar


require('./routes/routes.js')

// Para mostrar una carpeta publica "Pagina"
app.use('/',express.static(__dirname + '/Pagina'))


// Configuración para poder trabajar una SPA  con Angular
/*app.get('/*',function(request,response,next){
    response.sendFile(path.resolve(__dirname + '/Pagina/index.html'))
})*/



app.listen(port,function(){
    console.log('servidor iniciado por el puerto'+ port)
})





