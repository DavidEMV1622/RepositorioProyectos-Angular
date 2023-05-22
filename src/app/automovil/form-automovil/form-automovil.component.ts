import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiAutomovilesService } from 'src/app/service/api-automoviles.service';

@Component({
  selector: 'app-form-automovil',
  templateUrl: './form-automovil.component.html',
  styleUrls: ['./form-automovil.component.css']
})
export class FormAutomovilComponent implements OnInit {
  title: string= "Registrar automovil"

  automovilForm = new FormGroup({
    id_automovil: new FormControl(''),
    matriculas: new FormControl(''),
    marcas: new FormControl(''),
    modelos: new FormControl(''), 
    anios: new FormControl(''), 
    colores: new FormControl(''), 
    kilometrajes: new FormControl(''), 
    can_puertas: new FormControl(''),
    tipos_combustibles: new FormControl(''),
    cap_personas: new FormControl(''),
    precios: new FormControl(''),
  });

  constructor(private api:ApiAutomovilesService, private router: Router) {}

  ngOnInit(): void {
    
  }

  addAutomovil(): void{
    let automovil = {
      id_automovil: this.automovilForm.get('id_automovil')?.value,
      matriculas: this.automovilForm.get('matriculas')?.value,
      marcas: this.automovilForm.get('marcas')?.value,
      modelos: this.automovilForm.get('modelos')?.value,
      anios: this.automovilForm.get('anios')?.value,
      colores: this.automovilForm.get('colores')?.value,
      kilometrajes: this.automovilForm.get('kilometrajes')?.value,
      can_puertas: this.automovilForm.get('can_puertas')?.value,
      tipos_combustibles: this.automovilForm.get('tipos_combustibles')?.value,
      cap_personas: this.automovilForm.get('cap_personas')?.value,
      precios: this.automovilForm.get('precios')?.value
    }
    this.api.postCrearAutomovil(automovil).subscribe (respuesta => {
      console.log("@@@@@@@ ", respuesta);

      if (respuesta.status === "ok") {
        alert ("Registro exitoso");
        this.router.navigate(['tablaAutomovil']);
      
      } else {
        alert("Registro fallido")
      }
    });
  }

}
