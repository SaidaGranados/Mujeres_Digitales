import { Component, OnInit } from '@angular/core';
import { Personas } from 'src/app/interface/personas';

@Component({
  selector: 'app-contactenos',
  templateUrl: './contactenos.component.html',
  styleUrls: ['./contactenos.component.css']
})
export class ContactenosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  //Elemento que guarde los datos de una persona
  usuario:Personas = {
    nombre:'Juan',
    apellido:'castiblanco',
    direccion:'',
    telefono:8842432,
    email:'hksahd',
    habilidades:[{nombre:'jgjsd',anio:2010}]
  }

}
