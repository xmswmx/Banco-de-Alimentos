import { Component, OnInit } from '@angular/core';
import { Donacion, Donante, DescripcionGeneral, Traslado, Voluntario } from '../../../_services/lbservice/models'
import { DonacionApi, DonanteApi, DescripcionGeneralApi, TrasladoApi, VoluntarioApi } from '../../../_services/lbservice/services'
import {Location} from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiRequestsService} from '../../../_services/api-requests.service';

@Component({
  selector: 'app-mis-donaciones',
  templateUrl: './mis-donaciones.component.html',
  styleUrls: ['./mis-donaciones.component.css']
})
export class MisDonacionesComponent implements OnInit {

	donaciones=[];
	datosDeDonaciones=[];
	loggedDonante : Donante;

	constructor( private requester:ApiRequestsService,private _location: Location,apiVoluntario:VoluntarioApi,apiTraslado:TrasladoApi,apiDescripcionGeneral:DescripcionGeneralApi,apiDonante:DonanteApi,apiDonacion:DonacionApi, private route: ActivatedRoute, private router: Router) {
		this.loggedDonante = apiDonante.getCachedCurrent();
		requester.getAllDonacionesOf(this.loggedDonante.id).then(ans => this.datosDeDonaciones = ans);
	}

	ngOnInit() {
	}

}
