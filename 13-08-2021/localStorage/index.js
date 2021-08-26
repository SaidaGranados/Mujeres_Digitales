console.log('hola mundo')


/********************LOCAL STORAGE********************/

// Ejercicio de alamacenar  informacion usando arrays . Convertir de un tipo array a String
// Utilizamos JSON:stringify() para convertir un objeto js {},{},{} a un formato JSON [{},{},{}]
// JSON.stringify es de JSON a cadena de texto
var misdatos = [];
localStorage.setItem('prueba','Taya')

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
    swal({
        title: "Are you sure?",
        text: "Once deleted, you will not be able to recover this imaginary file!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
          swal("Poof! Your imaginary file has been deleted!", {
            icon: "success",
          });
        } else {
          swal("Your imaginary file is safe!");
        }
      });
      
    //document.getElementById('nombre').value = localStorage.getItem('nombre')
    //document.getElementById('apellido').value = localStorage.getItem('apellido')
}

//Para validar si datos existe
var existe = localStorage.getItem('datos')
console.log(existe)
if(existe != null){
    console.log('si entro')
    misdatos = JSON.parse(localStorage.getItem('datos').toString())}


// Metodo JSON: JSON.parse() para convertir de un formato JSON [{},{},{}] lo que esta en local storage a un objeto js {},{},{}
// JSON.parse convierte de cadena de texto a JSON
//misdatos = JSON.parse(localStorage.getItem('datos'.toString()))

// Metodo removeItem() para eliminar item por item - localStorage.removeItem("key");
/*var eliminar = function(){
    console.log('Eliminando datos')
    localStorage.removeItem('datos')
}*/

// Metodo clear() para eliminar todos los elementos in one shot
/*var  eliminar = function(){
    localStorage.clear()
}*/







