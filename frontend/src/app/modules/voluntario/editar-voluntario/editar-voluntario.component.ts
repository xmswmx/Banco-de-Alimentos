import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { Voluntario, Vehiculo, Volumen, Ubicacion } from '../../../_services/lbservice/models';
import { VoluntarioApi, VehiculoApi, VolumenApi, UbicacionApi } from '../../../_services/lbservice/services';
import { AddressConverter } from '../../../_models/AddressConverter';

@Component({
  selector: 'app-editar-voluntario',
  templateUrl: './editar-voluntario.component.html',
  styleUrls: ['./editar-voluntario.component.css']
})
export class EditarVoluntarioComponent implements OnInit {

  voluntario: Voluntario;
  vehiculo: Vehiculo;
  volumen: Volumen;
  ubicacion: string;
  form: FormGroup;
  addressConverter: AddressConverter;

  constructor(private apiVoluntario: VoluntarioApi, apiVehiculo: VehiculoApi, apiVolumen: VolumenApi, private router: Router) { 

  this.form = new FormGroup({
    // atributos del voluntario
   
    ubicacion: new FormControl(),
    distancia: new FormControl(),
    
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
  onSubmit() {
    
    if (this.form.valid) {
      "capturo cada uno de los valores que se ingresaron en los inputs"
       
      // this.voluntario.direccion = this.form.get("direccion").value(); 
      /*
       * La dirección nos quedó en ubicación, es porque lleva asociado un geopoint
       * Entonces hay que crear un objeto ubicación, agregarle la dirección y usar
       * el convertidor de direcciones a geopoints mockeado para darle un geopoint
       * luego asociar esa ubicacion al voluntario dandole su id       
      */
                
      this.voluntario.distanciaMaxima = this.form.get("distancia").value;           
                                              
      // Se crea el vehículo del voluntario
      this.vehiculo.marca = this.form.get("marca").value;
      this.vehiculo.modelo = this.form.get("modelo").value;
      this.vehiculo.patente = this.form.get("patente").value;
      //this.vehiculo.voluntarioId = Se crea mas abajo, como una promesa
  
      // Se crea el volumen del vehículo del voluntario"
      this.volumen.alto = this.form.get("alto").value;
      this.volumen.ancho = this.form.get("ancho").value;
      this.volumen.largo = this.form.get("largo").value;
      //Marco que tiene vehiculo
    //  if (this.form.get("marca").value != null){
     //   this.voluntario.tieneVehiculo = "si" //Defalt es no asique se asigna solo
    //  }

      console.log('Voluntario:', this.voluntario)
      console.log('Volumen:', this.volumen)
      console.log('Vehículo:', this.vehiculo)
      
    // Actualizar el vehículo + volumen + distanciaMáxima
    this.apiVoluntario.upsert(this.voluntario).subscribe(()=>
     console.log('voluntario despues:', this.voluntario)
    )

    
    
    
    }
  }
  ngOnInit() {
  }

}
