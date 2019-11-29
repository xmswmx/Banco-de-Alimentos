import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HomeComponent } from './modules/home/home.component';
import { RegistrarBeneficiarioComponent } from './modules/beneficiario/registrar-beneficiario/registrar-beneficiario.component';
import { RegistrarDonanteComponent } from './modules/donante/registrar-donante/registrar-donante.component';
import { RegistrarVoluntarioComponent } from './modules/voluntario/registrar-voluntario/registrar-voluntario.component';
import { LoginComponent } from './modules/login/login.component';
import { PerfilVoluntarioComponent } from './modules/voluntario/perfil-voluntario/perfil-voluntario.component';
import { BuscarVoluntarioComponent } from './modules/admin/buscar-voluntario/buscar-voluntario.component';
import { CambiarClaveComponent } from './modules/cuenta/cambiar-clave/cambiar-clave.component';
import { VerTopComponent } from './modules/topDonaciones/ver-top/ver-top.component';
import { SDKBrowserModule } from './_services/lbservice';
import { VerBeneficiariosComponent } from './modules/beneficiario/ver-beneficiarios/ver-beneficiarios.component';
import { PerfilDonanteComponent } from './modules/donante/perfil-donante/perfil-donante.component';
import { MisDonacionesComponent } from './modules/donante/mis-donaciones/mis-donaciones.component';
import { RegistarDonacionDetalladaComponent } from './modules/donacion/registar-donacion-detallada/registar-donacion-detallada.component';
import { RegistrarDonacionGeneralComponent } from './modules/donacion/registrar-donacion-general/registrar-donacion-general.component';
import { PerfilBeneficiarioComponent } from './modules/beneficiario/perfil-beneficiario/perfil-beneficiario.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {NgxPaginationModule} from 'ngx-pagination';
import { PanelComponent } from './modules/admin/panel/panel.component';
import { TrasladosSinVoluntarioComponent } from './modules/admin/traslados-sin-voluntario/traslados-sin-voluntario.component';
import { AceptarTrasladoComponent } from './modules/voluntario/aceptar-traslado/aceptar-traslado.component';
import { TrasladosPendientesComponent } from './modules/admin/traslados-pendientes/traslados-pendientes.component';
import { RegistrarDonacionComponent } from './modules/donante/registrar-donacion/registrar-donacion.component';
import { NuevoTrasladoComponent } from './modules/admin/nuevo-traslado/nuevo-traslado.component';
import { SolicitudesTrasladoComponent } from './modules/voluntario/solicitudes-traslado/solicitudes-traslado.component';
import { ConfirmarTrasladoRealizadoComponent } from './modules/beneficiario/confirmar-traslado-realizado/confirmar-traslado-realizado.component';
import { AsignarTrasladoComponent } from './modules/voluntario/asignar-traslado/asignar-traslado.component';
import { MatTabsModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    RegistrarBeneficiarioComponent,
    RegistrarDonanteComponent,
    RegistrarVoluntarioComponent,
    LoginComponent,
    PerfilVoluntarioComponent,
    VerBeneficiariosComponent,
    BuscarVoluntarioComponent,
    CambiarClaveComponent,
    VerTopComponent,
    PerfilDonanteComponent,
    MisDonacionesComponent,
    RegistarDonacionDetalladaComponent,
    RegistrarDonacionGeneralComponent,
    PerfilBeneficiarioComponent,
    PanelComponent,
    TrasladosSinVoluntarioComponent,
<<<<<<< HEAD
    AceptarTrasladoComponent
=======
    TrasladosPendientesComponent,
    RegistrarDonacionComponent,
    NuevoTrasladoComponent,
    SolicitudesTrasladoComponent,
    ConfirmarTrasladoRealizadoComponent,
    AsignarTrasladoComponent
>>>>>>> fd7a434604a7750309eec20f69adcedd38d5286b
  ],
  imports: [
    FontAwesomeModule,
    NgxPaginationModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    SDKBrowserModule.forRoot(),
    MatTabsModule,
    BrowserAnimationsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


