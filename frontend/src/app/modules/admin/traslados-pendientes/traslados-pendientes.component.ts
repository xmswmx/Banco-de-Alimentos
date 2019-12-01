import { Component, OnInit } from '@angular/core';
import { Beneficiario, EnvioParaBeneficiario, Donacion, Donante, DescripcionGeneral, Traslado, Voluntario, Ubicacion, DescripcionDetallada } from '../../../_services/lbservice/models'
import { BeneficiarioApi, EnvioParaBeneficiarioApi ,DonacionApi, DonanteApi, DescripcionGeneralApi, TrasladoApi, VoluntarioApi, UbicacionApi, DescripcionDetalladaApi } from '../../../_services/lbservice/services'
import {Location} from '@angular/common';
import { BALP } from '../../../_models/BALP'
import { VoluntariosService } from 'src/app/_services/voluntarios.service';
import { Route } from '@angular/compiler/src/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-traslados-pendientes',
  templateUrl: './traslados-pendientes.component.html',
  styleUrls: ['./traslados-pendientes.component.css']
})
export class TrasladosPendientesComponent implements OnInit {

  form : FormGroup;
  constructor(private router:Router,private service: VoluntariosService,private apiBeneficiario: BeneficiarioApi,private apiEnvio:EnvioParaBeneficiarioApi ,private apiDescGeneral: DescripcionGeneralApi, private apiUbicacion:UbicacionApi, private apiDonante:DonanteApi, private apiDonacion:DonacionApi,private _location: Location, private apiTraslado: TrasladoApi) { 

  this.form = new FormGroup ({
  	nombre : new FormControl()
  });

  	
  	apiTraslado.find().subscribe((traslados:Traslado[])=>{
  		for (let traslado of traslados){
  			// Pido voluntario
  				// Bifurcada
	  				//Caso donacion
	  					//Pido donacion
	  						//Pido donante
	  							//Pido ubicacion
	  								//Guardo en array un vector con
	  									//traslado, voluntario, donacion, dorigen, ddestino, distancia, fecha  
	  				//Caso envio
	  					//Pido envio
	  						//Pido beneficiario
	  							//Pido ubicacion
	  								//Guardo en array un vector con
	  									//traslado, voluntario, donacion, dorigen, ddestino, distancia, fecha 
  		} //Fin for traslados


  	}) //Fin traslados
  }// Fin del constructor

  ngOnInit() {
  }

}
