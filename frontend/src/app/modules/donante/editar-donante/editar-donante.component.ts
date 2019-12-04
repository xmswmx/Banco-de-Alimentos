import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { Voluntario, Vehiculo, Volumen, Ubicacion, Donante } from '../../../_services/lbservice/models';
import { DonanteApi, VehiculoApi, VolumenApi, UbicacionApi } from '../../../_services/lbservice/services';
import { AddressConverter } from '../../../_models/AddressConverter';

@Component({
  selector: 'app-editar-donante',
  templateUrl: './editar-donante.component.html',
  styleUrls: ['./editar-donante.component.css']
})
export class EditarDonanteComponent implements OnInit {

  form: FormGroup;
  addressConverter: AddressConverter;
  donante;
  ubicacion;

  constructor(private apiUbicacion: UbicacionApi, private apiDonante: DonanteApi, apiVehiculo: VehiculoApi, apiVolumen: VolumenApi, private router: Router) { 

    this.form = new FormGroup({   
      cuil: new FormControl(),
      ubicacion: new FormControl(),
      email: new FormControl()
     });
    this.addressConverter = new AddressConverter;
    apiDonante.findById(this.apiDonante.getCachedCurrent().id).subscribe((donante:Donante)=>{
      apiDonante.getUbicacion(donante.id,true).subscribe((ub)=>{
        this.ubicacion= ub.direccion;
        console.log(ub);
        this.form.controls["cuil"].setValue(donante.cuil);
        this.form.controls["ubicacion"].setValue(ub.direccion);
        this.form.controls["email"].setValue(donante.email);
        
        /* Sobre la lectura de los datos a mostrar

          Cuidado, no usar los datos del usuario catcheado para mostrar
          ya que se quedan ahí aún después de modificiarlos.
          Es mejor pedirlos a la api para mantenerlos actualizados

        */
      })      
    })

   }

  onSubmit() {
    if (this.form.valid) {
      let cuil = this.form.get("cuil").value;
      let ubicacion:Ubicacion = new Ubicacion;
      ubicacion.direccion=this.form.get("ubicacion").value;
      ubicacion.puntoGeografico=this.addressConverter.coordinateForAddress(ubicacion.direccion);
      ubicacion.idDonante=this.apiDonante.getCachedCurrent().id;
      let email = this.form.get("email").value;

      this.apiDonante.patchAttributes(this.apiDonante.getCachedCurrent().id,{
        "cuil": cuil,
        "email": email
      }).subscribe(()=>{
        this.apiDonante.getUbicacion(this.apiDonante.getCachedCurrent().id,true).subscribe((ubi:Ubicacion)=>{
          this.apiUbicacion.patchAttributes(ubi.id,{
            "direccion": ubicacion.direccion,
            "puntoGeografico": ubicacion.puntoGeografico
          }).subscribe(()=>{
            alert("Se actualizaron los datos. 👌")
          })
        })

      })
      
    }
  }
  ngOnInit() {
  }

}
