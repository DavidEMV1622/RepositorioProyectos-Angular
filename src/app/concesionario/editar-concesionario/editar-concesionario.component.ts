import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiConcesionariosService } from 'src/app/service/api-concesionarios.service';

@Component({
  selector: 'app-editar-concesionario',
  templateUrl: './editar-concesionario.component.html',
  styleUrls: ['./editar-concesionario.component.css']
})
export class EditarConcesionarioComponent implements OnInit {
  
  title: string= "Editar concesionario"
  
  concesionarioForm = new FormGroup({
    id_concesionario: new FormControl(''),
    nombres: new FormControl(''),
    direcciones: new FormControl(''),
    correos: new FormControl(''), 
    telefonos: new FormControl('')
  });

  // Definir los servicios a utilizar para editar
  constructor(private api: ApiConcesionariosService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
     // Obtener el id del concesionario de la URL "ruta que se definio en el app-routing.module.ts"
     // (editarConcesionario/:id)
    const concesionarioId = this.route.snapshot.paramMap.get('id_concesionario');
     // Buscar el concesionario correspondiente al "id_concesionario" por medio del metodo "getAllConcesionario"
    this.api.getAllConcesionario().subscribe(response => {
    const concesionario = response.data.find((p: { id_concesionario: string | null; }) => p.id_concesionario === concesionarioId);
    
    // Actualizar los valores del formulario con los datos de la persona
    if (concesionario) {
      this.concesionarioForm.patchValue(concesionario); 
    }
  });
  }

  // Metodo de actualizar
  updateConcesionario(): void {
    // Obtener los valores del formulario para empezar con la actualizacion en la base de datos
    const concesionario = this.concesionarioForm.value; 
    this.api.postActualizarConcesionario(concesionario).subscribe(respuesta => {
      console.log("@@@@@@@ ", respuesta);
      if (respuesta.status === "ok") {
        alert("Actualización exitosa");
        this.router.navigate(['tablaConcesionario']);
      } else {
        alert("Actualización fallida");
      }
    });
  }

}
