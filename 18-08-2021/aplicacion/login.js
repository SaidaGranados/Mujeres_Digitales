var iniciarsesion = function(){
    var email = document.getElementById('inputEmail').value
    var password = document.getElementById('inputPassword').value
    console.log(email)
    console.log(password)


// Validar email
if(email == null || email == "" || email == undefined) {
    alert('Email es obligatorio')
    return false; // para hacer enfasis en solo uno de los errores
}

// Validar password
if(password == null || password == "" || password == undefined) {
    alert('Password es obligatorio')
    return false; 
}

var emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
//Se muestra un texto a modo de ejemplo, luego va a ser un icono
if (emailRegex.test(email)) {
  alert('Correo valido')
  
} else {
  alert('Correo invalido')
  return false;
}

}

