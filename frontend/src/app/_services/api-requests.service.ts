import { Injectable } from '@angular/core';
import { 
	Donante, Voluntario


} from './lbservice';

@Injectable({
  providedIn: 'root'
})
export class ApiRequestsService {

  constructor() {
  }

  get10HighScoredDonantes():Promise<Donante[]>{
  	return new Promise(resolve =>{
  		

  		resolve([])
  	})	
  }

  get10HighScoredVoluntarios():Promise<Voluntario[]>{
  	return new Promise(resolve => [])
  }

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
