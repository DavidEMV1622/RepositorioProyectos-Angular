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

import { MenuComponentComponent } from './template/menu-component/menu-component.component';
import { LoginComponentComponent } from './dashboard/login-component/login-component.component';
import { RecuperarCuentaComponentComponent } from './dashboard/recuperar-cuenta-component/recuperar-cuenta-component.component';
import { PlanesComponentComponent } from './dashboard/planes-component/planes-component.component';
import { ContactoComponentComponent } from './dashboard/contacto-component/contacto-component.component';
import { PresentacionComponentComponent } from './dashboard/presentacion-component/presentacion-component.component';
import { InicioComponentComponent } from './dashboard/inicio-component/inicio-component.component';
import { EditarPersonaComponent } from './persona/editar-persona/editar-persona.component';
import { EditarAutomovilComponent } from './automovil/editar-automovil/editar-automovil.component';
import { EditarConcesionarioComponent } from './concesionario/editar-concesionario/editar-concesionario.component';
import { EditarRolComponent } from './rol/editar-rol/editar-rol.component';


// Creacion del objeto con arreglos (componente)
const routes: Routes = [
  // Definir las rutas de los formularios



  // Definir las rutas de las listas de datos

  // Rutas menu
  { path: 'InicioRuta', component: InicioComponentComponent },
  {
    path: 'dashboard',
    component: MenuComponentComponent,
    children: [
      { path: 'PersonasRuta', component: FormPersonaComponent },
      { path: 'listaPersonas', component: PersonaComponentComponent },
      { path: 'ConcesionariosRuta', component: FormConcesionarioComponent },
      { path: 'listaConcesionarios', component: ConcesionarioComponentComponent},
      { path: 'AutomovilesRuta', component: FormAutomovilComponent },
      { path: 'listaAutomoviles', component: AutomovilComponentComponent },
      { path: 'VentaRuta', component: FormVentaComponent },
      { path: 'listaVentas', component: VentaComponentComponent },
      { path: 'RolRuta', component: FormRolComponent },
      { path: 'listaRoles', component: RolComponentComponent },

      { path: 'editarPersona/:id', component: EditarPersonaComponent},
      { path: 'editarAutomovil/:id', component: EditarAutomovilComponent},
      { path: 'editarConcesionario/:id', component: EditarConcesionarioComponent},
      { path: 'editarRol/:id', component: EditarRolComponent},

    ],
  },
  { path: 'PersonasHeader', component: FormPersonaComponent },
  { path: 'LoginRuta', component: LoginComponentComponent },
  { path: 'RecuperarCuentaRuta', component: RecuperarCuentaComponentComponent },
  { path: 'PlanesRuta', component: PlanesComponentComponent },
  { path: 'ContactoRuta', component: ContactoComponentComponent },
];

// Usar modulo para importar las rutas
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
