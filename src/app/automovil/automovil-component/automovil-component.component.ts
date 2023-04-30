import { Component, OnInit } from '@angular/core';
import { Automovil } from 'src/app/model/Automovil';
import { ApiAutomovilesService } from 'src/app/service/api-automoviles.service';

@Component({
  selector: 'app-automovil-component',
  templateUrl: './automovil-component.component.html',
  styleUrls: ['./automovil-component.component.css']
})
export class AutomovilComponentComponent implements OnInit{

  title: string= "Lista de automoviles"
  //7.4) Guardar los datos de "Automovil" en la variable "listAutomoviles"
  listAutomoviles : Automovil[] = [];
  // "boolean = true" para indicar que si se encontro los datos
  show:boolean = true;

  constructor(private automovilService: ApiAutomovilesService) {

  }

  ngOnInit(): void {
    this.allAutomovil();
  }

  allAutomovil():void {
    this.automovilService.getAllAutomovil().subscribe(respuesta => {
      console.log(respuesta);

      this.listAutomoviles = respuesta.data;
      // Si no hay datos, que muestre que "No hay registros", de lo contrario que muestre los registros
      (this.listAutomoviles.length > 0)?this.show = false:this.show;

      console.log('>>>>>>>>>>', this.listAutomoviles)

      this.listAutomoviles.forEach(x => {
        console.log('>>>>>>>>>>', x)
      })

    })
    
  }
}
