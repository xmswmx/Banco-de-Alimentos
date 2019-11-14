import { Component, OnInit } from '@angular/core';

import { LoopBackConfig, BaseLoopBackApi } from '../../../_services/lbservice';
import { Ubicacion, Donante, PersonaDeContacto } from '../../../_services/lbservice/models';  
import { Route } from '@angular/compiler/src/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { UbicacionApi, DonanteApi, PersonaDeContactoApi } from '../../../_services/lbservice/services';
import { GeoPoint } from '../../../_models/GeoPoint';
import { AddressConverter } from '../../../_models/AddressConverter';

@Component({
  selector: 'app-registrar-donante',
  templateUrl: './registrar-donante.component.html',
  styleUrls: ['./registrar-donante.component.css']
})
export class RegistrarDonanteComponent implements OnInit {

	form: FormGroup;
	nuevoDonante : Donante;
	colPersonasDeContacto = [];
	convertidorDeDirecciones : AddressConverter;


	constructor(private ubicacionApi: UbicacionApi, private personasDeContactoApi: PersonaDeContactoApi, private donanteApi: DonanteApi, private route: ActivatedRoute , private router:Router) {

		//Se crea el nuevo donante y los controladores de los campos
		this.nuevoDonante =  new Donante();
		
		//Instancio el convertidor de direcciones (mock)
		this.convertidorDeDirecciones = new AddressConverter();

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

	//Se invoca para agregar una Persona de Contacto
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

	//Se invoca cuando se "Registra el nuevo donante"
	onSubmit(){
		//Validar campos
		if (this.form.get("password1").value != this.form.get("password2").value) {
			alert('Las contraseñas no coinciden');
			return 0
		} 
		if (this.colPersonasDeContacto.length==0){
			alert('Debe ingresar al menos una persona de contacto');
			return 0;
		}

		//Postear un donante nuevo con los datos recibidos
		this.nuevoDonante = new Donante;
		this.nuevoDonante.username = this.form.get("razonSocial").value;
		this.nuevoDonante.cuil = this.form.get("cuil").value;
		this.nuevoDonante.email = this.form.get("email").value;
		this.nuevoDonante.password = this.form.get("password1").value;
		this.nuevoDonante.ubicacion = this.generarUbicacion(this.form.get("direccion").value);
		this.nuevoDonante.personasDeContacto=[];

		//Llamo a la api para crear el donante y con su id creo las otras entidades que le pertenecen
		this.donanteApi.create(this.nuevoDonante).subscribe((donanteCreado:Donante)=>{
			//Creo su ubicación
			this.nuevoDonante.ubicacion.idDonante= donanteCreado.id;
			this.ubicacionApi.create(this.nuevoDonante.ubicacion).subscribe(()=>{
				//Creo sus contactos
				let contadorContactos = 0;
				let totalDeContactos = this.nuevoDonante.personasDeContacto.length;
				for (let persona of this.colPersonasDeContacto){
					persona.idDonante = donanteCreado.id;
					this.personasDeContactoApi.create(persona).subscribe(()=>{
						//Si soy el último contacto me voy
						if (contadorContactos < totalDeContactos) {
							//No soy el último
							contadorContactos++
						} else {
							//Soy el último
							this.router.navigateByUrl("/login");
							alert('Se registró exitosamente');
						}
					})
				}
			})
		});			
	}

	generarUbicacion(direccion:string){
		let nuevaUbicacion = new Ubicacion;
		nuevaUbicacion.direccion = direccion;
		nuevaUbicacion.puntoGeografico = this.convertidorDeDirecciones.coordinateForAddress(direccion);
		return nuevaUbicacion;
	}

	ngOnInit() {
	}

}
