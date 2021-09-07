// Configuración de UserController

// Creo un array de objetos usercontroller
var usercontroller = {}

// Creo un array
var misdatos = [];

// Creamos la funcionalidad "guardar"
usercontroller.guardar = function(request,response){

    // Capturamos el nombre en la variable "datos"
    // Cuando es GET se utiliza request.params
    // Cuando es POST se utiliza request.body
    var datos = {
        name:request.params.nombre
    }
    console.log(datos)

    // Validación del nombre
    if(datos.name == '' || datos.name == undefined || datos.name == null){
        response.json({state:false,mensaje:'El nombre es un campo oblligatorio'}) // state:false es para indicar que la petición no se cumplió
        return false;
    }

    if(datos.name.length <=5){
        response.json({state:false,mensaje:'El nombre debe superar 5 caracteres'}) 
        return false;
    }

    if(datos.name.length >=15){
        response.json({state:false,mensaje:'El nombre no puede superar 15 caracteres'}) 
        return false;
    }
    //EJEMPLO DE ALMACENAMIENTO DE UN USUARIO PARA ALMACENAR EN LA MEMORIA DE EXPRESS
    // Voy a almacenar ese "name" dentro de misdatos
    var datos = misdatos.push(datos.name)



    response.json({state:true,mensaje:'usuario guardado',usuario:misdatos})
}


// Exportar usercontroller para que pueda ser usado por otros archivos
module.exports.usuario = usercontroller