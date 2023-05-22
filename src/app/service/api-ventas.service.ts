import { ResponseI } from '../model/ResponseI';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

const urlBase = "http://localhost:8080/venta";

@Injectable({
  providedIn: 'root'
})

export class ApiVentasService {

  constructor(private http:HttpClient) { }

  getAllVenta():Observable<ResponseI> {
    // console.log("Response: " + this.http.get(urlBase+"/all"));
    return this.http.get<ResponseI>(urlBase+"/all");
    //return this.http.get<ResponseI>("http://localhost:8080/venta/all");
  }
  
  // Definir el metodo para crear
  postCrearVenta(data: any):Observable<ResponseI> {
    return this.http.post<ResponseI>(urlBase+ "/crear", data);
  }
}
