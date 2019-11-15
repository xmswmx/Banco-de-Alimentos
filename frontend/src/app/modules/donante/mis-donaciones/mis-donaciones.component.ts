import { Component, OnInit } from '@angular/core';
import { Donacion, Donante } from '../../../_services/lbservice/models'
import { DonacionApi, DonanteApi } from '../../../_services/lbservice/services'

@Component({
  selector: 'app-mis-donaciones',
  templateUrl: './mis-donaciones.component.html',
  styleUrls: ['./mis-donaciones.component.css']
})
export class MisDonacionesComponent implements OnInit {

	donaciones=[];
	loggedDonante : Donante;

	constructor(apiDonante:DonanteApi,apiDonacion:DonacionApi) {
		this.loggedDonante = apiDonante.getCachedCurrent();
		apiDonante.getDonaciones(this.loggedDonante.id).subscribe((colDeDonaciones)=>{
			this.donaciones = colDeDonaciones;
			console.log(this.donaciones);
		})
	 	//Esto está muy bien, pero necesito ademas obtener la desc, 
	 	//fecha traslado, nombre y apellido voluntario y guardarlos en
	 	//un vector de tuplas con todos los datos procesados de forma
	 	//de poder recorrer ese vector e imprimirlo

	 }

	ngOnInit() {
	}

}
