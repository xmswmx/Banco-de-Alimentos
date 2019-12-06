import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { Voluntario, Vehiculo, Volumen, Ubicacion } from '../../../_services/lbservice/models';
import { VoluntarioApi, VehiculoApi, VolumenApi, UbicacionApi } from '../../../_services/lbservice/services';
import { AddressConverter } from '../../../_models/AddressConverter';
import { Validators } from '@angular/forms';

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
  idVoluntario : string;
  form: FormGroup;
  addressConverter: AddressConverter;

  constructor(private apiVoluntario: VoluntarioApi, private apiVehiculo: VehiculoApi, private apiVolumen: VolumenApi, private router: Router) { 

  this.form = new FormGroup({
    // atributos del voluntario
    nombre : new FormControl(),
    apellido : new FormControl(),
    dni : new FormControl(),
    username: new FormControl(),
    email : new FormControl(),
    celular : new FormControl(), 
    observaciones: new FormControl(),
    distancia: new FormControl(),

    // atributos de la ubicación del voluntario
    ubicacion: new FormControl(),
  
    // atributos del vehículo del voluntario
    marca: new FormControl(),
    modelo: new FormControl(),
    patente: new FormControl(),

    // atributos del volumen del voluntario
    alto: new FormControl(), 
    ancho: new FormControl(),
    largo: new FormControl(),
   });

   // Promesas para obtener los datos del voluntario logueado
   this.voluntario = apiVoluntario.getCachedCurrent();
   this.idVoluntario = this.voluntario.id;
   apiVoluntario.getVehiculo(this.voluntario.id, true).subscribe((vehiculo) => {
     this.vehiculo = vehiculo;
     apiVehiculo.getVolumen(this.vehiculo.id, true).subscribe((volumen) => {
       this.volumen = volumen;
       apiVoluntario.getUbicacion(this.voluntario.id,true).subscribe((ubicacion)=>{	
         this.ubicacion = ubicacion.direccion;					
     })

   })

 })

    this.form.controls["dni"].setValue(this.voluntario.dni);
    this.form.controls["nombre"].setValue(this.voluntario.nombre);
 }


  // ACCION QUE DISPARA EL BOTON DE ACTUALIZAR VOLUNTARIO
  onSubmit() {
 
  //  if (this.form.valid) {       
      // capturo y actualizo los atributos del voluntario 
      /*      
      this.voluntario.nombre = this.form.get("nombre").value;
      this.voluntario.apellido = this.form.get("apellido").value;
      this.voluntario.dni = this.form.get("dni").value;
      this.voluntario.username = this.form.get("username").value;
      this.voluntario.email = this.form.get("email").value;
      this.voluntario.telefono = this.form.get("celular").value;
      this.voluntario.observaciones = this.form.get("observaciones").value;  
      this.voluntario.distanciaMaxima = this.form.get("distancia").value;    
*/
      console.log('nombre:', this.voluntario.nombre)
      console.log('apellido:', this.voluntario.apellido)
      console.log('dni:', this.voluntario.dni)
      console.log('username:', this.voluntario.username)
      console.log('email:', this.voluntario.email)
      console.log('telefono:', this.voluntario.telefono)
      console.log('observaciones:', this.voluntario.observaciones)
      console.log('distanciaMaxima:', this.voluntario.distanciaMaxima)


      // capturo y actualizo la dirección del voluntario
  
  //    this.ubicacion = this.form.get("direccion").value;            
      
      // capturo y actualizo los datos del vehículo del voluntario
   /*   this.vehiculo.marca = this.form.get("marca").value;
      this.vehiculo.modelo = this.form.get("modelo").value;
      this.vehiculo.patente = this.form.get("patente").value;*/

      console.log('marca :', this.vehiculo.marca)
      console.log('modelo  :', this.vehiculo.modelo)
      console.log('patente :', this.vehiculo.patente)  

      console.log('Vehículo 1:', this.vehiculo)
  
      // capturo y actualizo el volumen del vehículo del voluntario"
   /*   this.volumen.alto = this.form.get("alto").value;
      this.volumen.ancho = this.form.get("ancho").value;
      this.volumen.largo = this.form.get("largo").value; */

      console.log('Volumen 1:', this.volumen)
     
      //Marco que tiene vehiculo
      if (this.form.get("marca").value != null){
        this.voluntario.tieneVehiculo = "si" 
      }

    // Se debe actualizar el voluntario, su vehículo y el volumen del mismo 

   // Actualizo al voluntario
    this.apiVoluntario.patchAttributes(this.idVoluntario,{
      "nombre": this.voluntario.nombre,
      "apellido": this.voluntario.apellido,
      "dni": this.voluntario.dni,
      "username": this.voluntario.username,
      "email": this.voluntario.email,
      "telefono": this.voluntario.telefono,
      "distanciaMaxima": this.voluntario.distanciaMaxima,     
      "observaciones": this.voluntario.observaciones,   
      "tieneVehiculo": this.voluntario.tieneVehiculo
      }).subscribe(()=>{       
          console.log('Voluntario post actualización:', this.voluntario)
             // Actualizo el vehículo del voluntario (el patch de la api de vehículos recibe un id de vehículo -segun loopback-)
            this.apiVehiculo.patchAttributes(this.vehiculo.id,{
              "marca": this.vehiculo.marca,
              "modelo": this.vehiculo.modelo,
              "patente": this.vehiculo.patente
            }).subscribe(()=>{
                console.log('Vehículo post actualización:', this.vehiculo)})
                  // Actualizo el volumen del vehículo del voluntario (el patch de la api de volumen recibe un id de volumen -segun loopback-)
                  this.apiVolumen.patchAttributes(this.volumen.id,{
                    "alto": this.volumen.alto,
                    "ancho": this.volumen.ancho,
                    "largo": this.volumen.largo
                  }).subscribe(()=>{
                      // En el último update lanzo el alert 
                      console.log('Volumen post actualización:', this.volumen)})
                      alert('El voluntario ha sido actualizado correctamente')
                      this.router.navigateByUrl("/perfil-voluntario");
        })       
     }
  //}

  ngOnInit() {
  }

}
