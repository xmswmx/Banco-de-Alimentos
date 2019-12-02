import { Beneficiario, EnvioParaBeneficiario, Donacion, Donante, DescripcionGeneral, Traslado, Voluntario, Ubicacion, DescripcionDetallada } from '../_services/lbservice/models';
import { GeoPoint } from './GeoPoint';
import { AddressConverter } from './AddressConverter';

/*
	Clase usada para mostrar los datos de un traslado pendiente

	Debe almacenar: traslado, voluntario, donacion, dorigen, ddestino, distancia, fecha 
*/
export class FilaTrasladoPendiente {

	distancia : number;
	constructor(private traslado: Traslado,
				private organizacion:any,
				private paquete:any,
				private uOrigen: Ubicacion,
				private uDestino: Ubicacion
		){

			//this.distancia=(new AddressConverter).distanceFromTo(uOrigen.puntoGeografico,uDestino.puntoGeografico);
		}

}