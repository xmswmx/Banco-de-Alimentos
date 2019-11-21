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
  constructor(apiTraslado:TrasladoApi,apiDonante: DonanteApi,apiDonacion:DonacionApi, apiDescripcion:DescripcionDetalladaApi,apiProducto:ProductoApi,apiTipoProducto:TipoProductoApi ) {
  	  this.form = new FormGroup({
        fechaRetiro: new FormControl(),
        barcode: new FormControl(),
        ammount: new FormControl(),
        vto: new FormControl()

      });
      this.nuevaDonacion = new Donacion;
      this.descripcion = new DescripcionDetallada;
      this.traslado = new Traslado;


      //Le pido todos los tipo producto a la api (0:nombre,1:codigo,2:id)
      apiTipoProducto.find().subscribe((todoslosproductos)=>{
        this.productosValidos = todoslosproductos;
        console.log(this.productosValidos); //testing
      });
   }


   //Se llama cuando se presiona agregar producto
   //Si el producto es válido lo agrega a la lista de productos
   //Se agrega: Descripcion del producto, cantidad, idTipoProducto, vencimiento
   agregarProducto(){
     
     // VALIDACIONES
     let barcode = this.form.get("barcode").value;
     let existeElCodigo = this.productosValidos.some((element:TipoProducto)=> element.codigoBarra == barcode);
     let cantidad = this.form.get("ammount").value;
     let vto = this.form.get("vto").value;
     if (!existeElCodigo){
       alert("El código no existe");
       return 0;
     }
     if (cantidad <= 0){
       alert(cantidad);
       return 0;
     }
     //Controlar que noeste vencido
     
     // CARGAR
     // Quiero cargar Descripcion (esta en tipoProducto), vto, cantidad, idTipoProducto
     let tipo:TipoProducto = this.productosValidos.find(tipoproducto => tipoproducto.codigoBarra == barcode);
     console.log(tipo);
     this.productos.push([
         tipo.nombre,
         cantidad,
         vto,
         tipo.id
       ])
     
     //Los productos se agregan y se muestran, ahora hay que mandar todo a la API

   }

   //Debe enviar a la api el traslado, donacion, descripcion, productos
   onSubmit(){
     alert('Presionaste guardar')
   }

   //En el futuro se mostrará un lector de código de barras y al captar
   //rellenará el campo de código por lo que estaría bueno mockear ese fill
   leerConScanner(){
     alert('Se simula la lectura de un menthoplus');
     this.form.get("barcode").setValue('9845475257847');
   }

  ngOnInit() {
  }

}
