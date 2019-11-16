import { Component, OnInit } from '@angular/core';
import { LoopBackConfig, BaseLoopBackApi } from '../../../_services/lbservice';
import { FormGroup, FormControl } from '@angular/forms';
import { Route } from '@angular/compiler/src/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Voluntario, Vehiculo, Volumen } from '../../../_services/lbservice/models';
import { VoluntarioApi, VehiculoApi, VolumenApi } from '../../../_services/lbservice/services';

@Component({
  selector: 'app-registrar-voluntario',
  templateUrl: './registrar-voluntario.component.html',
  styleUrls: ['./registrar-voluntario.component.css']
})
export class RegistrarVoluntarioComponent implements OnInit {

  form: FormGroup;
  voluntario: Voluntario;
  vehiculo: Vehiculo;
  volumen: Volumen;

  constructor(private voluntarioApi: VoluntarioApi, ) {

    this.voluntario = new Voluntario();

    this.form = new FormGroup({
      nombre: new FormControl(),
      apellido: new FormControl(),
      dni: new FormControl(),
      direccion: new FormControl(),
      username: new FormControl(),
      email: new FormControl(),
      celular: new FormControl(),
      password1: new FormControl(),
      password2: new FormControl(),
      distancia: new FormControl(),
      observaciones: new FormControl(),

      marca: new FormControl(),
      modelo: new FormControl(),
      patente: new FormControl(),

      alto: new FormControl(),
      ancho: new FormControl(),
      largo: new FormControl(),

    });
  }

  onSubmit() {
    //Validar campos
    if (this.form.get("password1").value != this.form.get("password2").value) {
      alert('Las contraseñas no coinciden');
      return 0
    }

    "capturo cada uno de los valores que se ingresaron en los inputs"
    this.voluntario.nombre = this.form.get("nombre").value();                         
    this.voluntario.apellido = this.form.get("apellido").value();                   
    this.voluntario.dni = this.form.get("dni").value();                                  
    this.voluntario.username = this.form.get("username").value();                     
    this.voluntario.email = this.form.get("email").value();                         
    this.voluntario.telefono = this.form.get("celular").value();                           
    "agregar el atributo password en loopback. Luego descomentar la linea 60"
    "this.voluntario.password = this.form.get(password1).value()"
    this.voluntario = this.form.get("password2").value();
    this.voluntario.distanciaMaxima = this.form.get("distancia").value();           
    this.voluntario.puntuacion = 0;                                                 
    "Roles de loopback. Se deja con un string vacío por ahora."
    this.voluntario.realm = "";
    "agregar el atributo observaciones en loopback. Luego descomentar la linea 67"
    "this.voluntario = this.form.get(observaciones).value();"
 
    "se crea el vehículo del voluntario"
    this.vehiculo.marca = this.form.get("marca").value();
    this.vehiculo.modelo = this.form.get("modelo").value();
    this.vehiculo.patente = this.form.get("patente").value();
    this.vehiculo.voluntarioId = "idDelVoluntarioQueSeCree - Falta hacer"

    "se crea el volumen del vehículo del voluntario"
    this.volumen.alto = this.form.get("alto").value();
    this.volumen.ancho = this.form.get("ancho").value();
    this.volumen.largo = this.form.get("largo").value();
    this.volumen.vehiculoId =  "idDelVehiculoQueSeCree - FALTA HACE"
    this.volumen.envioParaBeneficiarioId = "VER"
    this.volumen.idDescripcionGeneral = "Descripcion general del envio - VER"
    

    // creo el voluntario y genero una promesa
    this.voluntarioApi.create(this.voluntario).subscribe((voluntarioCreado: Voluntario) => { 
      alert('El voluntario se registró exitosamente');
   });

 
}

ngOnInit() {

}
}
