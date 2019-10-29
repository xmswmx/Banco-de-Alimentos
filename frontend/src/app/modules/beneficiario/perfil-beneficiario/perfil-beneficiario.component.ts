import { Component, OnInit } from '@angular/core';
import { LoopBackConfig, BaseLoopBackApi } from '../../../_services/lbservice';
import { Beneficiario } from '../../../_services/lbservice/models';  
import { Route } from '@angular/compiler/src/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { BeneficiarioApi } from '../../../_services/lbservice/services';

@Component({
  selector: 'app-perfil-beneficiario',
  templateUrl: './perfil-beneficiario.component.html',
  styleUrls: ['./perfil-beneficiario.component.css']
})
export class PerfilBeneficiarioComponent implements OnInit {

	editarBeneficiarioForm: FormGroup;
	loggedBeneficiario: Beneficiario;
  constructor(private beneficiarioApi: BeneficiarioApi, private route: ActivatedRoute , private router:Router) {
		
	this.editarBeneficiarioForm = new FormGroup({
       username: new FormControl(),
	   adress: new FormControl(),
	   cantAtendidos: new FormControl(),
	   email: new FormControl(),
	   password: new FormControl(),
    });
	this.loggedBeneficiario = beneficiarioApi.getCachedCurrent();

	}

onSubmit(){
	  
	this.loggedBeneficiario.username = this.editarBeneficiarioForm.get("username").value;
	this.loggedBeneficiario.cantidadAtendidos = this.editarBeneficiarioForm.get("cantAtendidos").value;
	//this.loggedBeneficiario.direccion = this.editarBeneficiarioForm.get("adress").value;
	this.loggedBeneficiario.email = this.editarBeneficiarioForm.get("email").value;
	this.loggedBeneficiario.password = this.editarBeneficiarioForm.get("password").value;
	
	this.beneficiarioApi.upsert(this.loggedBeneficiario).subscribe(()=>{this.router.navigateByUrl("/")})
	
  }
  
 borrar(){
	 //Hay un problemita en esta linea, se hacen 2 cosas: se borra la cuenta y se logout.. pero como puedo hacer logout si mi cuenta no existe?
	 //Tengo que buscar alguna forma de limpiar la cache del navegador antes de cargar otra pagina
	 //Igual anda con posibilidad de un eventual bug :)
	 this.beneficiarioApi.deleteById(this.loggedBeneficiario.id).subscribe(()=>{this.beneficiarioApi.logout();this.router.navigateByUrl("/")});
 }
 
  ngOnInit() {
  }

}
