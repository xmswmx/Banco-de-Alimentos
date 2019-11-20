import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { Voluntario, Vehiculo, Volumen } from '../../../_services/lbservice/models';
import { VoluntarioApi, VehiculoApi, VolumenApi } from '../../../_services/lbservice/services';


@Component({
  selector: 'app-perfil-voluntario',
  templateUrl: './perfil-voluntario.component.html',
  styleUrls: ['./perfil-voluntario.component.css']
})
export class PerfilVoluntarioComponent implements OnInit {

  voluntario: Voluntario;
  vehiculo: Vehiculo;
  volumen: Volumen;

  constructor(private apiVoluntario: VoluntarioApi, apiVehiculo: VehiculoApi, apiVolumen: VolumenApi, private router: Router) {
    this.voluntario = apiVoluntario.getCachedCurrent();
    apiVoluntario.getVehiculo(this.voluntario.id).subscribe((vehiculo) => {
      this.vehiculo = vehiculo;
      apiVehiculo.getVolumen(this.vehiculo.id, true).subscribe((volumen) => {
        this.volumen = volumen;
      })

    })

  }

  ngOnInit() {
  }

}
