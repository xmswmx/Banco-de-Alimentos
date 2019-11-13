import { Component, OnInit } from '@angular/core';

import { LoopBackConfig, BaseLoopBackApi } from '../../../_services/lbservice';
import { Ubicacion, Donante, PersonaDeContacto } from '../../../_services/lbservice/models';  
import { Route } from '@angular/compiler/src/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { UbicacionApi, DonanteApi, PersonaDeContactoApi } from '../../../_services/lbservice/services';

@Component({
  selector: 'app-registrar-donante',
  templateUrl: './registrar-donante.component.html',
  styleUrls: ['./registrar-donante.component.css']
})
export class RegistrarDonanteComponent implements OnInit {

	form: FormGroup;
	nuevoDonante : Donante;
	colPersonasDeContacto = [];


	constructor(private ubicacionApi: UbicacionApi, private personasDeContactoApi: PersonaDeContactoApi, private donanteApi: DonanteApi, private route: ActivatedRoute , private router:Router) {

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

	}

/*
DonanteInterface {
  "cuil": string;
  "realm"?: string;
  "username"?: string;
  "email": string;
  "emailVerified"?: boolean;
  "id"?: any;
  "password"?: string;
  accessTokens?: any[];
  personasDeContacto?: PersonaDeContacto[];
  ubicacion?: Ubicacion;
  insignia?: Insignia[];
  donaciones?: Donacion[];
}
*/
	onSubmit(){
		//Validar campos
		if (this.form.get("password1").value != this.form.get("password2").value) {
			alert('Las contraseñas no coinciden');
			return 0
		} 

		//Postear un donante nuevo con los datos recibidos
		this.nuevoDonante = new Donante;
		this.nuevoDonante.username = this.form.get("razonSocial").value;
		this.nuevoDonante.cuil = this.form.get("cuil").value;
		

		//Necesito crearle su ubicacion 
		let nuevaUbicacion = new Ubicacion;
		nuevaUbicacion.direccion = this.form.get("direccion").value;
		this.nuevoDonante.ubicacion = nuevaUbicacion;
		//nuevaUbicacion.puntoGeografico = this.obtenerGeoPointDe(this.form.get("direccion").value);

		this.nuevoDonante.email = this.form.get("email").value;
		this.nuevoDonante.password = this.form.get("password1").value;

		//Inicio el array de personas de contacto
		this.nuevoDonante.personasDeContacto=[];

		/* le pusheo cada persona de la lista
		 * No funcionó
				
		for (let persona of this.colPersonasDeContacto){
			this.nuevoDonante.personasDeContacto.push(persona);	
		}

		*/

		//Llamo a la api para crear el donante y con su id creo las otras entidades que le pertenecen
		this.donanteApi.create(this.nuevoDonante).subscribe((donanteCreado:Donante)=>{
			//Creo todos sus contactos
			for (let persona of this.colPersonasDeContacto){
				persona.idDonante = donanteCreado.id;
				this.personasDeContactoApi.create(persona);
			}
			//Creo su ubicación
			this.nuevoDonante.ubicacion.idDonante= donanteCreado.id;
			this.ubicacionApi.create(this.nuevoDonante.ubicacion)

			//Me voy (Una mejora sería asegurarme que se registraron las cosas antes con .subscribe)
			this.router.navigateByUrl("/login");
			alert('Se registró exitosamente');
		});			
	}

	/*
		Colocar acá la fauncion de google para calcular el geopoint
	*/
	obtenerGeoPointDe(unaDireccion:String){
		return 0
	}

	ngOnInit() {
	}

}
