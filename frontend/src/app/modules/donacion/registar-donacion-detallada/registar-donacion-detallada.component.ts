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

  idDonante;
  //Inicializar el form y algunas variables
  constructor(private apiTraslado:TrasladoApi,private apiDonante: DonanteApi,private apiDonacion:DonacionApi, private apiDescripcion:DescripcionDetalladaApi,private apiProducto:ProductoApi,private apiTipoProducto:TipoProductoApi ) {
  	  this.form = new FormGroup({
        fechaRetiro: new FormControl(),
        barcode: new FormControl(),
        ammount: new FormControl(),
        vto: new FormControl()

      });
      this.idDonante = apiDonante.getCachedCurrent().id;
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
     //en onSubmit
   }

   //Debe enviar a la api el traslado, donacion, descripcion, productos
   onSubmit(){

     this.idDonante
     this.nuevaDonacion.estado = 'nueva'; 
     //Estaria bien que la api lo inicialize
     //Definir estados 
     //this.nuevaDonacion.fechaRegistro = Date.now();
     //this.nuevaDonacion.numero
     this.apiDonacion.create(this.nuevaDonacion).subscribe((donacionCreada:Donacion)=>{
       //Ahora creo su traslado
       //Falta inicializar cosas
       //this.traslado.
       this.apiTraslado.create(this.traslado).subscribe(()=>{
         this.apiDescripcion.create(this.descripcion).subscribe((desc:DescripcionDetallada)=>{
           for(let producto of this.productos){
             /* Esto tiene this.productos
               0 tipo.nombre,
               1 cantidad,
               2 vto,
               3 tipo.id
             */
             let nuevoProducto = new Producto;
             nuevoProducto.cantidad = this.productos[1];
             nuevoProducto.vencimiento = this.productos[2];
             nuevoProducto.tipoProductoId = this.productos[3];
             nuevoProducto.descripcionDetalladaId = desc.id;
             this.apiProducto.create(nuevoProducto).subscribe(()=>{
               //Controlar si soy el ultimo
             }) //Fin de create producto
           } //Fin for productos
         }) //Fin descripcion
       }) //Fin traslado
     }) //Fin donacion
   } //Fin submit

   //En el futuro se mostrará un lector de código de barras y al captar
   //rellenará el campo de código por lo que estaría bueno mockear ese fill
   leerConScanner(){
     alert('Se simula la lectura de un menthoplus');
     this.form.get("barcode").setValue('9845475257847');
   }

  ngOnInit() {
  }

}
