export class GeoPoint {
	lat: number;
	lng: number;
	type: string;
	coordinates: number[];
	constructor(lat:number,lng:number){
		this.lat = lat;
		this.lng = lng;
	}
}