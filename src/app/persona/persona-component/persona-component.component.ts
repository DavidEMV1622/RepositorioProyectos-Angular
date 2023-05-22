import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/model/Persona';
import { ApiPersonasService } from 'src/app/service/api-personas.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-persona-component',
  templateUrl: './persona-component.component.html',
  styleUrls: ['./persona-component.component.css']
})
export class PersonaComponentComponent implements OnInit {

  title: string= "Lista de personas"
  //7.4) Guardar los datos de "Persona" en la variable "listPersonas"
  listPersonas: Persona[] = [];
  // "boolean = true" para indicar que si se encontro los datos
  show:boolean = true;

  constructor(private personaService: ApiPersonasService) {

  }
  // Inicializar el id para el metodo de eliminar
  id:number=0;

  ngOnInit(): void {
    this.allPersona();
  }

  allPersona():void {
    this.personaService.getAllPersona().subscribe(respuesta => {
      console.log(respuesta);

      this.listPersonas = respuesta.data;
      // Si no hay datos, que muestre que "No hay registros", de lo contrario que muestre los registros
      (this.listPersonas.length > 0)?this.show = false:this.show;

      console.log('>>>>>>>>>>', this.listPersonas)

      this.listPersonas.forEach(x => {
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
      title: "Cliente",
      text: "¿Deseas eliminar el cliente?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar",
  })

  // Que pasa si se le da a las botones "Si, eliminar" y "Cancelar"
  .then((resultado) => {
      if (resultado.value) {
          // Hicieron click en "Sí"
          this.personaService.getEliminarPersona(this.id).subscribe(respuesta =>{
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
