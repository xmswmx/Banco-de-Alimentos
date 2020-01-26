import { GeoPoint } from './GeoPoint';

// En un futuro, el cálculo de la distancia entre dos 
// puntos en un mapa se hará consultando un servicio 
// propuesto por alguna compañía como google
export class AddressConverter {
	constructor(){
	}
	coordinateForAddress(address:String){
		return new GeoPoint(1,1);
	}
	distanceFromTo(origin:GeoPoint,destination:GeoPoint){
		return Math.random()*100;
	}
}