# Clase 08-19-2021 ✌️

Durante la clase se tocaron los siguientes temas:

- Creacion del login
- Uso de alerts con bootstrap
- Validación de email y contraseña(con condicionales y con regex)
- Uso de focus y classList
- Validación de password a medida que voy escribiendo (onchange()-onkey())
- Cambiar el password de tipo password a tipo text

## NOTAS  👸

- Ctrl+a: para seleccionar todo
- Cuando se trabaja sin angular y se desea agregar o modificar items del navbar toca hacerlo una por una. Con angular se trabaja con componentes de los cuales heredan las otrras paginas
- Inicio-home: es la pagina index.html que tenemos definida
- Alert en bootstrap: verde todo ok, rojo error grave,sugerencia azul
- Metodo de bootstrap: $('.alert').alert('close'): Para eliminar mensajes. Busca una clase que se llama alert que llama al metodo close para que cierre todos los alerts.Se llama la función, muestra el mensaje y cierra el mensaje.
- SetTimeout: da un tiempo de espera para que se ejecute algo.
- Los metodos de bootstrap estan hechos en jquery que es un Javascript mas avanzado
- classList():retorna el nombre de una clase. Esta propiedad es read-only pero se puede modificar 
  usando los metodos add() o remove.
- focus():metodo usado para darle enfoque a un elemento
- onchange(): Me muestra los mensajes cuando se escribe y despues se presiona enter
- onkey(): Existen varias opciones: 
- onkeydown(): si la tecla queda presionada hacia abajo
- onkeyup(): cuando la letra se presiona hacia abajo y luego se devuelve hacia arriba
- x.type = "text": para que me cambie el password de tipo password a tipo text
- onmouseup - onmousedown: sirve para que me pase de password a text con solo pasar el mouse por en 
- onmouseup/onmousedown: para que me cambie texto a password y viceversa pasando el mose
- d-none:(display:none;):Clases que se ocultan dependiendo de la resolucion. Se ocultan el elemento de una clase en todas las resoluciones
- d-md-block: para que se muestre un elemento oculto en una resolucion determinada. Ejemplo en la md
- d-lg-none: para que se oculte un elemento en una resolucion determinada. Ejemplo en la lg
- d- print-none:para ocultar el elemento que esta dentro de una clase al momento de imprimir
- Modal: sirve para mostrar una ventana emergente. debe coincidir el data-tarjet del boton con el id del modal

MATERIALIZE CSS
- Es un framework como Bootstrap la diferencia es que las resoluciones que ,aneja bootstrap son mas grandes

SISTEMA REGISTRO

- Creamos un sistema para registro y login en la carpeta aplicacion:
- Un sistema de registro debe contener:registro,login,activar usuario,recuperación de contraseña
- La clase "active" del navar sirve para que la clase quede marcada en negrilla
  Truco para centrar con css: se le coloca el width y luego un margin-left: calc(50%-la mitad del width)
- Los campos que son required en un formulario pueden ser validados desde Bootstrap pero tambien con JavaScript
- Ojo: los formularios tienen internamente un evento de recarga, por lo cual cambiamos la etiqueta form y la reemplazamos por div.Porque el formulario esta tratando ir a una pagina destino y como no hay todavia dejamos el div mientras tanto

VALIDACION CAMPOS

- Al momento de validar los datos de email y password en un formulario es mejor dar un mensaje a la vez por lo cual usamos el return false, para hacer enfasis en uno de los errores cuando hacemos el if de validación
- maxlength: lo usamos para validar el numero de caracteres del input
- Regex o expresiones regulares:forma de validar campos

## LINKS  🦋

link validacion password regex:
https://es.stackoverflow.com/questions/4300/expresiones-regulares-para-contrase%C3%B1a-en-base-a-una-politica