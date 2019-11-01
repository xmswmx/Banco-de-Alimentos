import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ListarContactoComponent } from './modules/contacto/listar-contacto/listar-contacto.component';
import { RegistrarContactoComponent } from './modules/contacto/registrar-contacto/registrar-contacto.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule }                             from '@angular/common';
  

@NgModule({
  declarations: [
    AppComponent,
    ListarContactoComponent,
    RegistrarContactoComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
