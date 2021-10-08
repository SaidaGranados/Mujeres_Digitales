import { Component, OnInit } from '@angular/core';
import { Personas } from 'src/app/interface/personas';
import { DatosusuarioService } from 'src/app/services/datosusuario.service';

/* EJEMPLO INTERFACES
// Interfaz carrito
export interface ifcCarrito{
  id:string,
  cantidad:number
}
 */



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public datouser: DatosusuarioService) { }

  nombre:string = '';
  edad:number = 0;
  estado:boolean = true;
  //datos : (string | boolean | number)[]= ['Teo',true,false,2]
  //datos1 : any[]= ['Teo',true,false,2]
  datos: string[] = []
  valor:number = 25000


  minuevonombre:string = 'pedro perez'


  carrito:any[] = []
  //carrito:ifcCarrito[] = []

  misusuarios:Personas = {
    nombre:'john',
    apellido:'castiblanco',
    direccion:'xxxxx',
    telefono:2121424,
    email:'j@gmail.com',
    habilidades:[
      {nombre:'programar',anio:2019},
      {nombre:'programar',anio:2017},
      {nombre:'programar',anio:2018},
    ]
  }

  fecha:Date = new Date()

  cargarusuarios(){
    console.log('cargar usuarios')
    //this.carrito.push({id:'',cantidad:0})
    console.log(this.misusuarios)
    
    
  }

  ngOnInit(): void {
    this.cargarusuarios()
    console.log(this.datouser.nombreusuario)
    
    
      
  }



}
