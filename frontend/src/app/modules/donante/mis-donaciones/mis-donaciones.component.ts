import { Component, OnInit } from '@angular/core';
import { Donacion, Donante, DescripcionGeneral, Traslado, Voluntario } from '../../../_services/lbservice/models'
import { DonacionApi, DonanteApi, DescripcionGeneralApi, TrasladoApi, VoluntarioApi } from '../../../_services/lbservice/services'
import {Location} from '@angular/common';

@Component({
  selector: 'app-mis-donaciones',
  templateUrl: './mis-donaciones.component.html',
  styleUrls: ['./mis-donaciones.component.css']
})
export class MisDonacionesComponent implements OnInit {

	donaciones=[];
	datosDeDonaciones=[];
	loggedDonante : Donante;

	constructor(private _location: Location,apiVoluntario:VoluntarioApi,apiTraslado:TrasladoApi,apiDescripcionGeneral:DescripcionGeneralApi,apiDonante:DonanteApi,apiDonacion:DonacionApi) {
		this.loggedDonante = apiDonante.getCachedCurrent();
		apiDonante.getDonaciones(this.loggedDonante.id)
		.subscribe((donaciones)=>{
				for (let donacion of donaciones){

					apiDonacion.getDescripcionGeneral(donacion.id,true).subscribe((desc)=>{
						apiDonacion.getTraslado(donacion.id,true).subscribe((traslado:Traslado)=>{
							if(traslado.voluntarioId==null){
								let tupla = [
									donacion.id,
									donacion.numero,
									desc.descripcion,
									'Sin asignar',
									traslado.fechaEstimada
								];
								this.datosDeDonaciones.push(tupla);
							} else {
								apiVoluntario.findById(traslado.voluntarioId).subscribe((voluntario:Voluntario)=>{
									let tupla = [
										donacion.id,
										donacion.numero,
										desc.descripcion,
										voluntario.nombre+' '+voluntario.apellido,
										traslado.fechaEstimada
										//Sobre formatear hora (se hace en la plantilla)
										//https://stackoverflow.com/questions/43630445/how-to-convert-current-date-to-yyyy-mm-dd-format-with-angular-2
										//https://www.geeksforgeeks.org/angularjs-date-filter/
									];
									this.datosDeDonaciones.push(tupla);
								}) //voluntario
							} //Else


						}) //Donacion

					}); //Traslado

				} //ForEach donacion


		}); //GetDonaciones

	} //Constructor


	ngOnInit() {
	}

}
