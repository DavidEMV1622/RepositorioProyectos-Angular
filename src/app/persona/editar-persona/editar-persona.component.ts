import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona } from 'src/app/model/Persona';
import { ApiPersonasService } from 'src/app/service/api-personas.service';

@Component({
  selector: 'app-editar-persona',
  templateUrl: './editar-persona.component.html',
  styleUrls: ['./editar-persona.component.css']
})
export class EditarPersonaComponent implements OnInit{
  title: string= "Editar cliente"

  personaForm = new FormGroup({
    id_persona: new FormControl(''),
    nombres: new FormControl(''),
    apellidos: new FormControl(''),
    correos: new FormControl(''), 
    edades: new FormControl(''), 
    fecha_nacimientos: new FormControl(''), 
    direcciones: new FormControl(''), 
    contrasenias: new FormControl(''),
  });

  // Definir los servicios a utilizar para editar
  constructor(private api: ApiPersonasService, private router: Router, private route: ActivatedRoute) {}
  
  ngOnInit(): void {
     // Obtener el id de la persona de la URL "ruta que se definio en el app-routing.module.ts"
     // (editarPersona/:id)
    const personaId = this.route.snapshot.paramMap.get('id');
   
     // Buscar la persona correspondiente al "id_persona" por medio del metodo "getAllPersona"
    this.api.getAllPersona().subscribe(response => {
    const persona = response.data.find((p: { id_persona: string | null; }) => p.id_persona === personaId);
         
    // Actualizar los valores del formulario con los datos de la persona
    if (persona) {
      this.personaForm.patchValue(persona);
    }
  });
  }

  // Metodo de actualizar
  updatePersona(): void {
    // Obtener los valores del formulario para empezar con la actualizacion en la base de datos
    const persona = this.personaForm.value; 
    this.api.postActualizarPersona(persona).subscribe(respuesta => {
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
