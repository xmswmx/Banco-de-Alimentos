import { Component, OnInit } from '@angular/core';
import { Beneficiario, EnvioParaBeneficiario, Donacion, Donante, DescripcionGeneral, Traslado, Voluntario, Ubicacion, DescripcionDetallada } from '../../../_services/lbservice/models'
import { BeneficiarioApi, EnvioParaBeneficiarioApi ,DonacionApi, DonanteApi, DescripcionGeneralApi, TrasladoApi, VoluntarioApi, UbicacionApi, DescripcionDetalladaApi } from '../../../_services/lbservice/services'
import {Location} from '@angular/common';
import { BALP } from '../../../_models/BALP'
import { VoluntariosService } from 'src/app/_services/voluntarios.service';
import { Route } from '@angular/compiler/src/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-traslados-sin-voluntario',
  templateUrl: './traslados-sin-voluntario.component.html',
  styleUrls: ['./traslados-sin-voluntario.component.css']
})
export class TrasladosSinVoluntarioComponent implements OnInit {

	traslados:Traslado[];
	filas = [];
	balp:BALP; 
	constructor(private router:Router,private service: VoluntariosService,private apiBeneficiario: BeneficiarioApi,private apiEnvio:EnvioParaBeneficiarioApi ,private apiDescGeneral: DescripcionGeneralApi, private apiUbicacion:UbicacionApi, private apiDonante:DonanteApi, private apiDonacion:DonacionApi,private _location: Location, private apiTraslado: TrasladoApi) {
		
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
									donante.ubicacion = ubicacion;
									let origen = ubicacion.direccion;
									let destino = this.balp.ubicacionBALP.direccion;
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
												desc.descripcion,
												donante,
												traslado
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
												desc.descripcion,
												donante,
												traslado
											]) //Fin push
										}); //Fin desc detallada
									} //Fin else
								}) //Fin getUbicacion
							}) //Fin donante
							
						})//Fin donacion

					} else {
						//Caso de envio
						apiEnvio.findById(traslado.idEnvioTrasladadoAUnBeneficiario).subscribe((envio:EnvioParaBeneficiario)=>{
							apiBeneficiario.findById(envio.beneficiarioId).subscribe((beneficiario:Beneficiario)=>{
								apiBeneficiario.getUbicacion(beneficiario.id, true).subscribe((ubicacion:Ubicacion)=>{
									beneficiario.ubicacion = ubicacion;
									let origen = this.balp.ubicacionBALP.direccion;
									let destino = ubicacion.direccion;
									let idBeneficiario = beneficiario.id;
									let fecha = traslado.fechaEstimada;
									let descripcion = envio.descripcion;
									this.filas.push([
												origen,
												destino,
												idBeneficiario,
												fecha,
												descripcion,
												beneficiario,
												traslado
											]) //Fin push
								})//Fin ubicacion
							}) //Fin beneficiario
						}); //Fin envio
					} //Fin if

						//obtener su origen
							//obtener su destino
								//obtener su fecha estimada
									//crear fila
									//pushear fila
				} // Fin For
			}); //Fin find()
	 } //Fin constructor

	buscarVoluntariosParaFila(fila){
		this.service.setTraslado(fila[6], fila[0], fila[1]).then((string)=>{
			console.log('Deberia seguir');
			this.router.navigate(['/buscar-voluntarios']);
			
		});
		
		
	}

	ngOnInit() {
	}

}
