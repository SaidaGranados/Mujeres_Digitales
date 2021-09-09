// Para acceder a UserController.js desde la ruta. Descargamos esto en Usuarios para hacer uso de sus metodos y funciones. Ej. UserController.guardar
var Usuarios = require(appRoot + '/api/controllers/UserController.js').usuario

//Ejemplo 1 peticion GET para guardar info
/*app.get('/Usuarios/Guardar/:nombre',function(request,response){
    Usuarios.guardar(request,response)
})*/


// Ejemplo 2 petición GET activar- petición GET desde mi HTML hacia node
app.get('/Usuarios/Activar/:nombre',function(request,response){
    console.log('Hola mundo')
    Usuarios.activar(request,response)
})

//Validar info mediante el metodo POST para guardar info
app.post('/mipost',function(request,response){
    console.log(request.body)
    Usuarios.guardar(request,response)
})

// Petición POST - Registro de usuario
app.post('/Usuario/Registro',function(request,response){
    
    Usuarios.registro(request,response)
})

// Petición POST - Iniciar sesión o login
app.post('/Usuario/Login',function(request,response){
    
    Usuarios.login(request,response)
})*/



