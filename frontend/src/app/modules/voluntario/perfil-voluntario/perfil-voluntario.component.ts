import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { Voluntario, Vehiculo, Volumen, Ubicacion } from '../../../_services/lbservice/models';
import { VoluntarioApi, VehiculoApi, VolumenApi, UbicacionApi } from '../../../_services/lbservice/services';


@Component({
  selector: 'app-perfil-voluntario',
  templateUrl: './perfil-voluntario.component.html',
  styleUrls: ['./perfil-voluntario.component.css']
})
export class PerfilVoluntarioComponent implements OnInit {

  voluntario: Voluntario;
  vehiculo: Vehiculo;
  volumen: Volumen;
  ubicacion: string;
  form: FormGroup;

  constructor(private apiVoluntario: VoluntarioApi, apiVehiculo: VehiculoApi, apiVolumen: VolumenApi, private router: Router) {
   
   
    this.form = new FormGroup({
      // atributos del voluntario
      nombre: new FormControl(),
      apellido: new FormControl(),
      dni: new FormControl(),
      ubicacion: new FormControl(),
      username: new FormControl(),
      email: new FormControl(),
      celular: new FormControl(),
      password1: new FormControl(),
      password2: new FormControl(),
      distancia: new FormControl(),
      observaciones: new FormControl(),
    
      // atributos del vehículo
      marca: new FormControl(),
      modelo: new FormControl(),
      patente: new FormControl(),

      // atributos del volumen
      alto: new FormControl(),
      ancho: new FormControl(),
      largo: new FormControl(),

    });
    
   // Promesas para obtener los datos del voluntario logueado
    this.voluntario = apiVoluntario.getCachedCurrent();
    apiVoluntario.getVehiculo(this.voluntario.id, true).subscribe((vehiculo) => {
      this.vehiculo = vehiculo;
      apiVehiculo.getVolumen(this.vehiculo.id, true).subscribe((volumen) => {
        this.volumen = volumen;
        apiVoluntario.getUbicacion(this.voluntario.id,true).subscribe((ubicacion)=>{	
          this.ubicacion = ubicacion.direccion;					
      })

    })

  })

  }

  ngOnInit() {
  }

}
