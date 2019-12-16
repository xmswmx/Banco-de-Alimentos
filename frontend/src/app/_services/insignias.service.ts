import { Injectable } from '@angular/core';
import { TipoInsignia, TipoInsigniaApi, Insignia, InsigniaApi, VoluntarioApi, DonanteApi } from './lbservice';

@Injectable({
  providedIn: 'root'
})
export class InsigniasService {


	voluntario1: string ='1234';
	donante1: string = '1234';
	ingresoVoluntario = new Date();
	ingresoDonante = new Date();
	tiposDeInsignia : TipoInsignia[] = [];
	constructor(private insigniaApi:InsigniaApi,
				private voluntarioApi:VoluntarioApi,
				private donanteApi:DonanteApi,
				private tipoInsigniaApi:TipoInsigniaApi) {
		this.tipoInsigniaApi.find().subscribe((res:TipoInsignia[]) => {
			this.tiposDeInsignia = res;
		})

				 }

	getInsigniasVoluntario(idVoluntario:string):Promise<Insignia[]>{
		
		let insigniasADevolver = [];
		return new Promise((resolve,reject)=>{

			this.voluntarioApi.getInsignia(idVoluntario).subscribe((insignias:Insignia[])=>{
			
				for (let insignia of insignias){
					if (insignia.fechaVencimiento == null){
						insigniasADevolver.push(insignia);
					} else {
						if (new Date() < new Date(insignia.fechaVencimiento)) {
							insigniasADevolver.push(insignia);
						}
					}
				}
				resolve(insigniasADevolver);
			})
		})		
	}

	getInsigniasDonante(idDonante:string):Promise<Insignia[]>{
		
		let insigniasADevolver = [];
		let cDate = new Date();

		return new Promise((resolve,reject)=>{
			this.donanteApi.getInsignia(idDonante).subscribe((insignias:Insignia[])=>{
				for (let insignia of insignias){
					console.log(insignia)
					if (insignia.fechaVencimiento == null){
						insigniasADevolver.push(insignia);
					} else {
						if (cDate < new Date(insignia.fechaVencimiento) ) {
							insigniasADevolver.push(insignia);
						}
					}			
				}
				resolve(insigniasADevolver);
			})
		})		
	}

	onTraslado(idVoluntario:string){
		//Crear o actualizar insignias
	}
	onDonacion(idDonante:string){
		//Crear o actualizar insignias
	}
	getTipoInsigniaNombre(nombre:string):TipoInsignia{
		//La idea es devolver la id de la insignia con dado nombre
		return this.tiposDeInsignia.find(tipo => tipo.nombre == nombre);
	}
}
