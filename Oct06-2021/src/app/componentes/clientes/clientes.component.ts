import { Component, OnInit } from '@angular/core';
import { MensajeriaService } from 'src/app/services/mensajeria.service';

import { PeticionService } from 'src/app/services/peticion.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  constructor(private peticion:PeticionService,private msg:MensajeriaService) { }

  ngOnInit(): void {
    this.CargarDatos()
  }

  firstname:string = '';  
  email:string = '';  
  age:string = ''



  Guardar(){


    var post = {
      host:this.peticion.urlLocal,
      url: '/Usuarios/Guardar',
      data: {
      firstname:this.firstname,      
      email:this.email,
      age:this.age
      }
    }

    this.peticion.Post(post.host + post.url,post.data).then(
      (res:any) => {
        console.log(res)
        if(res.state == true){
            this.msg.crearmensaje('Usuario creado correctamente')
            this.CargarDatos()
        }
        else{
            console.log(res.message)
            this.msg.crearmensaje(res.message)
        }
      }
    )
    

  }

  datosusuarios:any[] = [];

  CargarDatos(){

    var post = {
      host:this.peticion.urlLocal,
      url: '/Usuarios/Listar',
      data: {}
    }

    this.peticion.Post(post.host + post.url,post.data).then(
      (res:any) => {
        console.log(res)
        this.datosusuarios = res 
 
      })

}



}
