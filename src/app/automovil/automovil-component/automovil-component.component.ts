import { Component, OnInit } from '@angular/core';
import { Automovil } from 'src/app/model/Automovil';
import { ApiAutomovilesService } from 'src/app/service/api-automoviles.service';
import Swal from 'sweetalert2';

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
  // Inicializar el id para el metodo de eliminar
  id:number=0;

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

  // Definir los parametros para eliminar
  delete(id:number):void{
    this.id=id
    this.confirmar()
   }

  // Ventana para confirmar si se desea eliminar
  confirmar():void{
    Swal.fire({
      title: "Automovil",
      text: "¿Deseas eliminar el automovil?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar",
  })

  // Que pasa si se le da a las botones "Si, eliminar" y "Cancelar"
  .then((resultado) => {
      if (resultado.value) {
          // Hicieron click en "Sí"
          this.automovilService.getEliminarAutomovil(this.id).subscribe(respuesta =>{
            console.log("++++++",respuesta);
          });
          console.log("*Se elimina el cliente*");
      } else  if (resultado.dismiss === Swal.DismissReason.cancel) {
          // Dijeron que no
          console.log("*NO se elimina el cliente*");
      }
  });
  }
}
