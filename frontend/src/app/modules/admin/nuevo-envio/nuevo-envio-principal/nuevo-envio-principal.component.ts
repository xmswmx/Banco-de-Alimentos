import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { Item, Volumen, EnvioParaBeneficiario, Traslado } from '../../../../_services/lbservice/models';
import { ItemApi, VolumenApi, EnvioParaBeneficiarioApi, TrasladoApi } from '../../../../_services/lbservice';

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
  volumen:Volumen = new Volumen;
  peso:number;
  tipo:string= 'a partir de donacion'; //'a partir de donacion' o 'a partir de stock'
  fecha:Date = new Date;
  constructor() {	}


  ngOnInit() {
  }
  toggleTipo(){
    if (this.tipo=='a partir de donacion'){
      this.tipo = 'a partir de stock'
    } else {
      //de stock
      this.tipo = 'a partir de donacion';
    }
  }
  onEnviarIdBeneficiario(id:string){
    this.idBeneficiario = id;
  }
  onEnviarIdDonacion(id:string){
    this.idDonacion = id;
  }
  //Recibe [volumen,peso,fecha]
  onEnviarVolumen(array:Array<any>){
    this.volumen = array[0];
    this.peso = array[1];
    this.fecha = array[2]
  }
  onEnviarItems(items:Item[]){
    this.itemList = items;
    console.log("Se actualizo el item list del componente padre");
    console.log(this.itemList);
  }
  onEnviar(){
    //Validar cada campo, si algo anda mal alert y break

      //Destinatario seleccionado

      //Validar tipo de envio

      //Caso a partir de donacion

        //Validar que se seleccione una donacio

      //Caso a partir de stock

        //Pendiente

      //Se tiene una lista de descripcion/peso

      //Validar que se tenga alto,ancho,largo,fecha y peso

    //Postear todo

      //Crear un nuevo envio

        //Caso donacion

        //Caso stock

      //Crearle su traslado
  }

}
