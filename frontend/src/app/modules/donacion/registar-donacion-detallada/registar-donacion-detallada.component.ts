import { Component, OnInit } from '@angular/core';
import { TrasladoApi, DonanteApi, DonacionApi, DescripcionDetalladaApi, ProductoApi, TipoProductoApi } from '../../../_services/lbservice/services';
import { Donante, Donacion, DescripcionDetallada, Producto, TipoProducto, Traslado } from '../../../_services/lbservice/models';  
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-registar-donacion-detallada',
  templateUrl: './registar-donacion-detallada.component.html',
  styleUrls: ['./registar-donacion-detallada.component.css']
})
export class RegistarDonacionDetalladaComponent implements OnInit {

  //Tipo produco usado para observar si el codigo indicado pega con alguno de estos
  productosValidos = []; 

  //La clase Producto tiene cantidad y vencimiento y conoce su tipo. usada
  //para enlistar los productos
  productos = [];

  //fechaRetirro, barcode, ammount
  form: FormGroup;

  //conoce su descripcion y se debe crear un traslado con su fecha de retiro
  nuevaDonacion: Donacion; 

  //contiene la lista de productos
  descripcion: DescripcionDetallada;

  //se lo debe iniciar vinculado a la nueva donacion y con
  //fecha estimada = fecha de retiro del form
  traslado: Traslado;

  //Inicializar el form y algunas variables
  constructor() {
  	  this.form = new FormGroup({
        fechaRetiro: new FormControl(),
        barcode: new FormControl(),
        ammount: new FormControl()

      })
   }


   //Se llama cuando se presiona agregar producto
   //Si el producto es válido lo agrega a la lista de productos
   agregarProducto(){
     alert('Presionaste agregar producto')
   }

   //Debe enviar a la api el traslado, donacion, descripcion, productos
   onSubmit(){
     alert('Presionaste guardar')
   }

   //En el futuro se mostrará un lector de código de barras y al captar
   //rellenará el campo de código por lo que estaría bueno mockear ese fill
   leerConScanner(){
     alert('Presionaste lector de barras, se llenarán los campos automaticamente')
   }

  ngOnInit() {
  }

}
