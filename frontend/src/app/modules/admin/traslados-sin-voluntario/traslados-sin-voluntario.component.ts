import { Component, OnInit } from '@angular/core';
import { Donacion, Donante, DescripcionGeneral, Traslado, Voluntario } from '../../../_services/lbservice/models'
import { DonacionApi, DonanteApi, DescripcionGeneralApi, TrasladoApi, VoluntarioApi } from '../../../_services/lbservice/services'
import {Location} from '@angular/common';

@Component({
  selector: 'app-traslados-sin-voluntario',
  templateUrl: './traslados-sin-voluntario.component.html',
  styleUrls: ['./traslados-sin-voluntario.component.css']
})
export class TrasladosSinVoluntarioComponent implements OnInit {

	traslados;
	filas = [];
	constructor(private _location: Location, apiTraslado: TrasladoApi) {
		apiTraslado.find({ 
			where: {
				estado: 'pendiente de retiro'
					}
			}).subscribe((traslados)=>{
				this.traslados = traslados; //test (borrar)
				for (let traslado of traslados){
					//obtener su descripcion
						//obtener su origen
							//obtener su destino
								//obtener su fecha estimada
									//crear fila
									//pushear fila
				}


			});
	 }

	ngOnInit() {
	}

}
