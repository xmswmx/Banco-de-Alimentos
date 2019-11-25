import { GeoPoint } from './GeoPoint';
import { AddressConverter } from './AddressConverter';
import { Ubicacion } from '../_services/lbservice/models';


/*
	Clase usada para obtener la ubicación de BALP
*/
export class BALP {
	converter:AddressConverter;
	ubicacionBALP:Ubicacion;
	constructor(){
		let direccion = "Calle 65 (ex 8) e 124 y 125, B1923 Berisso, Buenos Aires";
		this.converter=new AddressConverter;
		this.ubicacionBALP = new Ubicacion;
		this.ubicacionBALP.direccion=direccion;
		this.ubicacionBALP.puntoGeografico=this.converter.coordinateForAddress(direccion);
	}

}