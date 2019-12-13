import { Injectable } from '@angular/core';
import { Producto } from '../lbservice';

@Injectable({
  providedIn: 'root'
})
export abstract class AbstractStockService {

  constructor() { }

  abstract getProductos():Promise<Producto[]>;
  abstract retriveProductos(productosConCantidadARetirar:Producto[]):Promise<boolean>;
}
