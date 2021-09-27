var Modeluser = {}
//var misusuarios = [];

//Importamos la libreria mongoose
const mongoose = require('mongoose');

 //Definimos el tipo de schema
const Schema = mongoose.Schema;

// Configuramos el schema - Instancia de Schema
var UserSchema = new Schema({

    firstname:String,
    email:String,
    age:Number //  Si quiero que la edad sea un campo obligatorio,tipo numerico y que no se muestre: age:{type:Number,select:false}

})

// Asignar el schema a la coleccion - Crear un modelo del esquema de Mongo. La coleccion se va a llamar usuarios y esta asociada a un squema
const Mymodel = mongoose.model('usuarios',UserSchema) 


Modeluser.Guardar = function(post,callback){

    // Instancia del modelo Mymodel
    const instance = new Mymodel


    // Configuracion de la instancia
    instance.firstname = post.nombre;
    instance.email = post.email;
    instance.age = post.edad;

    // Despues de que la informacion llega a traves del post(nombre,email,edad) la guardamos en una instancia a traves del metodo "save"
    instance.save((error,userCreate) =>{

        if(error){
            console.log(error)
            return callback(error)
        }
        else{
            console.log(userCreate)
            return callback(userCreate)
        }

    })

}

Modeluser.Modificar = function(post,callback){

    /*misusuarios[post.posicion].nombre = post.nombre;
    misusuarios[post.posicion].email = post.email;
    misusuarios[post.posicion].telefono = post.telefono;*/

    Mymodel.findByIdAndUpdate(post.Id,
    {
        firstname:post.nombre,
        email:post.email,
        age:post.edad
    },(error,userUpdate) => {

        if(error){
            console.log(error)
            return callback(error)
        }
        else{
            console.log(userUpdate)
            return callback({state:true,mensaje:"Usuario actualizado"})
            
        }
    })
    
}

Modeluser.Listar = function(post,callback){

    //  Mymodel.find({criterio de busqueda},{los campos que quiero mostrar})
    //Mymodel.find({},{fistname:1,Id:0})
    Mymodel.find({},{__v:0},(error,userList) => {

        if(error){
            console.log(error)
            return callback(error)
        }
        else{
            console.log(userList)
            return callback(userList)
            
        }

    })
    


    /*Esta funcion es igual a decir
    Mymodel.find({},function(error,Usershow){
    })*/

}

Modeluser.CargarId = function(post,callback){

    //  Mymodel.find({criterio de busqueda},{los campos que quiero mostrar})
    //Mymodel.find({},{fistname:1,Id:0})
    Mymodel.find({_id:post.id},{__v:0},(error,userList) => {

        if(error){
            console.log(error)
            return callback(error)
        }
        else{
            console.log(userList)
            return callback(userList)
            
        }

    })
    
}








Modeluser.Eliminar = function(post,callback){
    /*console.log('eliminando----------')
    console.log(post)
    misusuarios.splice(parseInt(post.posicion),1)
    return callback({state:true,mensaje:"Usuario eliminado"})*/

    Mymodel.findByIdAndDelete(post.Id,(error,userDelete) =>{

        if(error){
            console.log(error)
            return callback(error)
        }
        else{
            console.log(userDelete)
            return callback({state:true,mensaje:"Usuario eliminado"})
            
        }

    })



}


// Exportar userModel para que pueda ser usado por otros archivos
module.exports.usuario = Modeluser


