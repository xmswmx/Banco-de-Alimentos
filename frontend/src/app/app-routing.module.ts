import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { RegistrarDonanteComponent } from './modules/donante/registrar-donante/registrar-donante.component';
import { RegistrarBeneficiarioComponent } from './modules/beneficiario/registrar-beneficiario/registrar-beneficiario.component';
import { RegistrarVoluntarioComponent } from './modules/voluntario/registrar-voluntario/registrar-voluntario.component';
import { LoginComponent } from './modules/login/login.component';
import { PerfilVoluntarioComponent } from './modules/voluntario/perfil-voluntario/perfil-voluntario.component';
import { VerBeneficiariosComponent } from './modules/beneficiario/ver-beneficiarios/ver-beneficiarios.component';
import { BuscarVoluntarioComponent } from './modules/admin/buscar-voluntario/buscar-voluntario.component';
import { CambiarClaveComponent } from './modules/cuenta/cambiar-clave/cambiar-clave.component';
import { VerTopComponent } from './modules/topDonaciones/ver-top/ver-top.component';
import { PerfilDonanteComponent } from './modules/donante/perfil-donante/perfil-donante.component';
import { MisDonacionesComponent } from './modules/donante/mis-donaciones/mis-donaciones.component';
import { RegistarDonacionDetalladaComponent } from './modules/donacion/registar-donacion-detallada/registar-donacion-detallada.component';
import { RegistrarDonacionGeneralComponent } from './modules/donacion/registrar-donacion-general/registrar-donacion-general.component';
import { PerfilBeneficiarioComponent } from './modules/beneficiario/perfil-beneficiario/perfil-beneficiario.component';
import { PanelComponent } from "./modules/admin/panel/panel.component";
import { TrasladosSinVoluntarioComponent } from "./modules/admin/traslados-sin-voluntario/traslados-sin-voluntario.component";
import { TrasladosPendientesComponent } from './modules/admin/traslados-pendientes/traslados-pendientes.component';


const routes: Routes = [
	{path:'',redirectTo:'/home',pathMatch:'full'},
	{path:'home',component:HomeComponent},
	{path:'registrar-donante',component:RegistrarDonanteComponent},
	{path:'perfil-donante',component:PerfilDonanteComponent},
	{path:'mis-donaciones',component:MisDonacionesComponent},
	{path:'registrar-donacion-detallada',component:RegistarDonacionDetalladaComponent},
	{path:'registrar-donacion-general',component:RegistrarDonacionGeneralComponent},
	{path:'registrar-beneficiario',component:RegistrarBeneficiarioComponent},
	{path:'registrar-voluntario',component:RegistrarVoluntarioComponent},
	{path:'login',component:LoginComponent},
	{path:'perfil-voluntario',component:PerfilVoluntarioComponent},
	{path:'perfil-beneficiario',component:PerfilBeneficiarioComponent},
	{path:'ver-beneficiarios',component:VerBeneficiariosComponent},
	{path:'perfil-organizacion-beneficiaria',component:PerfilBeneficiarioComponent},
	{path:'buscar-voluntarios',component:BuscarVoluntarioComponent},
	{path:'cambiar-clave',component:CambiarClaveComponent},
	{path:'ver-top',component:VerTopComponent},
	{path:'panel-de-control',component:PanelComponent},
	{path:'traslados-sin-voluntario',component:TrasladosSinVoluntarioComponent},
	{path:'traslados-pendientes',component:TrasladosPendientesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
