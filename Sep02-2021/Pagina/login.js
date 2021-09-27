// VALIDACION DE DATOS

// Funcion para mostrar alerts con bootstrap (mensajes positivos,alarma o error)
// Uso contenedormensajes.innerHTML +=: para que me quede un mensaje debajo del otro
var mensajeria = function(mensaje,tipo){
  var contenedormensajes = document.getElementById('divmensajes')
  contenedormensajes.innerHTML += '<div class="alert alert-' + tipo +'" role="alert">' +
  mensaje +
  '</div>'

  // SetTumeout: va a esperar 5 min antes de cerra el alert
    setTimeout(function(){
    $('.alert').alert('close')
    },5000)

}

// Para que cambie el password de tipo password a tipo text 
var ojo = function(){

  if(document.getElementById('inputPassword').type = "text"){
    document.getElementById('inputPassword').type = "password"
  }
  else{
    document.getElementById('inputPassword').type = "text"
  }
  
}

var validarpassword = function(password){
    
    var password = document.getElementById('inputPassword').value

    // Validacion 1 - Password no este vacio    
    if(password == null || password == "" || password == undefined) {
      mensajeria('Password es obligatorio','warning')
      document.getElementById('inputPassword').classList.add("borderojo")
      return false; 
    }

    // Validacion 2 - password que tenga entre 8 y 10 digitos,una  mayuscula y un caracter
    /*if(password.length < 8){
      mensajeria('El password debe superar 8 caracteres','warning')
      return false;
    }

    if(password >= 11){
      mensajeria('El password debe ser menor de 10 caracteres','warning')
      return false;
    }

    var miPalabra = password
    var sihayunaletra = 0;
    for(var index = 0; index < miPalabra.length; index++)
    {
        var letraActual = miPalabra.charAt(index);
        //console.log(letraActual)
        if(letraActual === letraActual.toUpperCase()){
          sihayunaletra = 1
          console.log('Existe una letra mayuscula')
        }

        if(index == miPalabra.length -1){// miPalabra.length -1 significa el ultimo digito del password
            if(sihayunaletra == 0){
              mensajeria('El password debe tener al menos una mayuscula','warning')
              return false;
            }
        }
        else{
           mensajeria('Ok','success')
        }
    }*/
  

  /*Validacion de password 3 con Regex
  Minimo 8 caracteres
  Maximo 15
  Al menos una letra mayúscula
  Al menos una letra minucula
  Al menos un dígito
  No espacios en blanco
  Al menos 1 caracter especial*/

  var passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/;
  if(passwordRegex.test(password) == false){
    mensajeria('Password inseguro','success')
    return false;
  }

}

// 
var iniciarsesion = function(){
    var email = document.getElementById('inputEmail').value
    var password = document.getElementById('inputPassword').value
    console.log(email)
    console.log(password)

    document.getElementById('inputEmail').classList.remove("borderojo")
    document.getElementById('inputPassword').classList.remove("borderojo")

    // Validacion  email 2 
    if(email == null || email == "" || email == undefined) {    
      mensajeria('Email es obligatorio','danger')
      document.getElementById('inputEmail').classList.add("borderojo")
      document.getElementById('inputEmail').focus();
        return false;// para hacer enfasis en solo uno de los errores
    }
  

  // Validacion email 2 - Correo umple condiciones minimas que tiene un correo electronico
  var emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
  //Se muestra un texto a modo de ejemplo, luego va a ser un icono
  if (emailRegex.test(email)) {
    alert('Correo valido')
    
  } else {
    mensajeria('Correo invalido','success')
    return false;
  }

  validarpassword()


}

