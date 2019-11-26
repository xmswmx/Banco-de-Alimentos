import { Injectable } from '@angular/core';
import { Voluntario, Traslado, Ubicacion, Volumen } from 'src/app/_services/lbservice/models'

@Injectable({
  providedIn: 'root'
})
export class VoluntariosService {
/*
	El objetivo de este servicio es poder asignarle datos necesarios para filtrar
	una lista de voluntarios leida de la API y obtener los datos necesarios
	para mostrarlos y enviarles un correo con un código de confirmación
*/
	//Debe incluir los voluntarios y también su ubicación
	todosLosVoluntarios:Voluntario[] = []; 
	voluntariosQuePueden:Voluntario[] = []; 
	constructor() {

	}

	//Debe recibir el traslado, segun su tipo con su envio+beneficiario+ubicacion
	// o donacion+donante+ubicacion
	setTraslado(traslado:Traslado, origen: string, destino:string){
		//Averiguar
		let volumenTraslado:Volumen;

		//Distancia
		let distancia:number;

		//Obtener su donacion o envio

	}

	getVoluntariosParaElTraslado():Voluntario[]{


		//Mock
		let vol1 = new Voluntario;
		vol1.nombre = 'Pepe';
		vol1.apellido = 'Florán';
		vol1.email = 'p.floran@hotmail.com';
		let ub1 = new Ubicacion;
		ub1.direccion = 'La plata, 136 Numero 1234';
		vol1.ubicacion = ub1;
		vol1.telefono = 15232424;

		let vol2 = new Voluntario;
		vol2.nombre = 'Julia';
		vol2.apellido = 'Cantilo';
		vol2.email = 'jcantilo@outlook.com';
		let ub2 = new Ubicacion;
		ub2.direccion = 'La plata, 23 Numero 1252';
		vol2.ubicacion = ub2;
		vol2.telefono = 12537534;

		return [vol1,vol2];
	}
}
