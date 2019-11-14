import { GeoPoint } from './GeoPoint';

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