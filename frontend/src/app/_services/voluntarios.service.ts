import { Injectable } from '@angular/core';
import { Vehiculo, Voluntario, Traslado, Ubicacion, Volumen, Donacion, EnvioParaBeneficiario } from 'src/app/_services/lbservice/models';
import { VehiculoApi, VoluntarioApi, VolumenApi, UbicacionApi, DonacionApi, EnvioParaBeneficiarioApi } from 'src/app/_services/lbservice';
import { AddressConverter } from 'src/app/_models/AddressConverter';
import { Router, ActivatedRoute } from '@angular/router';

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
	todosLosVoluntarios:Voluntario[] = []; //listo
	voluntariosQuePueden:Voluntario[] = []; //listo
	converter : AddressConverter = new AddressConverter;
	constructor(private router:Router, private apiVehiculo:VehiculoApi, private apiEnvio:EnvioParaBeneficiarioApi, private apiDonacion:DonacionApi,private apiVoluntario: VoluntarioApi) {
	}

	//Recibe parámetros para setear el traslado, distancia, volumen que los voluntarios deben cumplir
	//para aparecer en la próxima lista en pedirse
	setTraslado(traslado:Traslado, origen: string, destino:string):Promise<string>{
		return new Promise((resolve)=>{
			console.log('entro al set');
			if (traslado.tipo=='donacion'){
				//Caso donacion
				this.apiDonacion.getVolumen(traslado.idDonacionTrasladadaAlBanco,true).subscribe((volumen:Volumen)=>{
					this.totalVolumen=volumen.alto*volumen.ancho*volumen.largo;
					let o = this.converter.coordinateForAddress(origen);
					let d = this.converter.coordinateForAddress(destino);
					this.distancia=this.converter.distanceFromTo(o,d);
					console.log('se seteo la distancia del service');
					console.log(this.distancia);
				}) //Fin getVolumen
			} //Fin caso donacion
			else {
				//Caso envio
				this.apiEnvio.getVolumen(traslado.idEnvioTrasladadoAUnBeneficiario,true).subscribe((volumen:Volumen)=>{
					this.totalVolumen=volumen.alto*volumen.ancho*volumen.largo;
					let o = this.converter.coordinateForAddress(origen);
					let d = this.converter.coordinateForAddress(destino);
					this.distancia=this.converter.distanceFromTo(o,d);
				}) //Fin getVolumen
			} //Fin caso envio


			//Recargo la lista y la filtro por 
			this.apiVoluntario.find().subscribe((voluntarios:Voluntario[])=>{
				//Me quedo solo los de la distancia apropiada
				this.todosLosVoluntarios=voluntarios;
				console.log('se levantan todos los voluntarios');
				console.log(this.todosLosVoluntarios);
				this.todosLosVoluntarios = this.todosLosVoluntarios.filter(volun => volun.distanciaMaxima > this.distancia);
				console.log('me quede solo con los que tienen distancia maxima mayor a la distancia');
				console.log(this.todosLosVoluntarios);
				//Por cada uno voy a pushearlo solo si cumple con el volumen
				this.voluntariosQuePueden= [];
				for(let voluntario of this.todosLosVoluntarios){
					if (voluntario.tieneVehiculo == 'si') {
					this.apiVoluntario.getVehiculo(voluntario.id,true).subscribe((vehiculo)=>{
							this.apiVehiculo.getVolumen(vehiculo.id,true).subscribe((volumen:Volumen)=>{
								if ((volumen.alto*volumen.ancho*volumen.largo)>this.totalVolumen){
									this.voluntariosQuePueden.push(voluntario);
									console.log('Se agregó un voluntario');
								} //Fin if volumen >
							}) // fin getvolumen
						}) //Fin gevehiculo
					} else {
						//Si no tiene vehiculo que lo lleve en una caja tipo glovo, de 1 metro cubico
							if (0<=this.totalVolumen){ //Poner en 1
								this.voluntariosQuePueden.push(voluntario);
								console.log('Se agregó un voluntario');
								this.router.navigate(['/buscar-voluntarios']);
							} //Fin if
						} //Fin else
					}//Fin for voluntario
					//Problema: el programa se va antes de que se cumplan las promesas
					//this.router.navigate(['/buscar-voluntarios']);
			})// Fin voluntarios promesa
		}); //Fin promesa
	} //Fin setTraslado

	//Devuelve una lista de voluntarios filtrada por los que cumplen con la distancia y volumen total
	//Para el último traslado seteado
	getVoluntariosParaElTraslado():Promise<Voluntario[]> {


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

		//return [vol1,vol2];
		return new Promise((resolve)=>{this.voluntariosQuePueden;})
	}
}
