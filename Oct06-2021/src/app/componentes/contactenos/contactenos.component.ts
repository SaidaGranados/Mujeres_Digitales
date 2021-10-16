import { Component, OnInit } from '@angular/core';
import { Personas } from 'src/app/interface/personas';
import { MensajeriaService } from 'src/app/services/mensajeria.service';

@Component({
  selector: 'app-contactenos',
  templateUrl: './contactenos.component.html',
  styleUrls: ['./contactenos.component.css']
})
export class ContactenosComponent implements OnInit {

  constructor(private msg:MensajeriaService) { }

  nombre:string = "";
  valor: number = 100;
  datodeprueba:any[] = [{nombre:'Saida'},{nombre:'Teo'},{nombre:'sdgdf'}]
  mostrarmensaje:boolean = false;
  mensaje = '';

  datos:any[] = [
    {valor:100,nombre:'Saida'},
    {valor:200,nombre:'Juan'},
    {valor:300,nombre:'Teo'},
    {valor:400,nombre:'Diana'},
  
  ];
    

  ngOnInit(): void {
  }

  Guardar(){
    this.datos.push({valor: this.valor, nombre:this.nombre})
    console.log(this.datos)

    this.msg.crearmensaje('El Registro se guardó con exito')
    }

    


  }




  
