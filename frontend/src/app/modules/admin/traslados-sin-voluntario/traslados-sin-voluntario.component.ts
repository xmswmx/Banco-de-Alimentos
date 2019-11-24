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

	traslados = ['asddas','sdasd','sdaasd'];
	constructor(private _location: Location) {
	 }

	ngOnInit() {
	}

}
