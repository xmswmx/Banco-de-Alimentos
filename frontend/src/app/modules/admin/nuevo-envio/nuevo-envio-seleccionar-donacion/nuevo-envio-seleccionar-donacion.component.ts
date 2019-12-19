import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { Donacion, Donante, Traslado } from '../../../../_services/lbservice/models';  
import { DonacionApi, DonanteApi, TrasladoApi } from '../../../../_services/lbservice/services';

@Component({
  selector: 'app-nuevo-envio-seleccionar-donacion',
  templateUrl: './nuevo-envio-seleccionar-donacion.component.html',
  styleUrls: ['./nuevo-envio-seleccionar-donacion.component.css']
})
export class NuevoEnvioSeleccionarDonacionComponent implements OnInit {

	donaciones = [];

	@Input()  name: string;
  	@Output() enviarIdDonacion = new EventEmitter<string>();
	constructor(
		private donacionApi:DonacionApi,
		private donanteApi:DonanteApi,
		private trasladoApi:TrasladoApi
		) { 
		//Tengo que obtener todas las donaciones que no pertenecen a un envio
		//Es decir todas las que tengan idEnvio = null 
		donacionApi.find({include:{relation: 'traslado'}, where: {"estado":"nueva"}}).subscribe((donaciones:Donacion[])=>{
			this.donaciones = donaciones;
		})
	}

    enviarAlPadre(id:string){
			this.enviarIdDonacion.emit(id);
			alert('La donación ha sido seleccionada');
    }

	ngOnInit() {}

}
