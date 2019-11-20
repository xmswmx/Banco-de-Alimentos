import { Component, OnInit } from '@angular/core';
import { Contacto } from '../../../_model/contacto';
import { MockContactoService } from '../../../_services/mock-contacto.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-listar-contacto',
  templateUrl: './listar-contacto.component.html',
  styleUrls: ['./listar-contacto.component.css']
})
export class ListarContactoComponent implements OnInit {
  contactos: Contacto[];
  // static instance: ListarContactoComponent;

  
  constructor(private service:MockContactoService, private router: Router) {
    this.actualizarContactosLocales();
  }

  onRemove(unContacto:Contacto) { 
    this.contactos = this.service.deleteContacto(unContacto);
    
  }

  actualizarContactosLocales() {
    this.contactos = this.service.getContactos()
    // .then(contactos => this.contactos = contactos);
  }


  ngOnInit() {
  }

}
