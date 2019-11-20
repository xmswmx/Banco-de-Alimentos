import { Component, OnInit } from '@angular/core';
//Voy a usar el model que traje desde LB, tal vez haya que hacer una clase nueva en Angular
import { Beneficiario, Ubicacion } from '../../../_services/lbservice/models';  
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { BeneficiarioApi, UbicacionApi } from '../../../_services/lbservice/services';
import { AddressConverter } from '../../../_models/AddressConverter';
import { LoopBackConfig, BaseLoopBackApi } from '../../../_services/lbservice';
import { Route } from '@angular/compiler/src/core';

@Component({
	selector: 'app-registrar-beneficiario',
	templateUrl: './registrar-beneficiario.component.html',
	styleUrls: ['./registrar-beneficiario.component.css']
})
export class RegistrarBeneficiarioComponent implements OnInit {
	
	registrarBeneficiario: FormGroup;
	nuevoBeneficiario : Beneficiario;
	convertidorDeDirecciones : AddressConverter;
	
	constructor(private beneficiarioApi: BeneficiarioApi, private route: ActivatedRoute , private router:Router) {
		
		this.nuevoBeneficiario =  new Beneficiario();
		this.convertidorDeDirecciones = new AddressConverter();	
		this.registrarBeneficiario = new FormGroup({
			nombreOrganizacion: new FormControl(),
			direccion: new FormControl(),
			cantidadAtendidos: new FormControl(),
			email: new FormControl('',[Validators.required,Validators.email]),
			password: new FormControl(),
			passwordConfirm: new FormControl()
		});
		
	}
	
	onSubmit(){
		console.warn(this.registrarBeneficiario.value);
		this.nuevoBeneficiario =  new Beneficiario();
		this.nuevoBeneficiario.username =  this.registrarBeneficiario.get("nombreOrganizacion").value;
		this.nuevoBeneficiario.cantidadAtendidos=  this.registrarBeneficiario.get("cantidadAtendidos").value;
		this.nuevoBeneficiario.email=  this.registrarBeneficiario.get("email").value;
		this.nuevoBeneficiario.password=  this.registrarBeneficiario.get("password").value;

		// this.nuevoBeneficiario.ubicacion = this.generarUbicacion(this.registrarBeneficiario.get("direccion").value);

		this.beneficiarioApi.create(this.nuevoBeneficiario).subscribe((beneficiarioCreado:Beneficiario)=>{
			this.router.navigateByUrl("/login");
			alert('Se registró exitosamente');		
			// this.nuevoBeneficiario.ubicacion.beneficiarioId = beneficiarioCreado.id;
			// this.ubicacionApi.create(this.nuevoBeneficiario.ubicacion).subscribe(()=>{	
			//beneficiario.adress = this.registrarBeneficiarioForm.get("adress").value;
			//Hay que trabajar la ubicacion
			//this.itemApi.create(item).subscribe(()=>{
			// this.router.navigateByUrl("/")
			// })
			//this.nuevoBeneficiario = new Beneficiario();
			//console.log("Aca se tendria que crear un beneficiario nuevo");
		})
			
	}
		

	

	generarUbicacion(direccion:string){
		let nuevaUbicacion = new Ubicacion;
		nuevaUbicacion.direccion = direccion;
		nuevaUbicacion.puntoGeografico = this.convertidorDeDirecciones.coordinateForAddress(direccion);
		return nuevaUbicacion;
	}

	get emailIsInvalid(){	
		return this.registrarBeneficiario.get('email').dirty && !this.registrarBeneficiario.get('email').valid
	}
	
	get passwordsNotEquals(){
		return this.registrarBeneficiario.get('passwordConfirm').dirty && (this.registrarBeneficiario.get('password').value != this.registrarBeneficiario.get('passwordConfirm').value) 
	}
	
	ngOnInit() {
	}
	
}
