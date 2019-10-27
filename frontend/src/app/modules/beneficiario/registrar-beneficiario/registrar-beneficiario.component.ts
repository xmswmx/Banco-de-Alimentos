import { Component, OnInit } from '@angular/core';

import { LoopBackConfig, BaseLoopBackApi } from '../../../_services/lbservice';

//Voy a usar el model que traje desde LB, tal vez haya que hacer una clase nueva en Angular
import { Beneficiario } from '../../../_services/lbservice/models';  

import { Route } from '@angular/compiler/src/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { BeneficiarioApi } from '../../../_services/lbservice/services';

@Component({
  selector: 'app-registrar-beneficiario',
  templateUrl: './registrar-beneficiario.component.html',
  styleUrls: ['./registrar-beneficiario.component.css']
})
export class RegistrarBeneficiarioComponent implements OnInit {

	registrarBeneficiarioForm: FormGroup;

	
	


	//Creo un beneficiario nuevo
	nuevoBeneficiario : Beneficiario;

  constructor(private beneficiarioApi: BeneficiarioApi, private route: ActivatedRoute , private router:Router) {
	
	this.nuevoBeneficiario =  new Beneficiario();
	
	this.registrarBeneficiarioForm = new FormGroup({
       nombreOrganizacion: new FormControl(),
	   adress: new FormControl(),
	   email: new FormControl(),
	   password1: new FormControl(),
	   password2: new FormControl()
    });

  }

  onSubmit(){
	  
	 //var item=new Item(this.newItemForm.get("itemName").value)
	var beneficiario = new Beneficiario();
	beneficiario.email = "unemail@gmail.com";
	beneficiario.password = "unpassword";
	
	//this.itemApi.create(item).subscribe(()=>{
     // this.router.navigateByUrl("/")
     // })
	this.beneficiarioApi.create(beneficiario).subscribe(()=>{this.router.navigateByUrl("/")})
	
	
	//this.nuevoBeneficiario = new Beneficiario();
	console.log("Aca se tendria que crear un beneficiario nuevo");
  }
  
  ngOnInit() {
  }

}
