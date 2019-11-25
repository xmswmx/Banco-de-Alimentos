import { Component, OnInit } from '@angular/core';
import { Donacion, Donante, DescripcionGeneral, Traslado, Voluntario, Ubicacion, DescripcionDetallada } from '../../../_services/lbservice/models'
import { DonacionApi, DonanteApi, DescripcionGeneralApi, TrasladoApi, VoluntarioApi, UbicacionApi, DescripcionDetalladaApi } from '../../../_services/lbservice/services'
import {Location} from '@angular/common';
import { BALP } from '../../../_models/BALP'

@Component({
  selector: 'app-traslados-sin-voluntario',
  templateUrl: './traslados-sin-voluntario.component.html',
  styleUrls: ['./traslados-sin-voluntario.component.css']
})
export class TrasladosSinVoluntarioComponent implements OnInit {

	traslados:Traslado[];
	filas = [];
	balp:BALP; 
	constructor(private apiDescGeneral: DescripcionGeneralApi, private apiUbicacion:UbicacionApi, private apiDonante:DonanteApi, private apiDonacion:DonacionApi,private _location: Location, private apiTraslado: TrasladoApi) {
		
		this.balp = new BALP;

		apiTraslado.find({ 
			where: {
				estado: 'pendiente de retiro'
					}
			}).subscribe((traslados:Traslado[])=>{
				this.traslados = traslados; //test (borrar)
				for (let traslado of traslados){
					if (traslado.tipo == 'donacion') {
						//Caso de donacion
						apiDonacion.findById(traslado.idDonacionTrasladadaAlBanco).subscribe((donacion:Donacion)=>{
							apiDonante.findById(donacion.idDonante).subscribe((donante:Donante)=>{
								apiDonante.getUbicacion(donante.id,true).subscribe((ubicacion:Ubicacion)=>{
									let origen = this.balp.ubicacionBALP.direccion;
									let destino = ubicacion.direccion;
									let idDonante = donante.id;
									let fecha = traslado.fechaEstimada;
									if (donacion.tipoDescripcion == 'general'){
										//Caso desc general
										apiDonacion.getDescripcionGeneral(donacion.id,true).subscribe((desc:DescripcionGeneral)=>{
											this.filas.push([
												origen,
												destino,
												idDonante,
												fecha,
												desc.descripcion
											]) //Fin push
										});//Fin desc general
									} else {
										//Caso desc detallada
										apiDonacion.getDescripcionDetallada(donacion.id,true).subscribe((desc:DescripcionDetallada)=>{
											this.filas.push([
												origen,
												destino,
												idDonante,
												fecha,
												desc.descripcion
											]) //Fin push
										}); //Fin desc detallada
									} //Fin else
								}) //Fin getUbicacion
							}) //Fin donante
							
						})//Fin donacion

					} else {
						//Caso de envio
					} //Fin if

						//obtener su origen
							//obtener su destino
								//obtener su fecha estimada
									//crear fila
									//pushear fila
				} // Fin For
			}); //Fin find()
	 } //Fin constructor

	ngOnInit() {
	}

}
