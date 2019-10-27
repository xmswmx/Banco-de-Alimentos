import { Component, OnInit } from '@angular/core';

import { Beneficiario } from '../../../_services/lbservice/models';

@Component({
  selector: 'app-registrar-beneficiario',
  templateUrl: './registrar-beneficiario.component.html',
  styleUrls: ['./registrar-beneficiario.component.css']
})
export class RegistrarBeneficiarioComponent implements OnInit {

/*
	this.registrarDonanteForm = new FormGroup({
       nombreOrganizacion: new FormControl()
    });"
*/
  constructor() { }

  onSubmit(){
	//var beneficiario = new Beneficiario();
	console.log("Aca se tendria que crear un beneficiario nuevo");
  }
  
  ngOnInit() {
  }

}
