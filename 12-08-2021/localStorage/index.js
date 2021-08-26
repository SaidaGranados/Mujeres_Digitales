console.log('hola mundo')


/********************LOCAL STORAGE********************/

// Metodo setItem: Para gravar datos en el localStorage: localStorage.setItem("key", "value");
//localStorage.setItem('nombre',"castiblanco")
// Ejercicio 1: programa donde se ingrese info y se almacene en el local storage
/*var guardar = function(){
    var nombre = document.getElementById('nombre').value
    var apellido = document.getElementById('apellido').value
    localStorage.setItem('nombre',nombre)
    localStorage.setItem('apellido',apellido)
}*/

// Metodo getItem: Para extraer la informacion del local storage. var lastname = localStorage.getItem("key");
/*var cargar = function(){
    document.getElementById('nombre').value = localStorage.getItem('nombre')
    document.getElementById('apellido').value = localStorage.getItem('apellido')

}*/

// Metodo removeItem: 
/*var limpiar = function(){
    document.getElementById('nombre').value = localStorage.removeItem('nombre')
    
}*/

// Ejercicio de alamacenar  informacion usando arrays . Convertir de un tipo array a String
// Utilizamos JSON:stringify() para convertir un objeto js {},{},{} a un formato JSON [{},{},{}]
// JSON.stringify es de JSON a cadena de texto
var misdatos = [];
var guardar = function(){
    var nombre = document.getElementById('nombre').value
    var apellido = document.getElementById('apellido').value

    misdatos.push({nombre:nombre, apellido:apellido})
    var x = JSON.stringify(misdatos)
    console.log(x)
    localStorage.setItem('datos',x)
    
}


var cargar = function(){
    console.log('ssssssssssss')
    //document.getElementById('nombre').value = localStorage.getItem('nombre')
    //document.getElementById('apellido').value = localStorage.getItem('apellido')
}


//Para validar si datos existe
var existe = localStorage.getItem('datos')
console.log(existe)
if(existe != null){
    console.log('si entro')
    misdatos = JSON.parse(localStorage.getItem('datos').toString())
}


// Metodo JSON: JSON.parse() para convertir de un formato JSON [{},{},{}] lo que esta en local storage a un objeto js {},{},{}
// JSON.parse convierte de cadena de texto a JSON
//misdatos = JSON.parse(localStorage.getItem('datos'.toString()))






