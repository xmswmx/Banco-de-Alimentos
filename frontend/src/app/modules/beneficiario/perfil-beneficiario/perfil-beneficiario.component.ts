import { Component, OnInit } from '@angular/core';
import { LoopBackConfig, BaseLoopBackApi } from '../../../_services/lbservice';
import { Beneficiario, Ubicacion } from '../../../_services/lbservice/models';  
import { Route } from '@angular/compiler/src/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { BeneficiarioApi, UbicacionApi } from '../../../_services/lbservice/services';

@Component({
  selector: 'app-perfil-beneficiario',
  templateUrl: './perfil-beneficiario.component.html',
  styleUrls: ['./perfil-beneficiario.component.css']
})
export class PerfilBeneficiarioComponent implements OnInit {

	editarBeneficiarioForm: FormGroup;
	loggedBeneficiario: Beneficiario;
	username: string;
	address: string = 'Cargando..';
	cantAtendidos: number;
	email: string;
  constructor(private ubiApi: UbicacionApi,private beneficiarioApi: BeneficiarioApi, private route: ActivatedRoute , private router:Router) {
		
	this.loggedBeneficiario = beneficiarioApi.getCachedCurrent();
	this.beneficiarioApi.getUbicacion(this.loggedBeneficiario.id,true).subscribe((ubicacion:Ubicacion)=>{
		this.address = ubicacion.direccion;
	})
	this.username = this.loggedBeneficiario.username;
	this.cantAtendidos = this.loggedBeneficiario.cantidadAtendidos;
	this.email = this.loggedBeneficiario.email;


	}
 
 
  ngOnInit() {
  }

}
