// Configuracion body-parser
var bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true})) // Para decodificar
var nodemailer = require('nodemailer')


// Para acceder a UserController.js desde la ruta. Descargamos esto en Usuarios para hacer uso de sus metodos y funciones. Ej. UserController.guardar
var Usuarios = require(appRoot + '/api/controllers/UserController.js').usuario



/******DEFINO LAS RUTAS PRINCIPALES*********/
app.post('/Usuarios/Guardar',function(request,response){
    Usuarios.Guardar(request,response)
})

app.post('/Usuarios/Modificar',function(request,response){
    Usuarios.Modificar(request,response)
})

app.post('/Usuarios/Eliminar',function(request,response){
    Usuarios.Eliminar(request,response)
})

app.post('/Usuarios/Listar',function(request,response){
    Usuarios.Listar(request,response)
})

app.post('/enviarcorreo',function(request,response){

    // creamos una variable que utiliza nodemailer para crear un sistema de transporte de información que le pasa unos parametros
    var transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        requireTLS: true,
        auth: {
          user: config.correo, // cuenta cualquiera
          pass: config.clavecorreo // contraseña generada
        }
    });
    
      // Configuración del correo y contraseña
    var mailOptions = {
        from: config.correo, // email de quien envía el correo - remitente
        to: config.correodestino, // email de quien recibe el correo - receptor
        subject: 'mi asunto', // Lo que se va a enviar - "post.asunto"        
        /*html: "<b style='color:blue'>Hola mi nombre es:  mi telefono es:  </b>", // Aquí podemos escribir cualquier contenido html"*/
        /*Si no quiero escribir html puedo colocar text asi: text: "hola este es el mensaje"*/
        text: "Hola este es el mensaje"
    };


    // Utilizo el "transporter" llamando a la funcion "sendMail" y le paso como parametro "mailOptions" y esto me va a retornar o "error" o "info"
    transporter.sendMail(mailOptions, (error, info) => {
        if(error){
            console.log(error)
        }
        response.json({mensaje:'Mensaje enviado'})

    })

    
})
































//Ejemplo 1 peticion GET para guardar info
/*app.get('/Usuarios/Guardar/:nombre',function(request,response){
    Usuarios.guardar(request,response)
})*/


// Ejemplo 2 petición GET activar- petición GET desde mi HTML hacia node
/*app.get('/Usuarios/Activar/:nombre',function(request,response){
    console.log('Hola mundo')
    Usuarios.activar(request,response)
})

//Validar info mediante el metodo POST para guardar info
app.post('/mipost',function(request,response){
    console.log(request.body)
    Usuarios.guardar(request,response)
})

// Petición POST - Registro de usuario
app.post('/Usuario/Registro',function(request,response){
    
    Usuarios.registro(request,response)
})

// Petición POST - Iniciar sesión o login
app.post('/Usuario/Login',function(request,response){
    
    Usuarios.login(request,response)
})*/