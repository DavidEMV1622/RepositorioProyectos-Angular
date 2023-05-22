import { Component, OnInit } from '@angular/core';
import { ApiConcesionariosService } from 'src/app/service/api-concesionarios.service';
import { Concesionario } from 'src/app/model/Concesionario';
import Swal from 'sweetalert2';

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
  // Inicializar el id para el metodo de eliminar
  id:number=0;

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

  // Definir los parametros para eliminar
  delete(id:number):void{
    this.id=id
    this.confirmar()
   }

  // Ventana para confirmar si se desea eliminar
  confirmar():void{
    Swal.fire({
      title: "Concesionario",
      text: "¿Deseas eliminar el concesionario?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar",
  })

  // Que pasa si se le da a las botones "Si, eliminar" y "Cancelar"
  .then((resultado) => {
      if (resultado.value) {
          // Hicieron click en "Sí"
          this.concesionarioService.getEliminarConcesionario(this.id).subscribe(respuesta =>{
            console.log("++++++",respuesta);
          });
          console.log("*Se elimina el concesionario*");
      } else  if (resultado.dismiss === Swal.DismissReason.cancel) {
          // Dijeron que no
          console.log("*NO se elimina el concesionario*");
      }
  });
  }

}
