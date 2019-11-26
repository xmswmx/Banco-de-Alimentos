import { Injectable } from '@angular/core';
import { Voluntario, Traslado, Ubicacion, Volumen, Donacion, EnvioParaBeneficiario } from 'src/app/_services/lbservice/models';
import { VoluntarioApi, VolumenApi, UbicacionApi, DonacionApi, EnvioParaBeneficiarioApi } from 'src/app/_services/lbservice';
import { AddressConverter } from 'src/app/_models/AddressConverter'

@Injectable({
  providedIn: 'root'
})
export class VoluntariosService {
/*
	El objetivo de este servicio es poder asignarle datos necesarios para filtrar
	una lista de voluntarios leida de la API y obtener los datos necesarios
	para mostrarlos y enviarles un correo con un código de confirmación
*/

	totalVolumen:number; //Listo
	distancia:number; //Listo
	todosLosVoluntarios:Voluntario[] = []; // !
	voluntariosQuePueden:Voluntario[] = []; 
	converter : AddressConverter = new AddressConverter;
	constructor(private apiEnvio:EnvioParaBeneficiarioApi, private apiDonacion:DonacionApi,private apiVoluntario: VoluntarioApi) {
		apiVoluntario.find().subscribe((voluntarios:Voluntario[])=>{
			this.todosLosVoluntarios=voluntarios;
			for(let voluntario of this.todosLosVoluntarios){
				//Necesito agregarle su .vehiculo.volumen en caso de tener
			}			
		})

	}

	//Recibe parámetros para setear el traslado, distancia, volumen que los voluntarios deben cumplir
	//para aparecer en la próxima lista en pedirse
	setTraslado(traslado:Traslado, origen: string, destino:string){
		//Averiguar
		this.totalVolumen;
		if (traslado.tipo=='donacion'){
			//Caso donacion
			this.apiDonacion.getVolumen(traslado.idDonacionTrasladadaAlBanco,true).subscribe((volumen:Volumen)=>{
				this.totalVolumen=volumen.alto*volumen.ancho*volumen.largo;
				let o = this.converter.coordinateForAddress(origen);
				let d = this.converter.coordinateForAddress(destino);
				this.distancia=this.converter.distanceFromTo(o,d);
			}) //Fin getVolumen
		} //Fin caso donacion
		else {
			//Caso envio
			this.apiEnvio.getVolumen(traslado.idEnvioTrasladadoAUnBeneficiario).subscribe((volumen:Volumen)=>{
				this.totalVolumen=volumen.alto*volumen.ancho*volumen.largo;
				let o = this.converter.coordinateForAddress(origen);
				let d = this.converter.coordinateForAddress(destino);
				this.distancia=this.converter.distanceFromTo(o,d);
			}) //Fin getVolumen
		} //Fin caso envio
	} //Fin setTraslado

	//Devuelve una lista de voluntarios filtrada por los que cumplen con la distancia y volumen total
	//Para el último traslado seteado
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
