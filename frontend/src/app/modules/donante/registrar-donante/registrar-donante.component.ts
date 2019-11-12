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
		   password2: new FormControl(),
		   personaNombre: new FormControl(),
		   personaApellido: new FormControl(),
		   personaDni: new FormControl(),
		   personaEmail: new FormControl(),
		   personaCelular: new FormControl()
	    });


	}

	agregarContacto(){
		//Validar los campos
		if ((this.form.get("personaEmail").value == null) ||
			(this.form.get("personaApellido").value == null) ||
			(this.form.get("personaDni").value == null) ||
			(this.form.get("personaEmail").value == null) ||
			(this.form.get("personaCelular").value == null)) {
			alert('Por favor, complete todos los datos solicitados de la persona de contacto para poder registrarla');
			return 0;
		}

		//Agregar la persona al Array
		let nuevaPersona = new PersonaDeContacto;
		nuevaPersona.nombre = this.form.get("personaNombre").value;
		nuevaPersona.apellido = this.form.get("personaApellido").value;
		nuevaPersona.dni = this.form.get("personaDni").value;
		nuevaPersona.email = this.form.get("personaEmail").value;
		nuevaPersona.telefono = this.form.get("personaCelular").value;
		this.colPersonasDeContacto.push(nuevaPersona);

		//Limpiar los campos
		this.form.get("personaNombre").reset();
		this.form.get("personaApellido").reset();
		this.form.get("personaDni").reset();
		this.form.get("personaEmail").reset();
		this.form.get("personaCelular").reset();


		console.log(this.colPersonasDeContacto);
	}

	onSubmit(){
		alert("Vamo a calmarno, todavía no lo terminé 🤗");
		//Validar campos

		//Postear un donante nuevo con los datos recibidos

		//Para cada contacto de colPersonasDeContacto
			//Postear contacto
			//Agregarlo al donante
	}

	ngOnInit() {
	}

}
