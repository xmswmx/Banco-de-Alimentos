import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ReactiveFormsModule} from '@angular/forms';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HomeComponent } from './modules/home/home.component';
import { RegistrarBeneficiarioComponent } from './modules/beneficiario/registrar-beneficiario/registrar-beneficiario.component';
import { RegistrarDonanteComponent } from './modules/donante/registrar-donante/registrar-donante.component';
import { RegistrarVoluntarioComponent } from './modules/voluntario/registrar-voluntario/registrar-voluntario.component';
import { LoginComponent } from './modules/login/login.component';
import { PerfilVoluntarioComponent } from './modules/voluntario/perfil-voluntario/perfil-voluntario.component';
import { BuscarVoluntarioComponent } from './modules/voluntario/buscar-voluntario/buscar-voluntario.component';
import { CambiarClaveComponent } from './modules/cuenta/cambiar-clave/cambiar-clave.component';
import { VerTopComponent } from './modules/topDonaciones/ver-top/ver-top.component';


import { SDKBrowserModule } from './_services/lbservice';
import { VerBeneficiariosComponent } from './modules/beneficiario/ver-beneficiarios/ver-beneficiarios.component';
import { PerfilDonanteComponent } from './modules/donante/perfil-donante/perfil-donante.component';
<<<<<<< HEAD
import { MisDonacionesComponent } from './modules/donante/mis-donaciones/mis-donaciones.component';
import { RegistarDonacionDetalladaComponent } from './modules/donacion/registar-donacion-detallada/registar-donacion-detallada.component';
import { RegistrarDonacionGeneralComponent } from './modules/donacion/registrar-donacion-general/registrar-donacion-general.component';

=======
import { PerfilBeneficiarioComponent } from './modules/beneficiario/perfil-beneficiario/perfil-beneficiario.component';
import {FontAwesomeModule } from '@fortawesome/angular-fontawesome';
>>>>>>> b5269abd1619be2848f195360730df46dd805192

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
<<<<<<< HEAD
	VerTopComponent,
	PerfilDonanteComponent,
	MisDonacionesComponent,
	RegistarDonacionDetalladaComponent,
	RegistrarDonacionGeneralComponent
=======
    VerTopComponent,
    PerfilDonanteComponent,
    PerfilBeneficiarioComponent
>>>>>>> b5269abd1619be2848f195360730df46dd805192
  ],
  imports: [
	FontAwesomeModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    SDKBrowserModule.forRoot()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


