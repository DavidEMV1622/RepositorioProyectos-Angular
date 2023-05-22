import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiConcesionariosService } from 'src/app/service/api-concesionarios.service';

@Component({
  selector: 'app-form-concesionario',
  templateUrl: './form-concesionario.component.html',
  styleUrls: ['./form-concesionario.component.css']
})
export class FormConcesionarioComponent implements OnInit{
  title: string= "Registrar concesionario"
  
  concesionarioForm = new FormGroup({
    id_concesionario: new FormControl(''),
    nombres: new FormControl(''),
    direcciones: new FormControl(''),
    correos: new FormControl(''), 
    telefonos: new FormControl('')
  });

  constructor(private api:ApiConcesionariosService, private router: Router) {}

  ngOnInit(): void {
    
  }

  addConcesionario(): void{
    let concesionario = {
      id_concesionario: this.concesionarioForm.get('id_persona')?.value,
      nombres: this.concesionarioForm.get('nombres')?.value,
      direcciones: this.concesionarioForm.get('direcciones')?.value,
      correos: this.concesionarioForm.get('correos')?.value,
      telefonos: this.concesionarioForm.get('telefonos')?.value
    }
    this.api.postCrearConcesionario(concesionario).subscribe (respuesta => {
      console.log("@@@@@@@ ", respuesta);

      if (respuesta.status === "ok") {
        alert ("Registro exitoso");
        this.router.navigate(['tablaConcesionario']);
      
      } else {
        alert("Registro fallido")
      }
    });
  }
  
}
