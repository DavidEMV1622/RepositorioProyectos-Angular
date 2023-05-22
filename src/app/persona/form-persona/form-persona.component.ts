import { ApiPersonasService } from 'src/app/service/api-personas.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-persona',
  templateUrl: './form-persona.component.html',
  styleUrls: ['./form-persona.component.css']
})
export class FormPersonaComponent implements OnInit {
  title: string= "Registrar cliente"

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

  // listPersonas: Persona[] = [];
  constructor(private api:ApiPersonasService, private router: Router) {}

  ngOnInit(): void {
    
  }

  addPersona(): void{
    let persona = {
      id_persona: this.personaForm.get('id_persona')?.value,
      nombres: this.personaForm.get('nombres')?.value,
      apellidos: this.personaForm.get('apellidos')?.value,
      correos: this.personaForm.get('correos')?.value,
      edades: this.personaForm.get('edades')?.value,
      fecha_nacimientos: this.personaForm.get('fecha_nacimientos')?.value,
      direcciones: this.personaForm.get('direcciones')?.value,
      contrasenias: this.personaForm.get('contrasenias')?.value
    }
    this.api.postCrearPersona(persona).subscribe (respuesta => {
      console.log("@@@@@@@ ", respuesta);

      if (respuesta.status === "ok") {
        alert ("Registro exitoso");
        this.router.navigate(['tablaPersona']);
      
      } else {
        alert("Registro fallido")
      }
    });
  }


}