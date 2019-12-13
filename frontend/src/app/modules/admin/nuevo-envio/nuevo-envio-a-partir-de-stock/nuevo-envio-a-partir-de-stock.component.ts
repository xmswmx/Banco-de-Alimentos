import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { Producto, Item, Volumen, EnvioParaBeneficiario, Traslado, Donacion } from '../../../../_services/lbservice/models';
import { ProductoApi, DonacionApi, ItemApi, VolumenApi, EnvioParaBeneficiarioApi, TrasladoApi } from '../../../../_services/lbservice';
import { MockStockService } from '../../../../_services/stockservice/mock-stock.service';

@Component({
  selector: 'app-nuevo-envio-a-partir-de-stock',
  templateUrl: './nuevo-envio-a-partir-de-stock.component.html',
  styleUrls: ['./nuevo-envio-a-partir-de-stock.component.css']
})
export class NuevoEnvioAPartirDeStockComponent implements OnInit {

  mostrarStock = false;
  productos : Producto[] = [];
  stock : MockStockService = new MockStockService;
  constructor() {
  	this.stock.getProductos().then((productos)=>{this.productos=productos; console.log(productos)});
  	console.log(this.productos);
  }

  ngOnInit() {
  }
  test(){
  	console.log(this.productos);
  }

}
