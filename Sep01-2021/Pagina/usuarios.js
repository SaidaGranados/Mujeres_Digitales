var Cargar = function(){
    
    var data = null; //Arranca como dato null porque no envia datos

    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;
    
    xhr.open("POST", "http://127.0.0.1:3000/Usuarios/Listar"); // Hago un Post hacia la url 3000

    xhr.send(data); // Envio la info

    xhr.addEventListener("readystatechange", function() { //eventListener:evento escuchador
        
        if(this.readyState === 4) {
                        console.log(this.responseText); // Aqui se va a visulalizar la info
            var convertido = JSON.parse(this.responseText) // Convertimos el response de formato texto a json
            console.log(convertido)

            var informacion = "";
            var misdatos = document.getElementById('misdatos'); // No tiene .value porque es un tbody que solo muestra info
            console.log(misdatos)
            for (let i = 0; i < convertido.length; i++) {
                informacion = informacion +
                "<tr>"+
                "<th scope='row' > " +
                "<button type='button' class='btn btn-success' data-toggle='modal' data-target='#modalusuario' onclick=CargarId('"+convertido[i]._id+"') >Editar</button></td>"+ // Con convertido[i] traemos todo el elemento(firstname,email,age)
                "<td>"+ convertido[i].firstname+"</td>"+ 
                "<td>"+ convertido[i].email+"</td>"+
                "<td>"+ convertido[i].age+"</td>"+
                "<td><button type='button' class='btn btn-danger' onclick=Eliminar('"+ convertido[i]._id +"') >Danger</button></td>"+
                "</tr>"
                misdatos.innerHTML = informacion
                console.log(informacion)
                
            }            
        }
    });
    
}

var Guardar = function(){

    // Capturamos la info que esta en los inputs
    var firstname = document.getElementById('firstname').value // Se coloca el  .value porque recibe un input
    var email = document.getElementById('email').value
    var edad = document.getElementById('edad').value

    var data = "nombre="+ firstname +"&email="+ email +"&edad=" + edad +""; // Estos datos los trae el html

    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.open("POST", "http://127.0.0.1:3000/Usuarios/Guardar");
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    xhr.send(data);

    xhr.addEventListener("readystatechange", function() {
        if(this.readyState === 4) {
            console.log(this.responseText);            
            Cargar() // Para que tan pronto ingrese un nuevo usuario me regargue la lista de usuarios
            
        }
    });

}

var Eliminar = function(id){ // Recibe como parametro el id del usuario a eliminar

    swal({
        title: "Seguro desea eliminar el registro?",
        text: "",
        icon: "warning",
        buttons: [
        'No, ',
        'Eliminar'
        ],
        dangerMode: true,
    }).then(function(isConfirm) {
        if (isConfirm) {
        swal({
            title: 'usuarios',
            text: 'Usuario eliminado',
            icon: 'success'
        }).then(function() {
            
            var data = "Id="+ id + ""; // Debo mandarle el id

            var xhr = new XMLHttpRequest();
            xhr.withCredentials = true;
    
            xhr.open("POST", "http://127.0.0.1:3000/Usuarios/Eliminar");
            xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    
            xhr.send(data);
    
            xhr.addEventListener("readystatechange", function() {
                if(this.readyState === 4) {
                    console.log(this.responseText);
                    Cargar() // Para que cuando termine de eliminar vuelva a carga la lista de usuarios 
                }
            });

        });
        }
    });

    

    // Usamos el metodo confirm para que valide si estamos seguros de eliminar el usuario
    
    /*var r = confirm("Seguro que desea eliminar este registro");
    if (r == true) {
    
        var data = "Id="+ id + ""; // Debo mandarle el id

        var xhr = new XMLHttpRequest();
        xhr.withCredentials = true;

        xhr.open("POST", "http://127.0.0.1:3000/Usuarios/Eliminar");
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

        xhr.send(data);

        xhr.addEventListener("readystatechange", function() {
            if(this.readyState === 4) {
                console.log(this.responseText);
                Cargar() // Para que cuando termine de eliminar vuelva a carga la lista de usuarios 
            }
        });

    } else {
        console.log("No se elimino")
    }*/ 

}

var Identificador = ""; 

var CargarId = function(id){
    console.log(id)
    Identificador = id // Cuando se active la funcion CargarId, el identificador va a quedar con el valor del id.
}

var Modificar = function(){

    var firstname = document.getElementById('firstname').value // Se coloca el  .value porque recibe un input
    var email = document.getElementById('email').value
    var edad = document.getElementById('edad').value


    var data = "Id="+ Identificador +"&nombre=" + firstname +"&email="+ email +"&edad="+ edad + ""; // al id lleva el identificador que este cargado en la funcion CargarId

    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.open("POST", "http://127.0.0.1:3000/Usuarios/Modificar");
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    xhr.send(data);

    xhr.addEventListener("readystatechange", function() {
        if(this.readyState === 4) {
            console.log(this.responseText);
            Cargar() // Va a refrescar los datos despues de que se actualicen
        }
    });


}

var Nuevo = function(){ // Funcion para que limpie los campos
    Identificador = "";
    document.getElementById('firstname').value = ""
    document.getElementById('email').value = ""
    document.getElementById('edad').value = ""
}

Cargar(); // Permite que el listado de usuarios se despliegue automaticamente sin dar click a "Cragar"