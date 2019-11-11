import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { RegistrarDonanteComponent } from './modules/donante/registrar-donante/registrar-donante.component';
import { RegistrarBeneficiarioComponent } from './modules/beneficiario/registrar-beneficiario/registrar-beneficiario.component';
import { RegistrarVoluntarioComponent } from './modules/voluntario/registrar-voluntario/registrar-voluntario.component';
import { LoginComponent } from './modules/login/login.component';
import { PerfilVoluntarioComponent } from './modules/voluntario/perfil-voluntario//perfil-voluntario.component';
import { VerBeneficiariosComponent } from './modules/beneficiario/ver-beneficiarios/ver-beneficiarios.component';
import { BuscarVoluntarioComponent } from './modules/voluntario/buscar-voluntario//buscar-voluntario.component';
import { CambiarClaveComponent } from './modules/cuenta/cambiar-clave/cambiar-clave.component';
import { VerTopComponent } from './modules/topDonaciones/ver-top/ver-top.component';
import { PerfilDonanteComponent } from './modules/donante/perfil-donante/perfil-donante.component';
import { PerfilBeneficiarioComponent } from './modules/beneficiario/perfil-beneficiario/perfil-beneficiario.component';




const routes: Routes = [
	{path:'',redirectTo:'/home',pathMatch:'full'},
	{path:'home',component:HomeComponent},
	{path:'registrar-donante',component:RegistrarDonanteComponent},
	{path:'registrar-beneficiario',component:RegistrarBeneficiarioComponent},
	{path:'registrar-voluntario',component:RegistrarVoluntarioComponent},
	{path:'login',component:LoginComponent},
	{path:'perfil-voluntario',component:PerfilVoluntarioComponent},
	{path:'perfil-donante',component:PerfilDonanteComponent},
	{path:'ver-beneficiarios',component:VerBeneficiariosComponent},
	{path:'perfil-organizacion-beneficiaria',component:PerfilBeneficiarioComponent},
	{path:'buscar-voluntario',component:BuscarVoluntarioComponent},
	{path:'cambiar-clave',component:CambiarClaveComponent},
	{path:'ver-top',component:VerTopComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
