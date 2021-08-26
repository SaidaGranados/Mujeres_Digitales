/**********EJERCICIO ALMACENAMIENTO DE DATOS**********/

/*Almacenar los siguientes datos en el localStorage:Nombre de mi mascota, edad,dueño.
Debe tener un boton y un fondo verde*/

datosMascota = []

var guardar = function(){
    console.log("verificar")
    var nombre = document.getElementById('nombre').value
    var edad = document.getElementById('edad').value
    var owner = document.getElementById('owner').value

    datosMascota.push({nombre:nombre,edad:edad,owner:owner})

    var a = JSON.stringify(datosMascota)
    console.log(a)
    localStorage.setItem('pets',a)
}

var cargar = function(){
    console.log('check out')
    document.getElementById('nombre').value = localStorage.getItem('nombre')
    document.getElementById('edad').value = localStorage.getItem('edad')
    document.getElementById('edad').value = localStorage.getItem('owner')
    
}

var existe = localStorage.getItem('pets')
console.log(existe)
if(existe != null){
    console.log('si entró')
    misdatos = JSON.parse(localStorage.getItem('pets'))
}

var eliminar = function(){
    console.log('eliminar chequeo')
    localStorage.removeItem('pets')
}

