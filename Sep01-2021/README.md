# Clase 09-01-2021  👻

Durante la clase se trataron los siguientes puntos:
- Error No 'Access-Control-Allow-Origin' - Node / Apache Port Issue
- CRUD vinculando el HTML
- Creacion de peticiones para hacer uso de las apis


# NOTAS   🦇
¿QUE HACER SI ME SALE EL ERROR No 'Access-Control-Allow-Origin'?
Esto ocurre por temas de seguridad debido a los cors-
- Los cors son algo que tienen los navegadores para contrarrestar posibles ataques de un origen desconocido hacia lun dominio conocido
- whitelist significa que acepta cualquier origen

Para solucionarlo debo ir a app.js y en Mongoosee  pegar este codigo:

app.all('*',function(req, res, next){
    	var whitelist = req.headers.origin;
    	res.header('Access-Control-Allow-Origin',whitelist);	
    	res.header('Access-Control-Allow-Methonds','GET,PUT,POST,DELETE,OPTIONS,HEAD');		
    	res.header('Access-Control-Allow-Headers', "Access-Control-Allow-Headers,Origin,Accept,X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers")
    	res.header('Access-Control-Allow-Credentials','true');
next();
});

CRUD:

CREAR LA PETICION PARA LISTAR USUARIOS
- Creamos el archivo usuarios.html que nos va a mostrar la info de los usuarios el cual quedo vinculado con el index.html
- Se creo el archivo usuarios.js para vincular javascript y un boton con la función "Cargar" para que me liste los usuarios
- Voy a postman y busco el api "listar usuarios",voy a code y extraigo un codigo que me sirva. Escogemos "JavaScript - XHR" que es Javascript nativo.
- Cuando se hace una petición a un servidor debe definirse las cabeceras (headers) que es la manera como viaja la info
- Hago un Post hacia la url 3000: xhr.open("POST", "http://127.0.0.1:3000/Usuarios/Listar");
- Aqui se va a visulalizar la info: console.log(this.responseText);
- La información va a aparecer de tipo String o texto y tengo que pasarla a Json por lo cual la convertirmos con: JSON.parse(text);
- Para replicar la informacion en mi html debo crear un un id "misdatos" e inyectar codigo Html desde javascript.
- Se hace un for para recorrer el array "convertido" y se inyecta el html campo por campo

XMLHttpRequest readyState:
1:Opened
2:Headers received
3:Loading
4:Done

CREAR BOTON QUE HABILITE UNA VENTANA MODAL PARA INGRESAR UN NUEVO USUARIO:
- Una ventana aparece cuando uno le da click
- Voy a Bootstrap->Modals: Copio y pego el de mi interes
- Llamo a la ventana modal con un data-toggle y a un data-target. El datatarget="#exampleModal" esta llamando al id="modalusuario" por lo cual deben tener el mismo nombre
- Agrego todos los campos(nombre,email,edad)
- Doy funcionalidad al boton guardar de la ventana modal con un onclick
- Creo la funcion guardar en usuarios,js
- Vamos a postman y tomamos el codigo de "code".
- Le colocamos los identificadores a cada uno de los inputs que hay en el formulario
- Capturamos los datos que estan en los inputs (firstname,email,edad) con document.element.getbyId
- OJO:los que tienen .value son todos los objetos donde el usuario puede escribir como los inputs o los textarea
- Creamos una condición para que cada vez que se cargue un usuario, automaticamente me recargue los usuarios de la lista: ponemos la funcion Cargar() dentro de de la condion: if(this.readyState === 4
- Adicionamos la funcionalidad de bootstrap data-dismiss="modal" para que tan pronto le de click al boton guardar se cierre la ventana

ELIMINAR USUARIOS:
- La funcion eliminar debe recibir como parametro el id del usuario a eliminar por tanto en la variable "data" debo almacenar el "id" que llego como parametro
- Voy a postman y busco el api "Eliminar usuarios",voy a code y extraigo un codigo que me sirva. Escogemos "JavaScript - XHR" que es Javascript nativo
- Agrego el boton "Eliminar" en la tabla del html y en la funcion de Cargar
- Para que cuando termine de eliminar vuelva a carga la lista de usuarios 
- Creamos el metodo confirm que valide si estamos seguros de eliminar el usuario, la estructura la podemos tomar de SchoolW3(Adjunto link)
- Podemos confirmar si la persona esta segura de eliminar un usuario tambien con un sweet alert confirm la estructura la podemos tomar de un doc de Stackoverflow(Adjunto link). No olvidar importar primero la libreria que debe ir en el archivo usuarios.html (Adjunto link sweetalert)

MODIFICAR USUARIOS:
- Creamos la funcion CrearId() para que con la presion del boton me traiga los datos de ese Id
- Creamos la funcion CargarId()
- Voy a postman y busco el api "Modificar usuarios",voy a code y extraigo un codigo que me sirva. Escogemos "JavaScript - XHR" que es Javascript nativo y lo copiamos en la funcion Modificar y vamos a agregar el identificador correspondiente que es el que se esta cargando en la funcion CargarId.
- Creamos una variable identificador entonces cuando se active la funcion CargarId va a quedar con el valor del id por tanto cuando se envien los datos al "data" de la funcion Modificar se va a llevar el identificador que este cargado.
- Ahora coloco data-toggle="modal" data-target="#modalusuario" en el boton de editar de la funcion Cargar() para que me cree un ventana modal
- Creo la funcion Nuevo() para que me limpie los campos del formulari donde todos los campos debo declararlos en cero


## LINKS  🍍
- Link de w3school que muestra el uso del metodo confirm para que valide si vamos a eliminar el usuario: 
(https://www.w3schools.com/jsref/met_win_confirm.asp)

- Link de  sweet alert que tambien se puede usar para validar si el usuario quiere eliminar el registro en la ventana modal:(https://www.w3schools.com/jsref/met_win_confirm.asp)
- Link de stackoverflow con el detalle de como hacer uso de sweety alert para la validacion de eliminar registro:
(https://stackoverflow.com/questions/31136889/how-to-use-confirm-using-sweet-alert/57482894)