import { Component, OnInit } from '@angular/core';
import { LoopBackConfig, BaseLoopBackApi } from '../../../_services/lbservice';
import { FormGroup, FormControl } from '@angular/forms';
import { Route } from '@angular/compiler/src/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Voluntario } from '../../../_services/lbservice/models';
import { VoluntarioApi } from '../../../_services/lbservice/services';

@Component({
  selector: 'app-registrar-voluntario',
  templateUrl: './registrar-voluntario.component.html',
  styleUrls: ['./registrar-voluntario.component.css']
})
export class RegistrarVoluntarioComponent implements OnInit {

  form: FormGroup;
  voluntario: Voluntario;

  constructor(private voluntarioApi: VoluntarioApi, ) {

    this.voluntario = new Voluntario();

    this.form = new FormGroup({
      nombre: new FormControl(),
      apellido: new FormControl(),
      dni: new FormControl(),
      email: new FormControl(),
      celular: new FormControl(),
      password1: new FormControl(),
      password2: new FormControl(),
      marca: new FormControl(),
      modelo: new FormControl(),
      patente: new FormControl(),
      alto: new FormControl(),
      ancho: new FormControl(),
      largo: new FormControl(),
      distancia: new FormControl(),
      observaciones: new FormControl(),

    });
  }

  onSubmit() {
    //Validar campos
    if (this.form.get("password1").value != this.form.get("password2").value) {
      alert('Las contraseñas no coinciden');
      return 0
    }

    "capturo cada uno de los valores que se ingresaron en los inputs"
    this.voluntario = this.form.get("nombre").value();
    this.voluntario = this.form.get("apellido").value();
    this.voluntario = this.form.get("dni").value();
    this.voluntario = this.form.get("email").value();
    this.voluntario = this.form.get("celular").value();
    this.voluntario = this.form.get("password1").value();
    this.voluntario = this.form.get("password2").value();
    this.voluntario = this.form.get("marca").value();
    this.voluntario = this.form.get("modelo").value();
    this.voluntario = this.form.get("patente").value();
    this.voluntario = this.form.get("alto").value();
    this.voluntario = this.form.get("ancho").value();
    this.voluntario = this.form.get("largo").value();
    this.voluntario = this.form.get("distancia").value();
    this.voluntario = this.form.get("observaciones").value();

    // creo el voluntario y genero una promesa
    this.voluntarioApi.create(this.voluntario).subscribe((voluntarioCreado: Voluntario) => { 
      alert('El voluntario se registró exitosamente');
   });

 
}

ngOnInit() {

}
}
