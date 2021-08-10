# Estructura html y estilos CSS - Ejercicio 3   🌈

### Introducción
Se realizan ejemplos con etiquetas input,table,listas, select,text area, button, a, ink y diseños CSS
### DETALLE ETIQUETAS UTILIZADAS 🐾

**input**
Cajitas de texto para escribir. Estos tiene el atributo type. Esta etiqueta no tiene cierre.  Se utilizaron los siguiente atributos de tipo type:
- number: solo permite el ingreso de numeros
- text: campo alfanumerico
- password: encripta los datos ingresados
- date: para ingresar una fecha
- file: campo para subir archivos

placeholder: se usa para colocar una marca de agua en el elemento.Para indicar que es lo que el usuario debe ingresar en el input o tambien se puede usar para la etiqueta textarea

**table**
Se usa para crear tablas compuestas por filas (tr) y dentro de dichas filas hay columnas (td) y las columnas (th)

**listas**
Para mostrar item por item

**select**
Nos despliega un conjunto de opciones para seleccionar una.
- option: va dentro del select y sirve para colocar las opciones que el usario puede elegir. Debe usarse el atribute value
- label: para colocar una descripción. Si quiero relacionar un label con un select debo usar "for" que debe ser del mismo nombre del name del select.

**textarea**
Se utiliza para escribir grandes cantidades de contenido mientras que los input son para escribir datos muy cortos. El area de texto se puede modificar con row y col o con CSS usando width y height
- max length: es un atributo de limite y es usado en etiquetas donde se digita texto como textarea o como input

**button**
Existen tres formas de crear los botones:
- Con input de tipo button : es necesario utilizar el atributo value.Trae un estilo predeterminado pero se puede modificar
- Con div: se debe utilizar CSS para el estilo.
- Con la etiqueta button

**link**
Para unificar el código CSS y evitar duplicar el codigo fuente y asi tener acceso desde dos puntos diferentes. Esto se hace creado un vinculo entre cada unas de la páginas. Esta etiqueta va con el atributo rel="stylesheet" y el href. Link va dentro de la etiqueta head.

**a**
Se usa para navegar por diferentes páginas.Viene con el atributo href.

### ESTILOS UTILIZADOS  🐞
- transition : para que muestre un cambio suave al momento de usar el btn-hover que genera un cambio de color en el boton al pasar el cursor ademas de un cambio de tamaño del boton. Para el caso de nuestro boton, esto indica que  se demora 0.5 segundos en hacer el cambio de color.
- opacity: hace que aparezcan y desaparezcan los objetos.En este caso aparecen y desaparecen los botones o se vuelven mas transparentes dependiendo de la intensidad.
- slidein: Se hace uso de anamiación de tipo slidein con CSS para que un parrafo se mueva de derecha a izquierda.
- background-size: para disminuir el tamaño
- background -repeat: norepeat: para que no se repita la 

### Notas
-  Acostubremonos a que cuando creemos una etiqueta o un elemento le demos un nombre único id. Siempre que hay interacción con el usuario se debe colocar un id.
-  txt es el prefijo para los input. Ej.id="txt_nombre"
- Actualmente ya no se usa la etiqueta table para hacer tablas, en lugar se usa div
- Es bueno definir limitantes en el espacio cuando trabajamos con textarea.
- Normalmente se usan maximo 4 colores en una página.
- Las imagenes png son imagenes con transparencia. Si le doy "abrir en una ventana nueva" me va a mostrar una imagen con un fondo negro.
- El nav se utiliza para que motores de renterizado sepan el tipo de info que hay. SEO(Tecnología que tiene Google para recocer los contenidos en internet).
- Podemos colocar una imagenes que contengan un link
- Podemos colocar una imagen de fondo poniendo la URL en un style propio.background: url('')
