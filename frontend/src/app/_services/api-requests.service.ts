import { Injectable } from '@angular/core';
import { 
	Donante, Voluntario, DonanteApi, VoluntarioApi, Donacion, DonacionApi, Traslado
} from './lbservice';

@Injectable({
  providedIn: 'root'
})
export class ApiRequestsService {

  constructor(	private voluntarioApi:VoluntarioApi,
  				private donanteApi:DonanteApi,
  				private donacionApi:DonacionApi
  	) {
  }
  
  get10HighScoredDonantes():Promise<Donante[]>{
  		return new Promise(resolve => {
  			this.donanteApi.find<Donante>({
		        order: 'puntuacion DESC',
		        limit: 10
		    }).subscribe((donantes)=>{
		    	resolve(donantes)
	  		});
  		});
  };

  get10HighScoredVoluntarios():Promise<Voluntario[]>{
  		return new Promise((resolve,reject) => {
  			this.voluntarioApi.find<Voluntario>({
		        order: 'puntuacion DESC',
		        limit: 10
		    }).subscribe((voluntarios)=>{
		        resolve(voluntarios)
	  		});
  		});
  };

  getAllTrasladosOfVoluntario(idVoluntario):Promise<[]>{
  	return new Promise(resolve => [])
  }

  getAllDonacionesOf(idDonante):Promise<any[]>{
  	return new Promise(resolve => {
  		let datosDeDonaciones = []
		this.donanteApi.getDonaciones(idDonante)
		.subscribe((donaciones)=>{
				for (let donacion of donaciones){
					this.donacionApi.getDescripcionGeneral(donacion.id,true).subscribe((desc)=>{	
							this.donacionApi.getTraslado(donacion.id,true).subscribe((traslado:Traslado)=>{
								if(traslado.voluntarioId==null){
									let tupla = [
										donacion.id,
										donacion.numero,
										desc.descripcion,
										'Sin asignar',
										traslado.fechaEstimada
									];
									datosDeDonaciones.push(tupla);
								} else {
									this.voluntarioApi.findById(traslado.voluntarioId).subscribe((voluntario:Voluntario)=>{
										let tupla = [
											donacion.id,
											donacion.numero,
											desc.descripcion,
											voluntario.nombre+' '+voluntario.apellido,
											traslado.fechaEstimada
										];
										datosDeDonaciones.push(tupla);
									}) //voluntario
								} //Else
							}) //Donacion
						}) //Fin desc general
					this.donacionApi.getDescripcionDetallada(donacion.id,true).subscribe((desc)=>{
							this.donacionApi.getTraslado(donacion.id,true).subscribe((traslado:Traslado)=>{
								if(traslado.voluntarioId==null){
									let tupla = [
										donacion.id,
										donacion.numero,
										desc.descripcion,
										'Sin asignar',
										traslado.fechaEstimada
									];
									datosDeDonaciones.push(tupla);
								} else {
									this.voluntarioApi.findById(traslado.voluntarioId).subscribe((voluntario:Voluntario)=>{
										let tupla = [
											donacion.id,
											donacion.numero,
											desc.descripcion,
											voluntario.nombre+' '+voluntario.apellido,
											traslado.fechaEstimada
										];
										datosDeDonaciones.push(tupla);
									}) //voluntario
								} //Else
							}) //Donacion
						}) //Fin intentocon descripcion general
						} //for Donaciones	
					}); //Promesa get donaciones
		resolve(datosDeDonaciones)
  	})
  }

  getAllTrasladosSinVoluntario():Promise<[]>{
  	return new Promise(resolve => [])
  }
}
