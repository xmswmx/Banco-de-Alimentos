import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { Item } from '../../../../_services/lbservice/models';

@Component({
  selector: 'app-nuevo-envio-principal',
  templateUrl: './nuevo-envio-principal.component.html',
  styleUrls: ['./nuevo-envio-principal.component.css']
})
export class NuevoEnvioPrincipalComponent implements OnInit {

	formEnvio : FormGroup;
	var: string = 'hola';
  idBeneficiario:string = 'Sin seleccionar';
  idDonacion:string = 'Sin seleccionar';
  itemList:Item[]=[];
  constructor() {	}


  ngOnInit() {
  }
  onEnviarIdBeneficiario(id:string){
    this.idBeneficiario = id;
  }
  onEnviarIdDonacion(id:string){
    this.idDonacion = id;
  }
  onEnviarItems(items:Item[]){
    this.itemList = items;
    console.log("Se actualizo el item list del componente padre");
    console.log(this.itemList);
  }

}
