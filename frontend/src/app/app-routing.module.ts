import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodolistComponent } from './modules/beneficiario/todolist/todolist.component';
import { NewItemComponent } from './modules/beneficiario/new-item/new-item.component';
import { HomeComponent } from './modules/home/home.component';
import { RegistrarDonanteComponent } from './modules/donante/registrar-donante/registrar-donante.component';
import { RegistrarBeneficiarioComponent } from './modules/beneficiario/registrar-beneficiario/registrar-beneficiario.component';
import { RegistrarVoluntarioComponent } from './modules/voluntario/registrar-voluntario/registrar-voluntario.component';
import { LoginComponent } from './modules/login/login.component';
import { PerfilVoluntarioComponent } from './modules/voluntario/perfil-voluntario//perfil-voluntario.component';
import { BuscarVoluntarioComponent } from './modules/voluntario/buscar-voluntario//buscar-voluntario.component';


const routes: Routes = [
	{path:'',redirectTo:'/home',pathMatch:'full'},
	{path:'home',component:HomeComponent},
	{path:'registrar-donante',component:RegistrarDonanteComponent},
	{path:'registrar-beneficiario',component:RegistrarBeneficiarioComponent},
	{path:'registrar-voluntario',component:RegistrarVoluntarioComponent},
	{path:'login',component:LoginComponent},
	{path:'perfil-voluntario',component:PerfilVoluntarioComponent},
	{path:'buscar-voluntario',component:BuscarVoluntarioComponent},
	{path:'new-item',component:NewItemComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
