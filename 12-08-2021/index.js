//********ARRAYS***********/

var mivariablearray =["goku","gohan","roshi","krilin"]
var tmp = ['john','juan']

// Metodo POP: Elimina el ultimo elemento del array
/*mivariablearray.pop()
console.log(mivariablearray)*/

// Metodo REVERSE: para cambiar el orden de los registros
//console.log(mivariablearray.reverse())

// JOIN: convierte un array en un string.
/*var temporal = mivariablearray.join('/')
console.log(temporal)*/

//KEYS: para extraer las claves de registro
/*for(key of mivariablearray.keys()){
    console.log(key)
}*/

//LENGTH: para mostrar la cantidad de elementos del array
//console.log(mivariablearray.length);

//SPLICE: para quitar elementos del array (posición,no.de elementos a eliminar)
/*mivariablearray.splice(2,2)
console.log(mivariablearray)*/

//CONCAT: concatena dos o mas arrays
/*var x = mivariablearray.concat(tmp)
console.log(x)*/

// INDEXOF: para saber en que posicion esta un elemento
/*x = mivariablearray.indexOf('krilin')
mivariablearray[x] = 'pedro'
console.log(mivariablearray)*/


// Ejercicio - Actualizar items
/*for (key of mivariablearray.keys()){
    console.log(key)
    mivariablearray[key] = key+10
}
console.log(mivariablearray)*/

// INCLUDES: para realizar busqueda dentro del array.Este retorna si existe o no existe(true o false)
/*var prueba = ["goku","roshi"]
console.log(prueba.includes("goku"))*/

// Ejercicio: programa que me cambie el nombre del elemento al darle click
/*var buscarycambiar = function(){
    var criteriodebusqueda = document.getElementById('criterio').value
    var posicion = mivariablearray.indexOf(criteriodebusqueda)
    if(posicion >= 0){
        mivariablearray[posicion] = "Borrado"
        console.log(mivariablearray)
    }else{
        alert('No se encuentra ese dato')
    }
}*/

// Ejercicio: programa que borre un elemento al darle click
/*var buscarycambiar = function(){
    var criteriodebusqueda = document.getElementById('criterio').value
    var posicion = mivariablearray.indexOf(criteriodebusqueda)
    if(posicion >= 0){
        mivariablearray.splice(posicion,1)
        console.log(mivariablearray)
    }else{
        alert('No se encuentra ese dato')
    }
}*/


