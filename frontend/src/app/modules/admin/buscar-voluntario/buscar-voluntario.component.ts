import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { Router, ActivatedRoute } from '@angular/router';
import { VoluntariosService } from 'src/app/_services/voluntarios.service';
import { UbicacionApi } from '../../../_services/lbservice/services';
import { Ubicacion, Voluntario } from '../../../_services/lbservice/models';

@Component({
  selector: 'app-buscar-voluntario',
  templateUrl: './buscar-voluntario.component.html',
  styleUrls: ['./buscar-voluntario.component.css']
})
export class BuscarVoluntarioComponent implements OnInit {


//Necesito recibir la ID del traslado, la distancia y el volumen
	voluntarios : Voluntario[] = [];
  constructor(private service:VoluntariosService, private router: Router) {
  	service.getVoluntariosParaElTraslado().then((voluntarios)=>{
  		this.voluntarios = voluntarios;
  	});
  	//no se alcanza a setear que se lee el array
  	console.log('Se leyeron los voluntarios del servicio');
  	console.log(this.voluntarios)
  }

  ngOnInit() {
  }

}
