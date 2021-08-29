# Clase 08-18-2021  🐷

Durante la clase se tocaron los siguientes temas:

-Uso de grids en Bootstrap:Organizar imagenes y texto con grid
-Simulacion de carrito de compras usando grid
-Ejercicio sin usar bootstrap. Solo media queries
-Ejercicio para mostrar u ocultar elementos dependiendo de la resolucion
-Materialize css
-Creacion formulario login
-Validacion de campos del formulario con Javascript

## NOTAS.
GRID BOOTSTRAP  🐻
-El grid me permite mostrar las cosas de una u otra manera dependiendo de la resolucion de la pantalla
-Desde el punto de la izquierda hasta la derecha siempre hay 12 columnas repartidas de punto a punto

Requisitos:
-Debe existir un container
-Todo el grid de boostrap se base en filas y columnas
-Mobile first: priorizar el diseño como si fuera mobil
-Normalmente uno usa dos secciones:derecha e izquierda
-Extra small y small: son para celulares o tables muy pequeñas
-Medium:tables con alta resolucion y coomputadores
-Large y extralarge: para computadores
-Extra small: si tenemos dos items, es mejor que se ubique un item debajo del otro con col-12 (para mobil)
-Small: si tenemos dos items, es mejor que se ubique un item al lado del otro col-sm-6 y c/u ocupe de a 6 unidades
-Si tenemos 3 items c/u deben ocupa de a 4 unidades
-Si no manejamos bootstrap tocaria acomodar los elementos con media queries, haciendo una configuracion diferente por cada resolución

METODOS USADOS DE BOOTSTRAP  🐥

d-none:(display:none;):Clases que se ocultan dependiendo de la resolucion. Se ocultan el elemento de una clase en todas las resoluciones
d-md-block: para que se muestre un elemento oculto en una resolucion determinada. Ejemplo en la md
d-lg-none: para que se oculte un elemento en una resolucion determinada. Ejemplo en la lg
d- print-none:para ocultar el elemento que esta dentro de una clase al momento de imprimir
Modal: sirve para mostrar una ventana emergente. debe coincidir el data-tarjet del boton con el id del modal

MATERIALIZE CSS
-Es un framework como Bootstrap la diferencia es que las resoluciones que ,aneja bootstrap son mas grandes

SISTEMA REGISTRO

-Creamos un sistema para registro y login en la carpeta aplicacion:
-Un sistema de registro debe contener:registro,login,activar usuario,recuperación de contraseña
-La clase "active" del navar sirve para que la clase quede marcada en negrilla
Truco para centrar con css: se le coloca el width y luego un margin-left: calc(50%-la mitad del width)
-Los campos que son required en un formulario pueden ser validados desde Bootstrap pero tambien con JavaScript
-Ojo: los formularios tienen internamente un evento de recarga, por lo cual cambiamos la etiqueta form y la reemplazamos por div.Porque el formulario esta tratando ir a una pagina destino y como no hay todavia dejamos el div mientras tanto

VALIDACION CAMPOS

-Al momento de validar los datos de email y password en un formulario es mejor dar un mensaje a la vez por lo cual usamos el return false, para hacer enfasis en uno de los errores cuando hacemos el if de validación
-maxlength: lo usamos para validar el numero de caracteres del input
-Regex o expresiones regulares:forma de validar campos

## LINKS

[![N|Solid](https://destatic.blob.core.windows.net/images/bootstrap-logo.png)](https://getbootstrap.com/)

[![N|Solid](https://es.followband.com/images/1/1263/7d0a99c053231cbd21d033de6a50a03e.jpg)](https://materializecss.com/)
