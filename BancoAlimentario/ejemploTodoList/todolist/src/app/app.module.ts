import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodolistComponent } from './todolist/todolist.component';
//import { NewItemComponent } from './new-item/new-item.component';
import {ReactiveFormsModule} from '@angular/forms';
import { Item } from './model/Item';
import { NewItemComponent } from './new-item/new-item.component';


@NgModule({
  declarations: [
    AppComponent,
    TodolistComponent,
    NewItemComponent,
  // NewItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


