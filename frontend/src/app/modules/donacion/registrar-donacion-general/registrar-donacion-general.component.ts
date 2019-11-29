import { Component, OnInit } from '@angular/core';
import { TrasladoApi, DonanteApi, DonacionApi, DescripcionDetalladaApi, ProductoApi, TipoProductoApi } from '../../../_services/lbservice/services';
import { Donante, Donacion, DescripcionDetallada, Producto, TipoProducto, Traslado } from '../../../_services/lbservice/models';  
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-registrar-donacion-general',
  templateUrl: './registrar-donacion-general.component.html',
  styleUrls: ['./registrar-donacion-general.component.css']
})
export class RegistrarDonacionGeneralComponent implements OnInit {

	formGeneral: FormGroup;
  constructor() {

  	 this.formGeneral = new FormGroup({
        fechaRetiro: new FormControl(),
        alto: new FormControl(),
        ancho: new FormControl(),
        largo: new FormControl(),
        texto: new FormControl()

      });

  }


  ngOnInit() {
  }

}
