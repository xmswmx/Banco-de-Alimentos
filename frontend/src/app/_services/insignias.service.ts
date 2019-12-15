import { Injectable } from '@angular/core';
import { Insignia, InsigniaApi, VoluntarioApi } from './lbservice';

@Injectable({
  providedIn: 'root'
})
export class InsigniasService {


	constructor(private insigniaApi:InsigniaApi,
				private voluntarioApi:VoluntarioApi) { }

	getInsigniasVoluntario(idVoluntario:string):Promise<Insignia[]>{
		let insigniasADevolver = [];
		this.voluntarioApi.getInsignia(idVoluntario).subscribe((insignias:Insignia[])=>{
			
			for (let insignia of insignias){
				if (insignia.fechaVencimiento == null){
					insigniasADevolver.push(insignia);
				} else {
					if (new Date() < insignia.fechaVencimiento) {
						insigniasADevolver.push(insignia);
					}
				}				
			}
			
		})
		return Promise.resolve(insigniasADevolver);
	}
}
