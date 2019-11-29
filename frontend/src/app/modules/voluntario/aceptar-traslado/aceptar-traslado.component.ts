import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { BALP } from '../../../_models/BALP';
import { Traslado, Ubicacion  } from '../../../_services/lbservice/models';
import { TrasladoApi, UbicacionApi } from '../../../_services/lbservice/services';

@Component({
  selector: 'app-aceptar-traslado',
  templateUrl: './aceptar-traslado.component.html',
  styleUrls: ['./aceptar-traslado.component.css']
})
export class AceptarTrasladoComponent implements OnInit {

  form: FormGroup;
  traslado : Traslado;
  ubicacion: Ubicacion;

  constructor(private apiTraslado:TrasladoApi, private apiUbicacion:UbicacionApi, private router: ActivatedRoute  ) { 
    //this.idTraslado = route.snapshot.paramMap.get("idTraslado")

    this.form = new FormGroup ({
      // atributos del traslado
      fecha : new FormControl(),
      origen : new FormControl(),
      destino : new FormControl(),
      puntaje : new FormControl(),

    })

    

  }

  ngOnInit() {
  }

}
