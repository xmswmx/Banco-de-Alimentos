import { Injectable } from '@angular/core';
import { 
	Donante, Voluntario, DonanteApi, VoluntarioApi
} from './lbservice';

@Injectable({
  providedIn: 'root'
})
export class ApiRequestsService {

  constructor(	private voluntarioApi:VoluntarioApi,
  				private donanteApi:DonanteApi
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

  getAllDonacionesRecibidasOf(idDonante):Promise<[]>{
  	return new Promise(resolve => [])
  }

  getAllTrasladosSinVoluntario():Promise<[]>{
  	return new Promise(resolve => [])
  }
}
