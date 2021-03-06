import { Component, OnInit } from '@angular/core';
import { Voluntario, VoluntarioApi, TrasladoApi, Traslado, Beneficiario, BeneficiarioApi, EnvioParaBeneficiarioApi, EnvioParaBeneficiario } from '../../../_services/lbservice/';
import { Route } from '@angular/compiler/src/core';
import { Router, ActivatedRoute } from '@angular/router';
import {Location} from '@angular/common';
import { DataShareService } from 'src/app/_services/data-share.service';

@Component({
  selector: 'app-donaciones-recibidas',
  templateUrl: './donaciones-recibidas.component.html',
  styleUrls: ['./donaciones-recibidas.component.css']
})
export class DonacionesRecibidasComponent implements OnInit {

	filas=[];
	constructor(private data:DataShareService, 
				private trasladoApi:TrasladoApi,
				private beneficiarioApi:BeneficiarioApi,
				private envioApi:EnvioParaBeneficiarioApi,
				private voluntarioApi:VoluntarioApi,
				private _location: Location, private route: ActivatedRoute, private router: Router
				) 
	{ 
		//Recuperar todos los envios beneficiario logueado
		let idBeneficiario = beneficiarioApi.getCachedCurrent().id;

		envioApi.find({ where: {"beneficiarioId": idBeneficiario},
						include: {relation: "traslados"}
					}).subscribe((envios:EnvioParaBeneficiario[])=>{
			
			for (let envio of envios){
				if (envio.traslados.voluntarioId != null){
					voluntarioApi.findById(envio.traslados.voluntarioId).subscribe((voluntario:Voluntario)=>{
						this.filas.push([
								envio.traslados.descripcion,
								envio.traslados.fechaEstimada,
								voluntario.nombre + ' ' + voluntario.apellido,
								envio.traslados.estado								
							]);						
					})
				} else {
					this.filas.push([
							envio.traslados.descripcion,
							envio.traslados.fechaEstimada,
							"Sin asignar",
							envio.traslados.estado							
						]);			
				}
			}
		})
	}

	ngOnInit() {
		this.data.cambiarTitulo("Donaciones recibidas");
	}

}
