import { Injectable } from '@angular/core';
import { Contacto } from "../_model/contacto";

@Injectable({
  providedIn: 'root'
})
export abstract class AbstractContactoService {

  constructor() { };
  // abstract getContactos(): Promise<Contacto[]>;
}
