### Clase 08-12-2021  😈

Durante la clase se tocaron los siguientes temas:

- Metodos arrays : pop,reverse,join,keys, length,splice,concat,indexOf e include.
- Almacenar de informacion en el navegador con local Storage
- Almacenar informacion dentro de un array de datos dentro de local storage


# NOTAS 

METODOS ARRAYS  😥
- pop(): Elimina el ultimo elemento del array y cambia el length
- reverse(): para cambiar el orden de los registros
- join(): convierte un array en un string o cadena de texto separados por caracteres
- keys(): para extraer las claves de registro osea las posiciones
- length: para mostrar la cantidad de elementos del array
- splice():para quitar items y yo puedo elegir cual voy a quitar.Recibe dos patrametros:     (posicion,no. de items a eliminar)
- concat():concatena dos o mas arrays
- indexof():para saber en que posicion esta un elemento.
- include():para realizar busqueda dentro del array. Este retorna si existe o no existe(true o false)

LOCAL STORAGE  😭

- Local storage: zona en la que se almacena información dentro del navegador. Key- Value
- Ubicacion del local storage: Application->Local Storage->file://
- Metodo setItem: Para gravar datos en el localStorage: localStorage.setItem("key", "value")
- Metodo getItem: Para extraer la informacion del local storage. var lastname = localStorage.getItem("key");
- Para borrar la informacion: ctril+shift+supr -> borrar cookies y otris datos de sitios
- Metodo toString(): retorna un string con los valores separados por comas
- Metodo JSON: stringify (): para covertir un objeto JavaScript {},{},{} a formato JSON asi: const myJSON = JSON.stringify(obj);
- Metodo JSON: JSON.parse() para convertir de un formato JSON [{},{},{}] lo que esta en local storage a un objeto js {},{},{}

- Ejemplo:
- Objeto JS: const obj = {name: "John", age: 30, city: "New York"};
- con formato JSON: [{},{},{}]: Asi quedaria: {"name":"John", "age":30, "city":"New York"}
