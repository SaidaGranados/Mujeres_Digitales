import { Injectable, setTestabilityGetter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MensajeriaService {

  constructor() { }

  public mensajes:any[] =[]

  public crearmensaje(texto:string){
    this.mensajes.push(texto)

    //Para que cada vez que se llene el array con un registro lo elimine a los 5min
    setTimeout(() => {
      if (this.mensajes.length > 0){
        this.mensajes.splice(0,1) // me elimina el registro 0
      }
      
    }, 5000);
  }

}
