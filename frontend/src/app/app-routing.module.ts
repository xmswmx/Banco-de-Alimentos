import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodolistComponent } from './modules/beneficiario/todolist/todolist.component';
import { NewItemComponent } from './modules/beneficiario/new-item/new-item.component';
import { HomeComponent } from './modules/home/home.component';
import { RegistrarDonanteComponent } from './modules/donante/registrar-donante/registrar-donante.component';
import { RegistrarBeneficiarioComponent } from './modules/beneficiario/registrar-beneficiario/registrar-beneficiario.component';

const routes: Routes = [
	{path:'',redirectTo:'/home',pathMatch:'full'},
	{path:'home',component:HomeComponent},
	{path:'registrar-donante',component:RegistrarDonanteComponent},
	{path:'registrar-beneficiario',component:RegistrarBeneficiarioComponent},
	{path:'new-item',component:NewItemComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
