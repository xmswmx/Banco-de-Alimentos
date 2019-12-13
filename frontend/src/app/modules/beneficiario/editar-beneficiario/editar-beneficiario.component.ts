import { Component, OnInit } from '@angular/core';
import { Beneficiario, Ubicacion } from '../../../_services/lbservice/models';
import { Router, ActivatedRoute } from '@angular/router';
import { BeneficiarioApi, UbicacionApi } from '../../../_services/lbservice/services';
import { FormGroup, FormControl, NgForm, Validators } from '@angular/forms';


//Revisar si se usa
import { LoopBackConfig, BaseLoopBackApi } from '../../../_services/lbservice';
import { Route } from '@angular/compiler/src/core';


@Component({
	selector: 'editar-beneficiario',
	templateUrl: './editar-beneficiario.component.html',
	styleUrls: ['./editar-beneficiario.component.css']
})

export class EditarBeneficiarioComponent implements OnInit {
	beneficiario: Beneficiario;
	direccion: string = 'Cargando..';  
	formBeneficiario: FormGroup;


	constructor(private ubiApi: UbicacionApi, private beneficiarioApi: BeneficiarioApi, private route: ActivatedRoute, private router: Router) {
		
		this.beneficiario = beneficiarioApi.getCachedCurrent();
		this.beneficiarioApi.getUbicacion(this.beneficiario.id, true).subscribe((ubicacion: Ubicacion) => {
			this.direccion = ubicacion.direccion;	})
			this.formBeneficiario = new FormGroup({
				username : new FormControl('',[Validators.required,
					Validators.minLength(4)]),
				direccion : new FormControl(),
				cantidadAtendidos : new FormControl(),
				email: new FormControl('', [Validators.required, Validators.email]),
			});
	}
	get username() {
		return this.formBeneficiario.get('username')
	}
	get direccionForm() {
		return this.formBeneficiario.get('direccion')
	}
	get email() {
		return this.formBeneficiario.get('email')
	}	
	get cantidadAtendidos() {
		return this.formBeneficiario.get('cantidadAtendidos')
	}
	get emailIsInvalid() {
		return this.formBeneficiario.get('email').dirty && !this.formBeneficiario.get('email').valid
	}

	ngOnInit() {	
	}

	onSubmit(beneficiarioForm: NgForm){
		console.log(beneficiarioForm.value);
		console.log(beneficiarioForm.valid);
	}



}
