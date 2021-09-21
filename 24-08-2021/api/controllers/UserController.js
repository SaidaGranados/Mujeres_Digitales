var  MD5 = require('md5')

// Configuración de UserController.

// Creo un array de objetos usercontroller
var usercontroller = {}

/*Funcionalidad "guardar"
// Creo un array para guardar la info de "datos"*/
var misdatos = [];
usercontroller.guardar = function(request,response){

    // Capturamos el nombre en la variable "datos"
    // Cuando es GET se utiliza request.params
    // Cuando es POST se utiliza request.body
    var datos = {
        name:request.body.nombre
    }
    console.log(datos)

    // Validación del nombre
    if(datos.name == '' || datos.name == undefined || datos.name == null){
        response.json({state:false,mensaje:'El nombre es un campo oblligatorio'}) // state:false es para indicar que la petición no se cumplió
        //return false;
    }

    if(datos.name.length <=5){
        response.json({state:false,mensaje:'El nombre debe superar 5 caracteres'}) 
        //return false;
    }

    if(datos.name.length >=15){
        response.json({state:false,mensaje:'El nombre no puede superar 15 caracteres'}) 
        return false;
    }
    //EJEMPLO DE ALMACENAMIENTO DE UN USUARIO PARA ALMACENAR EN LA MEMORIA DE EXPRESS
    // Voy a almacenar ese "name" dentro de misdatos
    misdatos.push(datos.name)

   
    // Despues de almacenar el dato responde con un mensaje
    response.json({state:true,mensaje:'usuario guardado',usuario:misdatos})
}


// Funcionalidad "registro"
// Creo un array tipo array de datos para almacenar mis datos de registro
    var user = [];
    usercontroller.registro = function(request,response){
    
    var post = {
        email:request.body.email,
        password:request.body.password
    }

    if(post.email == '' || post.email == undefined || post.email == null){
        response.json({state:false,mensaje:'El campo email es obligatorio'})
        return false;
    }

    if(post.password == '' || post.password == undefined || post.password == null){
        response.json({state:false,mensaje:'El campo password es obligatorio'})
        return false;

    }

    user.push({email:post.email,password:MD5(post.password)})


    response.json({registrados:user})
}

// Funcionalidad "Inicio de sesión-Login"
usercontroller.login = function(request,response){
    
    var post = {
        email:request.body.email,
        password:request.body.password
    }

    if(post.email == '' || post.email == undefined || post.email == null){
        response.json({state:false,mensaje:'El campo email es obligatorio'})
        return false;
    }

    if(post.password == '' || post.password == undefined || post.password == null){
        response.json({state:false,mensaje:'El campo password es obligatorio'})
        return false;    
    }

    //Vamos a hacer una busqueda de un objeto. Voy a recorrer el array "user"
    for (var i = 0; i < user.length; i++) {
        console.log(user[i].email)
        console.log(user[i].password)

        console.log(MD5(post.password))

        // password ingresados por el usuario 'post' son iguales a los alamacenados post
        if (user[i].password == MD5(post.password)) {
            response.json({mensaje:'logueado correctamente'})
            return true;
        }
        else{
            response.json({mensaje:'Usuario inválido'})
            return true;
        }
    }

    

}


// Funcionalidad "activar 
usercontroller.activar = function(request,response){
    //Voy a responder mostrando los datos que hay en "misdatos" y le paso el parametros nombre
    response.json({datos:misdatos,autor:request.params.nombre})
}

// Exportar usercontroller para que pueda ser usado por otros archivos
module.exports.usuario = usercontroller

