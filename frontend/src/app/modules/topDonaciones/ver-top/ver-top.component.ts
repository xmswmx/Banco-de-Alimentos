import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import { DonanteApi, VoluntarioApi } from '../../../_services/lbservice/';
import { Donante, Voluntario } from '../../../_services/lbservice'

@Component({
  selector: 'app-ver-top',
  templateUrl: './ver-top.component.html',
  styleUrls: ['./ver-top.component.css']
})
export class VerTopComponent implements OnInit {

	voluntarios = [];
	donantes = [];
  constructor(private _location:Location,
  			  private apiDonante:DonanteApi,
  			  private apiVoluntario:VoluntarioApi) 
  { 
  	apiDonante.find().subscribe((donantes)=>{
  		this.donantes = donantes;
  		apiVoluntario.find().subscribe((voluntarios)=>{
  			this.voluntarios=voluntarios;
  			this.voluntarios = this.voluntarios.sort( this.compararVoluntarios).slice(0,10);
  			this.donantes= this.donantes.sort(this.compararDonantes).slice(0,10);
  		})
  	})

  }

  compararVoluntarios(vol1:Voluntario, vol2:Voluntario){
  	return vol2.puntuacion - vol1.puntuacion;
  }
  compararDonantes(d1,d2){
  	return d2.puntuacion-d1.puntuacion;
  }
  ngOnInit() {
  }

}
