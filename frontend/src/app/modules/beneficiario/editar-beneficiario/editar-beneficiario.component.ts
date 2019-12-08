import { Component, OnInit } from '@angular/core';
import { Beneficiario, Ubicacion } from '../../../_services/lbservice/models';
import { Router, ActivatedRoute } from '@angular/router';
import { BeneficiarioApi, UbicacionApi } from '../../../_services/lbservice/services';

//Revisar si se usa
import { LoopBackConfig, BaseLoopBackApi } from '../../../_services/lbservice';
import { Route } from '@angular/compiler/src/core';
import { FormGroup, FormControl, NgForm } from '@angular/forms';

@Component({
  selector: 'editar-beneficiario',
  templateUrl: './editar-beneficiario.component.html',
  styleUrls: ['./editar-beneficiario.component.css']
})
export class EditarBeneficiarioComponent implements OnInit {
	// editarBeneficiarioForm: FormGroup;
  beneficiario: Beneficiario;
	username: string;
	address: string = 'Cargando..';
	cantAtendidos: number;
	email: string;


  constructor(private ubiApi: UbicacionApi, private beneficiarioApi: BeneficiarioApi, private route: ActivatedRoute, private router: Router) {
    
    this.beneficiario = beneficiarioApi.getCachedCurrent();
		this.beneficiarioApi.getUbicacion(this.beneficiario.id, true).subscribe((ubicacion: Ubicacion) => {
			this.address = ubicacion.direccion;	})
		this.username = this.beneficiario.username;
		this.cantAtendidos = this.beneficiario.cantidadAtendidos;
		this.email = this.beneficiario.email;

  }

  ngOnInit() {
  }

  onSubmit(beneficiarioForm: NgForm){
    console.log(beneficiarioForm.value);
    console.log(beneficiarioForm.valid);

  }


}
