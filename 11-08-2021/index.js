var valor1 = 0;
var valor2 = 0;
var nombre = 'John'
var apellido = 'Castiblanco'

var multiplica = function(){
    console.log(valor1 * valor2)            
}

var suma = function(){
    console.log(valor1 + valor2)            
}

var resta = function(){
    console.log(valor1 - valor2)            
}

var dividir = function(){
    console.log(valor1 / valor2)            
}

var nombrecompleto = function(){        
    console.log(nombre + ' ' + apellido) //Coloco comillas ' ' para separar las dos variable nombre y apellido//
}

var obtener = function(){
    console.log('Obteniendo datos')
    //Buscame en este documento y traigame el elemento por el id(nombre del id).value - Value sirve para obtener el valor de la caja de texto
    // Los valores quedaron depositados en las variables a y b
    var a = document.getElementById('prueba1').value
    var b = document.getElementById('prueba2').value
    // parseInt es para convertir de String a Int
    valor1 = parseInt(a);
    valor2 = parseInt(b);
}


//********ARRAYS***********/

// Declaración de un array
//var listadedatos = [];

// Ejercicio 1 -Instanciar un Array
//var listadedatos = ['john','juan','pedro']

// Para que me muestre un dato en especifico
//console.log(listadedatos[0])

/*++++AGRUPAR INFORMACION CON DATOS QUEMADOS++++++*/

// Ejercicio 2 - Para agrupar la información con 'clave' 'valor'
/*var registro20 = {nombre:'john', apellidos:'castiblanco', edad:35}
var listadedatos =[registro20,registro20,registro20]
console.log(listadedatos)*/

// Ejercicio 3 - Agrupar listas dentro de listas
/*var registro20 = {nombre:'john',apellidos:'castiblanco',edad:35}
var registro21 = {nombre:'juan',apellidos:'castiblanco',edad:3}
var registro22 = {nombre:'pedro',apellidos:'castiblanco',edad:13}
var listadedatos = [registro20,registro21,registro22]
console.log(listadedatos)*/

// Ejercicio 4 - Agrupando la info de forma mas ordenada 'Registro-Columna'
/*var listadedatos = [{nombre:'john',apellidos:'castiblanco',edad:35},{nombre:'juan',apellidos:'castiblanco',edad:3}
,{nombre:'pedro',apellidos:'castiblanco',edad:13}]
console.log(listadedatos)*/
// Para acceder a un registro en especifico
//console.log(listadedatos[0])
// Para acceder a un dato es especifico(nombre,apellido o edad) de un registro
//console.log(listadedatos[0].edad)

/***********METODOS ARRAYS**************/

// PUSH: Para agregar datos
/*var listadedatos = [];
listadedatos.push('john')
listadedatos.push('juan')
listadedatos.push('pedro')
console.log(listadedatos[2])*/

//Agregar info capturandola del html con una clase pruebax que va a ser un array.Debo indicarle el indice del array seleccionado
/*var listadedatos = [];
var agregarinformacion = function(){
    var nombre = document.getElementsByClassName('pruebax')[0].value// para escoger el segundo indice de la coleccion
    console.log(nombre)
    listadedatos.push(nombre)
    console.log(listadedatos)
}*/

// Agregar info capturandola del html atraves del 'name' Este a ser un array.Debo indicar el indice seleccionado
/*var listadedatos = [];
var agregarinformacion = function(){
    var nombre = document.getElementsByName('xx')[1].value
    console.log(nombre)
    listadedatos.push(nombre)
    console.log(listadedatos)
}*/

// Array con funciones para agregar info capturandola del html con el id
/*var listadedatos = []
var agregarinformacion = function(){
    var nombre = document.getElementById('minombre').value
    console.log(nombre)
    listadedatos.push(nombre)
    console.log(listadedatos)
}*/
// Llenar informacion desde JS en vez de HTML. Crear un fragmento de codigo en forma dinamica
/* var listadedatos = []
var contenedor = document.getElementById('contenedordedatos')
contenedor.innerHTML = "<h1 onclick='agregarinformacion()' > Hola mundo </h1>"
listadedatos.push(contenedor)
console.log(listadedatos)*/
    
// Llenar datos concatenando info
var contenedor = document.getElementById('contenedordedatos')
var listadedatos = []
var agregarinformacion = function(){

    var nombre = document.getElementById('minombre').value
    listadedatos.push(nombre)
    
    // Declaro el contenedor vacio primero para que no se repitan los datos
    contenedor.innerHTML = ''
    for(var i=0; i<listadedatos.length;i++){

        if(listadedatos[i] != 'john'){
            contenedor.innerHTML = contenedor.innerHTML + '' + listadedatos[i] + '<br>'
        }
        else{
            contenedor.innerHTML = contenedor.innerHTML + 'Profesor <br>'
        }

        console.log(listadedatos[i])
    }
}

// Ejercicio tabla de multiplicar inyectando informacion
/*var tabla = document.getElementById('tablademultiplicar')
for(var i=0; i<100; i++){
    tabla.innerHTML = tabla.innerHTML + "5 X " + i + " = " + (5*i) + " <br>"
}*/

// Ejercicio inyeccion de codigo con array
var contenedor = document.getElementById('tablademultiplicar')
var datox = []
datox.push('jhon')
datox.push('juan')
datox.push('pedro')

for(var i=0; datox.length; i++){
    tabla.innerHTML = tabla.innerHTML +datox[i] + " <br>"
}

var agregar = function(){

}

var cargar = function(){
    
}





// Formas de crear funciones
/*var agregarinformacion = funcion(){

}
function agregarinformacion(){

}

var agregarinformacion = () => {

}*/



