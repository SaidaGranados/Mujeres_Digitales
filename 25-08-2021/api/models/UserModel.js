var Modeluser = {}
var misusuarios = [];


/* 
miusuarios = [{"nombre": "saida","email":"said@gmail.com","telefono":"1223344"},{"nombre": "sara","email":"said@gmail.com","telefono":"1223344"}]    
*/

Modeluser.Guardar = function(post,callback){

    misusuarios.push({
        nombre:post.nombre,
        email:post.email,
        telefono:post.telefono
    })

    return callback({state:true,mensaje:"ok"})
}

Modeluser.Modificar = function(post,callback){

    misusuarios[post.posicion].nombre = post.nombre;
    misusuarios[post.posicion].email = post.email;
    misusuarios[post.posicion].telefono = post.telefono;

    return callback({state:true,mensaje:"Usuario actualizado"})
}

Modeluser.Listar = function(post,callback){
    return callback({datos:misusuarios})
}

Modeluser.Eliminar = function(post,callback){
    console.log('eliminando----------')
    console.log(post)
    misusuarios.splice(parseInt(post.posicion),1)
    return callback({state:true,mensaje:"Usuario eliminado"})

}


// Exportar userModel para que pueda ser usado por otros archivos
module.exports.usuario = Modeluser


