import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiRolService } from 'src/app/service/api-rol.service';

@Component({
  selector: 'app-editar-rol',
  templateUrl: './editar-rol.component.html',
  styleUrls: ['./editar-rol.component.css']
})
export class EditarRolComponent implements OnInit{
  title: string= "Editar rol"

  rolForm = new FormGroup({
    id_rol: new FormControl(''),
    nombres: new FormControl('')
  });

  constructor(private api: ApiRolService, private router: Router, private route: ActivatedRoute) {}
  
  ngOnInit(): void {
     // Obtener el id del rol de la URL "ruta que se definio en el app-routing.module.ts"
     // (editarRol/:id)
    const rolId = this.route.snapshot.paramMap.get('id');
   
     // Buscar el rol correspondiente al "id_rol" por medio del metodo "getAllRol"
    this.api.getAllRol().subscribe(response => {
    const rol = response.data.find((p: { id_rol: string | null; }) => p.id_rol === rolId);
         
    // Actualizar los valores del formulario con los datos del rol
    if (rol) {
      this.rolForm.patchValue(rol);
    }
  });
  }

  // Metodo de actualizar
  updateRol(): void {
    // Obtener los valores del formulario para empezar con la actualizacion en la base de datos
    const rol = this.rolForm.value; 
    this.api.postActualizarRol(rol).subscribe(respuesta => {
      console.log("@@@@@@@ ", respuesta);
      if (respuesta.status === "ok") {
        alert("Actualización exitosa");
        this.router.navigate(['tablaPersona']);
      } else {
        alert("Actualización fallida");
      }
    });
  }

}
