import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { Router, ActivatedRoute } from '@angular/router';
import { VoluntariosService } from 'src/app/_services/voluntarios.service';
import { VehiculoApi, VoluntarioApi, TrasladoApi, DonanteApi, DonacionApi, DescripcionDetalladaApi, ProductoApi, TipoProductoApi } from '../../../_services/lbservice/services';
import { Vehiculo, Voluntario, Traslado, Ubicacion, Volumen, Donacion, EnvioParaBeneficiario } from '../../../_services/lbservice/models';
@Component({
  selector: 'app-asignar-traslado',
  templateUrl: './asignar-traslado.component.html',
  styleUrls: ['./asignar-traslado.component.css']
})
export class AsignarTrasladoComponent implements OnInit {

	idTraslado:string;

	/*
		El usuario recibe un email como 
		localhost:4200/asignar-traslado/laIdDeUnTraslado
	*/
 	constructor(private route:ActivatedRoute) {
 		//Se obtiene de la URL
  		this.idTraslado = route.snapshot.paramMap.get("idTraslado")

 	}

	ngOnInit() {
	}

}
