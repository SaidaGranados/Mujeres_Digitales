# Clase 05-10-2021   🎱

IMPORTANTE!!
- Con la intención de  darle continuidad a todo el curso se aborda el tema de Angular sin crear otro repositorio por lo cual se suben unicamente los archivos con los que trabajaron (para el caso de esta clase el archivo src)  mas no todas las carpetas que vienen con el aplicativo.

Durante la clase se abordaron los siguientes temas:
- Continuacion pipes :formatos moneda y fecha
- Banana inbox
- Creación de modelos (ngModel)
- Cómo almacenar información
- Listar los datos con *ngFor
- Como preparar los datos del frontend
- Condiciones para mostrar u ocultar elementos *ngIf

 ## Notas  🛩

PIPES:
- FORMATOS MONEDA
- Para fijar el numero de decimales el primero 5 de este ejemplo enseña la cantidad de decimales asi: {{valor * 10 | currency:'USD':true:'1.5-5'}} para un resultado de $250,000.00000
- Para colocar el tipo de moneda aqui esta el ejemplo de un valor en euros: {{valor | currency:'EUR'}}

FORMATOS FECHA
- Para que me aparezca solo el año: {{fecha |date:'yyyy'}}
- Para que me salga solo el mes: {{fecha |date:'MM'}}
- Para que me salga solo el dia: {{fecha |date:'dd'}}
- Para que me salga el dia,mes y año: {{fecha |date:'dd-MM-yyyy'}}
- Para que me salga el año,mes y dia: {{fecha |date:'MM-dd-yyyy'}}
- Para que me salga el año,mes, dia y hora : {{fecha |date:'MM-dd-yyyy HH:mm:ss'}}
- Si la hora HH esta en mayuscula va a quedar en formato militar sino tocaria colocar hh asi:{{fecha |date:'MM-dd-yyyy hh:mm:ss'}}

BANANA IN BOX:
- two way binding o binding bidireccional: significa que el flujo de info va tanto del ts al html como del html a el ts
- Property binding:[] significa del typescript al html
- Event binding:() significa del html al typescript
- two way binding [()]: va del typescript al html y del html al typescript
- Sirve para actualizar la vista(html) y el modelo(typescript) al mismo tiempo.

MODELOS: (ngModel)
Cómo pasar informacion desde el html hacia tyscript:
- Colocamos un input
- Ya no utilizamos los id para llevar la info del html al js.Unicamente usamos los id para css. Capturamos los datos del lado del ts atraves de la nomenclatura "banana en caja" asi [()]. 
- Para usar el banana in box creo la variable y le asigno el nombre del modelo. ej: <input type="text" [(ngModel)="nombreusuario"]>. Donde "nombreusuario" viene a hacer el papel del "id" que soliamos usar para conectar el html con js
- Ademas debo descargar esta libreria por lo cual me voy al applmodule.ts y coloco: import { FormsModule } from '@angular/forms'; y tambien lo colocamos en los imports: FormsModule
- Declararo esos datos que cree: nombreusuario,direccion y telefono en el typescript luego llamo a una funcion para que me traiga esos datos que se llame cargardatos()
- Llamo a la funcion "cargardatos" desde el html a traves de un boton "cargar" ya no a traves de onclick sino con (click) solo con parentesis porque es "event biding" osea la info viaja del html al ts asi: <div (click)="cargardatos()">cargar</div>

FUNCIONALIDAD PARA ALMACENAR LA INFO:
- Declarar las variables en el html: Ej:  nombre:string = ""; y el array: datos:string[] = []
- Crear una funcion para almacenar esos datos:   Guardar(){this.datos.push(this.nombre) console.log(this.datos) }
- Llamar al array que esta en el ts desde el html {{datos | json}}

RECORRER LA INFORMACION Y LISTARLA:
- Para listar la informacion ya no necesitamos el "for" en el ts.Ahora usamos *ngFor asi: <div class="item" *ngFor="let i of datos">{{i}}</div>

PARA INCORPORAR UNA PLANTILLA DE BOOTSTRAP Y CREAR UNA TABLA EN CONTACTENOS
- Voy a index.html borro la plantilla original y dejo la plantilla de bootstrap pero primero copio: <base href="/"> y <app-root></app-root> que estan en la plantilla original y los coloco en la plantilla de bootstrap. Debo ubicarlas la primera dentro del body y la segunda despues de la etiqueta title.
- Copio una table de bootstrap y la pego en el html de contactenos
- Depuramos la tabla y ahora para reemplazar los datos e usar el iterador "for" debo colocar el *ngFor="let i of datos" en la etiqueta <tr> y en la etiqueta <td> coloco los valores: nombre: <td>{{i.nombre}}</td>, valor: <td>{{i.valor | currency}}</td> , valor con iva: <td>{{(i.valor * 19/100) + i.valor | currency }}</td>
- Incoporamos bootstrap para el formulario tambien

CÓMO PREPARAR LOS DATOS DEL FRONTEND:

DISEÑO PLANTILLA PARA CREAR UNA ESTRUCTURA QUE SE REPITA:(*ngFor)
- Cuando se trabaja con backend y con frontend de forma desconectada y el backend todavia no ha entregado los datos uno no puede esperar a que lleguen por lo que dichos datos se pueden "simular" con un iterador. TeNgo dos opciones:
1) Poner el iterador directamente en el html
- Creo los div de los datos que quiero que se repitan
    <div class="item">{{i.nombre}}</div>
    <div class="item">Granados</div>
- Creo un <div> donde coloco ese contenido que quiero que se repita y un array de datos simulado:<div class="marco" *ngFor="let i of[{nombre:'Saida'},{nombre:'Teo'}]">
- Le doy diseño css a mi tabla
2) LLevo el contenido de ese array [{nombre:'Saida'},{nombre:'Teo'}] a mi typescript y dejo en el html unicamente el nombre del array "datodeprueba"asi: <div class="marco" *ngFor="let i of datodeprueba>
- Creo en mi typescript la variable datodeprueba con el contenido del array: datodeprueba:any[] = [{nombre:'Saida'},{nombre:'Teo'}]

CONDICIONES PARA MOSTRAR U OCULTAR ELEMENTOS: (*ngIf)
Podemos usar el *ngIf de dos formas:
Forma1:
- (*ngIf) me sirve para condicionar que elementos quiero que se vean o no por ejemplo que me aparezcan los valores mayores o iguales a 200 asi: <div *ngIf="i.valor >= 200"></div>

Forma2:
A traves de variables con un sistema de mensajes
- Coloco el *ngIf en un div en el html asi: <div *ngIf="mostrarmensaje"> Registro guardado correctamente</div>
- Voy al typescript y declaro una variable mostrarmensaje boolean en false asi: mostrarmensaje:boolean = false;
- En la funcion guardar declaro la variable "mostrarmensaje" en true para que se active el mensaje cuando le de click al boton de guardar asi: this.mostrarmensaje = true;
- Para que se oculte el mensaje a los 5 segundos puedo colocar en la funcion guardar un settimeout y dejo el mostrarmensaje en false
- Si quiero que el mensaje sea dinamico es decir, cambie creo una variable {{mensaje}} que llamo desde el html y la declaro en el typescript.Inicializo la variable asi: mensaje="" y en la funcion Guardar le coloco el mesaje que yo desee asi:  this.mensaje = "Se ha guardado el registro".


## LINKS  🐢
- Link manual Angular informacion acerca de *ngIf
[![N|Solid](https://docs.angular.lat/assets/images/logos/angular/angular.png)](https://angular.io/api/common/NgIf).