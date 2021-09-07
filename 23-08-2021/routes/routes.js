// Para acceder a UserController.js dese la ruta. Descargamos esto en Usuarios para hacer uso de sus metodos y funciones. Ej. UserController.guardar
var Usuarios = require(appRoot + '/api/controllers/UserController.js').usuario

//Ejemplo peticion GET
app.get('/Usuarios/Guardar/:nombre',function(request,response){
    Usuarios.guardar(request,response)
})

//Ejemplo petición POST
app.post('/mipost',function(request,response){
    console.log(request.body)
    response.json({state:true,datos:request.body})
})

