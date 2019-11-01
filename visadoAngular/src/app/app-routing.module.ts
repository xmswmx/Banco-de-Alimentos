import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListarContactoComponent } from './modules/contacto/listar-contacto/listar-contacto.component';
import { RegistrarContactoComponent } from './modules/contacto/registrar-contacto/registrar-contacto.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
	{path:'',redirectTo:'/home',pathMatch:'full'},
	{path:'home',component:ListarContactoComponent},  
  {path:'listar-contacto',component:ListarContactoComponent},
  {path:'registrar-contacto',component:RegistrarContactoComponent},   
  {path:'registrar-contacto/:idx',component:RegistrarContactoComponent}, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
