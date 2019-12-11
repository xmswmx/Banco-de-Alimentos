import { Injectable } from '@angular/core';
import { AbstractStockService } from './abstract-stock.service';
import { Producto, TipoProducto } from '../lbservice';

@Injectable({
  providedIn: 'root'
})
export class MockStockService extends AbstractStockService {

	productos;
  constructor() {
  	super();

  	//Productos mockeados
  	let p1 = new Producto;
  	let p2 = new Producto;
  	let p3 = new Producto;
  	let p4 = new Producto;
  	let p5 = new Producto;
  	p1.cantidad = 5;
  	p2.cantidad = 24;
  	p3.cantidad = 54;
  	p4.cantidad = 34;
  	p5.cantidad = 553;
  	p1.vencimiento = new Date;
  	p2.vencimiento = new Date;
  	p3.vencimiento = new Date;
  	p4.vencimiento = new Date;
  	p5.vencimiento = new Date;
  	p1.tipoProducto = new TipoProducto;
	p2.tipoProducto = new TipoProducto;
	p3.tipoProducto = new TipoProducto;
	p4.tipoProducto = new TipoProducto;
	p5.tipoProducto = new TipoProducto;
	p1.tipoProducto.nombre = 'Lechuga';
	p2.tipoProducto.nombre = 'Milanesa Granja de Sol';
	p3.tipoProducto.nombre = 'Leche Sancor 1lt';
	p4.tipoProducto.nombre = 'Maní El Faro 500g';
	p5.tipoProducto.nombre = 'Te La virginia 100g';
	
  	this.productos = [p1,p2,p3,p4,p5];

   }
}
