import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FormPersonaComponent } from './persona/form-persona/form-persona.component';
import { FormConcesionarioComponent } from './concesionario/form-concesionario/form-concesionario.component';
import { TituloRegistrarConcesionarioComponent } from './concesionario/titulo-registrar-concesionario/titulo-registrar-concesionario.component';
import { BotonRegistrarConcesionarioComponent } from './concesionario/boton-registrar-concesionario/boton-registrar-concesionario.component';
import { MenuConcesionarioComponent } from './concesionario/menu-concesionario/menu-concesionario.component';
import { FormAutomovilComponent } from './automovil/form-automovil/form-automovil.component';
import { FormVentaComponent } from './venta/form-venta/form-venta.component';
import { MenuVentaComponent } from './venta/menu-venta/menu-venta.component';
import { TituloRegistrarVentaComponent } from './venta/titulo-registrar-venta/titulo-registrar-venta.component';
import { BotonRegistrarVentaComponent } from './venta/boton-registrar-venta/boton-registrar-venta.component';
import { FormRolComponent } from './rol/form-rol/form-rol.component';
import { MenuRolComponent } from './rol/menu-rol/menu-rol.component';
import { TituloRegistrarRolComponent } from './rol/titulo-registrar-rol/titulo-registrar-rol.component';
import { BotonRegistrarRolComponent } from './rol/boton-registrar-rol/boton-registrar-rol.component';
import { MenuComponentComponent } from './template/menu-component/menu-component.component';
import { AppRoutingModule } from './app-routing.module';
import { PersonaComponentComponent } from './persona/persona-component/persona-component.component';
import { ConcesionarioComponentComponent } from './concesionario/concesionario-component/concesionario-component.component';
import { AutomovilComponentComponent } from './automovil/automovil-component/automovil-component.component';
import { VentaComponentComponent } from './venta/venta-component/venta-component.component';
import { RolComponentComponent } from './rol/rol-component/rol-component.component';
import { ApiPersonasService } from './service/api-personas.service';
import { ApiConcesionariosService } from './service/api-concesionarios.service';
import { ApiAutomovilesService } from './service/api-automoviles.service';
import { ApiVentasService } from './service/api-ventas.service';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponentComponent } from './template/header-component/header-component.component';
import { FooterComponentComponent } from './template/footer-component/footer-component.component';
import { InicioComponentComponent } from './dashboard/inicio-component/inicio-component.component';
import { PresentacionComponentComponent } from './dashboard/presentacion-component/presentacion-component.component';
import { LoginComponentComponent } from './dashboard/login-component/login-component.component';
import { RecuperarCuentaComponentComponent } from './dashboard/recuperar-cuenta-component/recuperar-cuenta-component.component';
import { PlanesComponentComponent } from './dashboard/planes-component/planes-component.component';
import { ContactoComponentComponent } from './dashboard/contacto-component/contacto-component.component';

@NgModule({
  declarations: [
    AppComponent,
    FormPersonaComponent,
    FormConcesionarioComponent,
    TituloRegistrarConcesionarioComponent,
    BotonRegistrarConcesionarioComponent,
    MenuConcesionarioComponent,
    FormAutomovilComponent,
    FormVentaComponent,
    MenuVentaComponent,
    TituloRegistrarVentaComponent,
    BotonRegistrarVentaComponent,
    FormRolComponent,
    MenuRolComponent,
    TituloRegistrarRolComponent,
    BotonRegistrarRolComponent,
    MenuComponentComponent,
    PersonaComponentComponent,
    ConcesionarioComponentComponent,
    AutomovilComponentComponent,
    VentaComponentComponent,
    RolComponentComponent,
    HeaderComponentComponent,
    FooterComponentComponent,
    InicioComponentComponent,
    PresentacionComponentComponent,
    LoginComponentComponent,
    RecuperarCuentaComponentComponent,
    PlanesComponentComponent,
    ContactoComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [ApiPersonasService, ApiConcesionariosService, ApiAutomovilesService,
    ApiVentasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
