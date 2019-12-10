import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { Item, Volumen, EnvioParaBeneficiario, Traslado } from '../../../../_services/lbservice/models';
import { ItemApi, VolumenApi, EnvioParaBeneficiarioApi, TrasladoApi } from '../../../../_services/lbservice';
import {Location} from '@angular/common';
import { BALP } from '../../../../_models/BALP';
import { AddressConverter } from '../../../../_models/AddressConverter';

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
  converter = new AddressConverter;
  balp = new BALP;
  constructor(
    private itemApi:ItemApi,
    private volumenApi:VolumenApi,
    private envioApi:EnvioParaBeneficiarioApi,
    private trasladoApi:TrasladoApi
    ) {	}


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

    //Calcular distancia y puntaje
    //Falta obtener la direccion del destinatario
    let dirDestinatario = 'Una direccion';
    let distancia = this.converter.distanceFromTo(this.converter.coordinateForAddress(this.balp.ubicacionBALP.direccion),this.converter.coordinateForAddress(dirDestinatario));
    let puntaje = distancia; //Es un punto por cada km
    //Generar descripción a partir de la lista
    let desc = '';
    for (let item of this.itemList ){
      desc = desc + item.descripcion + '; '; 
    }

    //Iniciar variables
      //Caso a partir de donacion
      let nuevoEnvio : EnvioParaBeneficiario = new EnvioParaBeneficiario;
      nuevoEnvio.tipo = this.tipo;
      nuevoEnvio.beneficiarioId = this.idBeneficiario;
      nuevoEnvio.items = this.itemList;
      nuevoEnvio.volumen = this.volumen; //Agregarlo aparte o buscar un nested
      //Falta agregar su traslado
      let nuevoTraslado: Traslado = new Traslado;
      nuevoTraslado.fechaEstimada = this.fecha;
      nuevoTraslado.estado = 'pendiente de retiro';
      nuevoTraslado.tipo = 'envio';
      nuevoTraslado.volumenTotal = this.volumen.alto * this.volumen.ancho * this.volumen.largo;
      nuevoTraslado.distancia = distancia;
      nuevoTraslado.puntaje = puntaje;
      nuevoTraslado.descripcion = desc;
      nuevoTraslado.peso = this.peso;

    //Postear todo
    if (this.tipo == 'a partir de donacion'){
      //Agregar su donacion
      //Falta actualizar estado de donacion


    }






    else {
      //Caso a partir de stock
    }

  }

}
