import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { TrasladoApi, UserApi, DonacionApi, DescripcionGeneralApi} from '../../../../_services/lbservice/services';
import { Volumen, User, Donacion, DescripcionGeneral, Traslado } from '../../../../_services/lbservice/models';  
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-nuevo-envio-volumen',
  templateUrl: './nuevo-envio-volumen.component.html',
  styleUrls: ['./nuevo-envio-volumen.component.css']
})
export class NuevoEnvioVolumenComponent implements OnInit {

	form : FormGroup;

	@Output() enviarVolumen = new EventEmitter<any[]>();
	constructor() { 
		
		this.form = new FormGroup({
			alto: new FormControl(),
			ancho: new FormControl(),
			largo: new FormControl(),
			peso: new FormControl(),
			fechaRetiro: new FormControl()
	    });
	}

	ngOnInit() {}
	enviarAlPadre(){
		let array = [];
		let volumen:Volumen = new Volumen;
		volumen.alto = this.form.get("alto").value;
		volumen.ancho = this.form.get("ancho").value;
		volumen.largo = this.form.get("largo").value;
		let peso = this.form.get("peso").value;
		let fecha = this.form.get("fechaRetiro").value;
    	this.enviarVolumen.emit([volumen,peso,fecha]);
    }

}
