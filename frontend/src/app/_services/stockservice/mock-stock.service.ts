import { Injectable } from '@angular/core';
import { Producto, TipoProducto } from '../lbservice';
import { AbstractStockService } from '../stockservice/abstract-stock.service';

@Injectable({
  providedIn: 'root'
})
export class MockStockService extends AbstractStockService {

	productos: Producto[] = [];
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
	p1.tipoProducto.nombre = 'TE LA VIRGINIA';
	p2.tipoProducto.nombre = 'MILANESA GRANJA DEL SOL';
	p3.tipoProducto.nombre = 'SEVEN ULTRA RED BERRY';
	p4.tipoProducto.nombre = 'CARAMELO SURTIDO MANDARINA Y FRUTILLA';
	p5.tipoProducto.nombre = 'MENTHOPLUS ZERO POMELO ROSADO';
	
  	this.productos = [p1,p2,p3,p4,p5];
    console.log("Se inicializo el servicio: ");
    console.log(this.productos);

   }

   //Devuelve una lista de productos con nombre, vencimiento y cantidad
   getProductos(): Promise<Producto[]>{
    let promesa = Promise.resolve(this.productos);
    return promesa;
   }

   /* Recibe una lista de productos con nombre, vencimiento y cantidad
    * Comprueba que existan
    * Los decrementa o los borra si no quedan mas
    * Es importante que los productos recibidos incluyan su tipo
    */
   retriveProductos(productos:Producto[]): Promise<boolean>{
   	for (let producto of productos){
   		//Checkear si hay suficientes, sino devolver false
   		let interno:Producto = this.productos.find(elemento => elemento.tipoProducto.nombre == producto.tipoProducto.nombre);
   		if (interno.cantidad > producto.cantidad){
   			//No hay suficientes
   			return new Promise((resolve)=>{false});
   		}
   	}
   	//Comprobé que hay suficiente stock de todos los productos, ahora a descontarlos
   	for (let producto of productos){
   		//Descrementar
   		let interno = this.productos.find(elemento => (elemento.tipoProducto.nombre == producto.tipoProducto.nombre && producto.vencimiento == elemento.vencimiento));
   		interno.cantidad = producto.cantidad;	
   	}
   	return new Promise((resolve)=>{true});
   }
}
