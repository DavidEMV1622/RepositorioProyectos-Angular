import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiRolService } from 'src/app/service/api-rol.service';

@Component({
  selector: 'app-form-rol',
  templateUrl: './form-rol.component.html',
  styleUrls: ['./form-rol.component.css']
})
export class FormRolComponent implements OnInit {
  title: string= "Registrar rol"

  rolForm = new FormGroup({
    id_persona: new FormControl(''),
    nombres: new FormControl('')
  });

  constructor(private api:ApiRolService, private router: Router) {}
  
  ngOnInit(): void {
    
  }
  
  addRol(): void{
    let rol = {
      id_rol: this.rolForm.get('id_rol')?.value,
      nombres: this.rolForm.get('nombres')?.value
    }
    this.api.postCrearRol(rol).subscribe (respuesta => {
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
