import { Component, OnInit } from '@angular/core';
import { ApiConcesionariosService } from 'src/app/service/api-concesionarios.service';
import { Concesionario } from 'src/app/model/Concesionario';

@Component({
  selector: 'app-concesionario-component',
  templateUrl: './concesionario-component.component.html',
  styleUrls: ['./concesionario-component.component.css']
})
export class ConcesionarioComponentComponent implements OnInit{
  
  title: string= "Lista de concesionarios"
  //7.4) Guardar los datos de "Concesionarios" en la variable "listConcesionarios"
  listConcesionarios : Concesionario[] = [];
  // "boolean = true" para indicar que si se encontro los datos
  show:boolean = true;

  constructor(private concesionarioService: ApiConcesionariosService) {

  }

  ngOnInit(): void {
    this.allConcesionario();
  }

  allConcesionario():void {
    this.concesionarioService.getAllConcesionario().subscribe(respuesta => {
      console.log(respuesta);
      
      this.listConcesionarios = respuesta.data;
      // Si no hay datos, que muestre que "No hay registros", de lo contrario que muestre los registros
      (this.listConcesionarios.length > 0)?this.show = false:this.show;


      console.log('>>>>>>>>>>', this.listConcesionarios)

      this.listConcesionarios.forEach(x => {
        console.log('>>>>>>>>>>', x)
      })
    });
  }

}
