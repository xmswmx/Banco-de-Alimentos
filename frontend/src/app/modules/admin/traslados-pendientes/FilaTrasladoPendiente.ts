import { Beneficiario, EnvioParaBeneficiario, Donacion, Donante, DescripcionGeneral, Traslado, Voluntario, Ubicacion, DescripcionDetallada } from '../../../_services/lbservice/models';
import { GeoPoint } from '../../../_models/GeoPoint';
import { AddressConverter } from '../../../_models/AddressConverter';

/*
	Clase usada para mostrar los datos de un traslado pendiente

	Debe almacenar: traslado, voluntario, donacion, dorigen, ddestino, distancia, fecha 
*/
export class FilaTrasladoPendiente {

	distancia : number;
	constructor(private traslado: Traslado,
				private voluntario:Voluntario, //Puede ser un donante o un beneficiario
				private paquete:any, //Puede ser una donacion o un envio
				private uOrigen: Ubicacion,
				private uDestino: Ubicacion
		){

			//this.distancia=(new AddressConverter).distanceFromTo(uOrigen.puntoGeografico,uDestino.puntoGeografico);
		}

		printDescripcion():string{
			return (this.traslado.descripcion);
		}
		printVoluntario():string{

			return (this.voluntario.nombre + ' ' + this.voluntario.apellido);
		}
		printOrigen():string{

			return (this.uOrigen.direccion);
		}
		printDestino():string{
			return (this.uDestino.direccion);
		}
		getFecha(){
			return this.traslado.fechaEstimada;
		}
		getDistancia(){
			return this.traslado.distancia;
		}
}