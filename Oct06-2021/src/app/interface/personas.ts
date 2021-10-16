import { Habilidad } from "./habilidad";

export interface Personas {
    nombre:string,
    apellido:string,
    direccion:string,
    email:string,
    telefono:number,
    habilidades:Habilidad[]

}
