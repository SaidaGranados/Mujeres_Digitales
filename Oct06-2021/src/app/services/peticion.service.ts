import { HttpClient, HttpEventType, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class PeticionService {

  constructor( private http:HttpClient) { }

  public Post(url:string,data:{}){

    let promise = new Promise((resolve,reject) =>{

      this.http.post(url,data)
      .toPromise()
      .then(
        (res:any) => {
          resolve(res)
        }
      )
    })
    return promise
  }

  public Get(url:string){

    let promise = new Promise((resolve,reject) =>{

      this.http.get(url)
      .toPromise()
      .then(
        (res:any) => {
          resolve(res)
        }
      )

    })
    return promise
  }

  public urlLocal:string = 'http://localhost:3000'

  //Si yo deseo comunicarme con varios endpoints o con otras apis (ejemplo-facebook)
  //public urlfacebook:string = 'http://facebook:3000'


}
