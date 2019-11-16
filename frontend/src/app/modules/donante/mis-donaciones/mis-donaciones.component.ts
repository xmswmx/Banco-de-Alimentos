import { Component, OnInit } from '@angular/core';
import { Donacion, Donante, DescripcionGeneral } from '../../../_services/lbservice/models'
import { DonacionApi, DonanteApi, DescripcionGeneralApi } from '../../../_services/lbservice/services'

@Component({
  selector: 'app-mis-donaciones',
  templateUrl: './mis-donaciones.component.html',
  styleUrls: ['./mis-donaciones.component.css']
})
export class MisDonacionesComponent implements OnInit {

	donaciones=[];
	datosDeDonaciones=[];
	loggedDonante : Donante;

	constructor(apiDescripcionGeneral:DescripcionGeneralApi,apiDonante:DonanteApi,apiDonacion:DonacionApi) {
		this.loggedDonante = apiDonante.getCachedCurrent();
		apiDonante.getDonaciones(this.loggedDonante.id)
		.subscribe((donaciones)=>{

				for (let donacion of donaciones){

					apiDonacion.getDescripcionGeneral(donacion.id,true).subscribe((desc)=>{
						let tupla = [
							donacion.id,
							donacion.numero,
							desc.descripcion,
							'algo',
							'algo'
						];
						this.datosDeDonaciones.push(tupla);

					});

				}


		});

	}


/*
			for (let donacion of this.donaciones){
				let tupla = [
					donacion.id,
					donacion.numero,
					'algo',
					'algo',
					'algo'
				];
				this.datosDeDonaciones.push(tupla);	
			}
*/

	ngOnInit() {
	}

	descripcionDe(apiDonacion:DonacionApi,apiDescripcionGeneral:DescripcionGeneralApi,donacion:Donacion)
	{
		return 'algo'
	}

	nombreCompletoVoluntario(donacion:Donacion){
		return 'un voluntario';
	}

	fechaEstimada(donacion:Donacion){
		return 'una/fecha/estimada';
	}
}
