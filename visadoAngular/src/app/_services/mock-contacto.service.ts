import { Injectable } from '@angular/core';
import { AbstractContactoService } from "./abstract-contacto.service";
import { Contacto } from "../_model/contacto";

@Injectable({  providedIn: 'root'})
export class MockContactoService extends AbstractContactoService {
  contactos: Contacto[];
  contacto : Contacto;

  constructor(){
    super();
    this.contacto = new Contacto();
    this.contactos=[];
    this.contacto.setContacto("Mark","Otto",30058723,"mark.otto@hotmail.com",234515345085);    
    this.contactos.push(this.contacto);
  }

  getContactos(){
    return this.contactos;
  }

  addContacto(unContacto:Contacto){
    this.contactos.push(unContacto);
  }

  deleteContacto(unContacto:Contacto){
	this.contactos = this.contactos.filter(i=>unContacto!==i);
    return this.contactos;
  }

  // getContactos(): Promise<Contacto[]> {
  //   return new Promise((resolve) => {
  //     resolve(this.contactos);
  //   })
  // };

  // agregarContactoEnDonante(Contacto: Contacto): Promise<Object> {
  //   return new Promise((resolve) => {

  //     this.contactos.push(Contacto);
  //     resolve();
  //   });
  // };
  

}
