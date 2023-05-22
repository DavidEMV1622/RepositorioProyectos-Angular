import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiAutomovilesService } from 'src/app/service/api-automoviles.service';

@Component({
  selector: 'app-editar-automovil',
  templateUrl: './editar-automovil.component.html',
  styleUrls: ['./editar-automovil.component.css']
})
export class EditarAutomovilComponent implements OnInit{
  title: string= "Editar automovil"

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

  // Definir los servicios a utilizar para editar
  constructor(private api: ApiAutomovilesService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
     // Obtener el id del automovil de la URL "ruta que se definio en el app-routing.module.ts"
     // (editarAutomovil/:id)
    const automovilId = this.route.snapshot.paramMap.get('id_automovil');
     // Buscar el automovil correspondiente al "id_automovil" por medio del metodo "getAllAutomovil"
    this.api.getAllAutomovil().subscribe(response => {
    const automovil = response.data.find((p: { id_automovil: string | null; }) => p.id_automovil === automovilId);
    
    // Actualizar los valores del formulario con los datos de la persona
    if (automovil) {
      this.automovilForm.patchValue(automovil); 
    }
  });
  }

  // Metodo de actualizar
  updateAutomovil(): void {
    // Obtener los valores del formulario para empezar con la actualizacion en la base de datos
    const automovil = this.automovilForm.value; 
    this.api.postActualizarAutomovil(automovil).subscribe(respuesta => {
      console.log("@@@@@@@ ", respuesta);
      if (respuesta.status === "ok") {
        alert("actualización exitosa");
        this.router.navigate(['tablaAutomovil']);
      } else {
        alert("Actualización fallida");
      }
    });
  }

}
