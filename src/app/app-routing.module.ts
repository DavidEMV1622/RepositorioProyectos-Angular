import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Importacion de la ruta
import { RouterModule, Routes } from '@angular/router';
// Importacion de los componentes a navegar
import { FormPersonaComponent } from './persona/form-persona/form-persona.component';
import { FormConcesionarioComponent } from './concesionario/form-concesionario/form-concesionario.component';
import { FormAutomovilComponent } from './automovil/form-automovil/form-automovil.component';
import { FormVentaComponent } from './venta/form-venta/form-venta.component';
import { FormRolComponent } from './rol/form-rol/form-rol.component';
import { PersonaComponentComponent } from './persona/persona-component/persona-component.component';
import { ConcesionarioComponentComponent } from './concesionario/concesionario-component/concesionario-component.component';
import { AutomovilComponentComponent } from './automovil/automovil-component/automovil-component.component';
import { VentaComponentComponent } from './venta/venta-component/venta-component.component';
import { RolComponentComponent } from './rol/rol-component/rol-component.component';

// Creacion del objeto con arreglos (componente)
const routes: Routes = [
  // Definir las rutas de los formularios
  { path: 'PersonasRuta', component: FormPersonaComponent },
  { path: 'ConcesionariosRuta', component: FormConcesionarioComponent },
  { path: 'AutomovilesRuta', component: FormAutomovilComponent },
  { path: 'VentaRuta', component: FormVentaComponent },
  { path: 'RolRuta', component: FormRolComponent },

  // Definir las rutas de las listas de datos
  { path: 'ListaPersonasRuta', component: PersonaComponentComponent },
  { path: 'ListaConcesionariosRuta', component: ConcesionarioComponentComponent },
  { path: 'ListaAutomovilesRuta', component: AutomovilComponentComponent },
  { path: 'ListaVentasRuta', component: VentaComponentComponent },
  { path: 'ListaRolesRuta', component: RolComponentComponent }
  
];

// Usar modulo para importar las rutas
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
