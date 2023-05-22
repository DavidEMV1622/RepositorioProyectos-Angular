import { Component, OnInit } from '@angular/core';
import { Rol } from 'src/app/model/Rol';
import { ApiRolService } from 'src/app/service/api-rol.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-rol-component',
  templateUrl: './rol-component.component.html',
  styleUrls: ['./rol-component.component.css']
})
export class RolComponentComponent implements OnInit{

  title: string= "Lista de roles"
  //7.4) Guardar los datos de "Persona" en la variable "listPersonas"
  listRoles: Rol[] = [];
  // "boolean = true" para indicar que si se encontro los datos
  show:boolean = true;

  constructor(private rolService: ApiRolService) {
  }

  ngOnInit(): void {
    this.allRol();
  }
  // Inicializar el id para el metodo de eliminar
  id:number=0;

  allRol():void {
    this.rolService.getAllRol().subscribe(respuesta => {
      console.log(respuesta);

      this.listRoles = respuesta.data;
      // Si no hay datos, que muestre que "No hay registros", de lo contrario que muestre los registros
      (this.listRoles.length > 0)?this.show = false:this.show;

      console.log('>>>>>>>>>>', this.listRoles)

      this.listRoles.forEach(x => {
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
      title: "Rol",
      text: "¿Deseas eliminar el rol?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar",
  })

  // Que pasa si se le da a las botones "Si, eliminar" y "Cancelar"
  .then((resultado) => {
      if (resultado.value) {
          // Hicieron click en "Sí"
          this.rolService.getEliminarRol(this.id).subscribe(respuesta =>{
            console.log("++++++",respuesta);
          });
          console.log("*Se elimina el rol*");
      } else  if (resultado.dismiss === Swal.DismissReason.cancel) {
          // Dijeron que no
          console.log("*NO se elimina el rol*");
      }
  });
  }

}
