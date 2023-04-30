import { ResponseI } from '../model/ResponseI';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

const urlBase = "http://localhost:8080/automovil";

@Injectable({
  providedIn: 'root'
})

export class ApiAutomovilesService {

  constructor(private http:HttpClient) { }

  getAllAutomovil():Observable<ResponseI> {
    // console.log("Response: " + this.http.get(urlBase+"/all"));
    return this.http.get<ResponseI>(urlBase+"/all");
    //return this.http.get<ResponseI>("http://localhost:8080/automovil/all");
  }
}
