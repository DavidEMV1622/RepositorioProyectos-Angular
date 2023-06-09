import { ResponseI } from '../model/ResponseI';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

const urlBase = "http://localhost:8080/persona";

@Injectable({
  providedIn: 'root'
})

export class ApiPersonasService {

  constructor(private http:HttpClient) { }

  // Definir el metodo para mostrar
  getAllPersona():Observable<ResponseI> {
    // console.log("Response: " + this.http.get(urlBase+"/all"));
    return this.http.get<ResponseI>(urlBase+ "/all");
    //return this.http.get<ResponseI>("http://localhost:8080/persona/all");
  }

  // Definir el metodo para crear
  postCrearPersona(data: any):Observable<ResponseI> {
    return this.http.post<ResponseI>(urlBase+ "/crear", data);
  }

  // Definir el metodo para actualizar
  postActualizarPersona(data: any):Observable<ResponseI> {
    return this.http.post<ResponseI>(urlBase+ "/actualizar", data);
  }

  // Definir el metodo para eliminar
  getEliminarPersona(data:number):Observable<Response>{
    console.log("###### ",data);

    return this.http.get<Response>(urlBase+"/eliminar/"+data);
  }

}
