import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { VoluntariosService } from 'src/app/_services/voluntarios.service';
import { BALP } from '../../../_models/BALP';
import { VehiculoApi, VoluntarioApi, UbicacionApi, TrasladoApi, DonanteApi, DonacionApi, DescripcionDetalladaApi, ProductoApi, TipoProductoApi } from '../../../_services/lbservice/services';
import { Vehiculo, Voluntario, Traslado, Ubicacion, Volumen, Donacion, EnvioParaBeneficiario } from '../../../_services/lbservice/models';
@Component({
  selector: 'app-asignar-traslado',
  templateUrl: './asignar-traslado.component.html',
  styleUrls: ['./asignar-traslado.component.css']
})
export class AsignarTrasladoComponent implements OnInit {

	idTraslado: string;
	form: FormGroup;
  	traslado : Traslado;
	origen: Ubicacion;
	destino: Ubicacion;
	voluntario: Voluntario;
	balp : BALP;

	/*
		El usuario recibe un email como 
		localhost:4200/asignar-traslado/laIdDeUnTraslado
	*/
 	constructor(private apiVoluntario:VoluntarioApi, private apiTraslado:TrasladoApi, private apiUbicacion:UbicacionApi, private router: ActivatedRoute, private route:ActivatedRoute) {
 		//Obtengo el idTraslado por la URL
		  this.idTraslado = route.snapshot.paramMap.get("idTraslado")
		  
		  this.form = new FormGroup ({
			// atributos del traslado
			fecha : new FormControl(),
			origen : new FormControl(),
			destino : new FormControl(),
			puntaje : new FormControl(),
		  });

		// obtengo el voluntario que tiene iniciada la sesión
		this.voluntario = apiVoluntario.getCachedCurrent();
	
		// obtengo el traslado a partir del idDeTraslado recibido por parámetro
		apiTraslado.getTraslado(this.idTraslado, true).subscribe((trasladoRecuperado) => {
			this.traslado = trasladoRecuperado;
			// obtengo la dirección del traslado
			apiTraslado.getUbicacion(this.idTraslado, true).subscribe((ubicacionDelTraslado) => {
				this.origen = balp;
				this.destino = ubicacionDelTraslado;
			})
		})
		// SE MUESTRAN EN LA VISTA LOS DATOS DEL TRASLADO
 	}


	 // DE ACA EN ADELANTE SE ASOCIA EL VOLUNTARIO AL TRASLADO
	 onSubmit() {
	 this.trasladoApi.update(this.idTraslado).subscribe((trasladoActualizado : Traslado) => {
		// asocio al traslado en cuestión el id del voluntario que tiene la sesión iniciada
		 this.traslado.voluntarioId = this.voluntario.id;
		 alert('La asignación del traslado se registró correctamente');
	}) 
	 
}

	ngOnInit() {
	}

}
