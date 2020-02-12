import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class DataShareService {

  titulo: string = "";


  constructor() { }

  cambiarTitulo(nuevoTitulo: string){
    this.titulo = nuevoTitulo;
  }

}
