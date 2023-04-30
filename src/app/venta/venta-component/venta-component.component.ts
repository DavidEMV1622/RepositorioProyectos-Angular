import { Component, OnInit } from '@angular/core';
import { Venta } from 'src/app/model/Venta';
import { ApiVentasService } from 'src/app/service/api-ventas.service';

@Component({
  selector: 'app-venta-component',
  templateUrl: './venta-component.component.html',
  styleUrls: ['./venta-component.component.css']
})
export class VentaComponentComponent implements OnInit{
  
  title: string= "Lista de Ventas"
  //7.4) Guardar los datos de "Ventas" en la variable "listVentas"
  listVentas: Venta[] = [];
  // "boolean = true" para indicar que si se encontro los datos
  show:boolean = true;

  constructor(private ventaService: ApiVentasService) {

  }

  ngOnInit(): void {
    this.allVenta();
  }

  allVenta():void {
    this.ventaService.getAllVenta().subscribe(respuesta => {
      console.log(respuesta);

      this.listVentas = respuesta.data;
      // Si no hay datos, que muestre que "No hay registros", de lo contrario que muestre los registros
      (this.listVentas.length > 0)?this.show = false:this.show;

      console.log('>>>>>>>>>>', this.listVentas)

      this.listVentas.forEach(x => {
        console.log('>>>>>>>>>>', x)
      })
    })
  }

}
