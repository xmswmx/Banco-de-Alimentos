import { Component, OnInit } from '@angular/core';

import { LoopBackConfig, BaseLoopBackApi } from '../../../_services/lbservice';
import { Donante, PersonaDeContacto } from '../../../_services/lbservice/models';  
import { Route } from '@angular/compiler/src/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { DonanteApi, PersonaDeContactoApi } from '../../../_services/lbservice/services';

@Component({
  selector: 'app-registrar-donante',
  templateUrl: './registrar-donante.component.html',
  styleUrls: ['./registrar-donante.component.css']
})
export class RegistrarDonanteComponent implements OnInit {

	form: FormGroup;
	nuevoDonante : Donante;
	colPersonasDeContacto = [];


	constructor(private donanteApi: DonanteApi, private route: ActivatedRoute , private router:Router) {

		this.nuevoDonante =  new Donante();
	
		this.form = new FormGroup({
	       razonSocial: new FormControl(),
		   cuil: new FormControl(),
		   direccion: new FormControl(),
		   email: new FormControl(),
		   password1: new FormControl(),
		   password2: new FormControl()
	    });


	}

	ngOnInit() {
	}

}
