import { Component, OnInit } from '@angular/core';
import { LoopBackConfig, BaseLoopBackApi } from '../../../_services/lbservice';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Route } from '@angular/compiler/src/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Voluntario, Vehiculo, Volumen, Ubicacion } from '../../../_services/lbservice/models';
import { VoluntarioApi, VehiculoApi, VolumenApi, UbicacionApi } from '../../../_services/lbservice/services';
import { GeoPoint } from '../../../_models/GeoPoint';
import { AddressConverter } from '../../../_models/AddressConverter';

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
  addressConverter: AddressConverter;
  ubicacion: Ubicacion;

  constructor(private ubicacionApi:UbicacionApi, private voluntarioApi: VoluntarioApi, private vehiculoApi : VehiculoApi, private volumenApi : VolumenApi, private route: ActivatedRoute , private router:Router ) {

    // se crean las instancias de voluntario, vehiculo y volumen
    this.voluntario = new Voluntario();
    this.vehiculo = new Vehiculo();
    this.volumen = new Volumen();
    this.ubicacion = new Ubicacion();
    this.addressConverter= new AddressConverter;

    this.form = new FormGroup({
      // atributos del voluntario
      nombre: new FormControl('',[Validators.required]),
      apellido: new FormControl('',[Validators.required]),
      dni: new FormControl('',[Validators.required]),
      direccion: new FormControl('',[Validators.required]),
      username: new FormControl('',[Validators.required]),
      email: new FormControl('',[Validators.required,Validators.email,Validators.email]),
      celular: new FormControl('',[Validators.required]),
      password1: new FormControl('',[Validators.required]),
      password2: new FormControl('',[Validators.required]),
      distancia: new FormControl('',[Validators.required]),
      observaciones: new FormControl(),
    
      // atributos del vehículo
      marca: new FormControl('',[Validators.required]),
      modelo: new FormControl('',[Validators.required]),
      patente: new FormControl('',[Validators.required]),

      // atributos del volumen
      alto: new FormControl('',[Validators.required]),
      ancho: new FormControl('',[Validators.required]),
      largo: new FormControl('',[Validators.required]),

    });
    
  }

  // Get de cada uno de los inputs 
  get nombre() {return this.form.get('nombre');}
  get apellido() {return this.form.get('apellido');}
  get dni() {return this.form.get('dni');}
  get direccion() {return this.form.get('direccion');}
  get username() {return this.form.get('username');}
  get email() {return this.form.get('email');}
  get celular() {return this.form.get('celular');}
  get password1() {return this.form.get('password1');}
  get password2() {return this.form.get('password2');}
  get distancia() {return this.form.get('distancia');}
  get observaciones() {return this.form.get('observaciones')}

  get marca() {return this.form.get('marca');}
  get modelo() {return this.form.get('modelo');}
  get patente() {return this.form.get('patente');}

  get alto() {return this.form.get('alto');}
  get ancho() {return this.form.get('ancho');}
  get largo() {return this.form.get('largo');}

  
	get emailIsInvalid(){	
		return this.form.get('email').dirty && !this.form.get('email').valid
  }
  
  get passwordsNotEquals(){
		return this.form.get('password2').dirty && (this.form.get('password1').value != this.form.get('password2').value) 
	}


  onSubmit() {
    //Validar campos
    if (this.form.valid) {
      "capturo cada uno de los valores que se ingresaron en los inputs"
      this.voluntario.nombre = this.form.get("nombre").value;                         
      this.voluntario.apellido = this.form.get("apellido").value;                   
      this.voluntario.dni = this.form.get("dni").value;        
      // this.voluntario.direccion = this.form.get("direccion").value(); 
      /*
       * La dirección nos quedó en ubicación, es porque lleva asociado un geopoint
       * Entonces hay que crear un objeto ubicación, agregarle la dirección y usar
       * el convertidor de direcciones a geopoints mockeado para darle un geopoint
       * luego asociar esa ubicacion al voluntario dandole su id       
      */
      this.ubicacion.direccion =this.form.get("direccion").value;
      this.ubicacion.puntoGeografico =
      this.addressConverter.coordinateForAddress(this.ubicacion.direccion);
      //this.ubicacion.beneficiarioId = La pido a la api mas delante                  
      this.voluntario.username = this.form.get("username").value;                     
      this.voluntario.email = this.form.get("email").value;                         
      this.voluntario.telefono = this.form.get("celular").value;                        
      this.voluntario.password = this.form.get("password1").value;
      // this.voluntario = this.form.get("password2").value();
      this.voluntario.distanciaMaxima = this.form.get("distancia").value;           
      this.voluntario.puntuacion = 0;                                                 
      // Roles de loopback. Se deja con un string vacío.
      this.voluntario.realm = "";
      this.voluntario.observaciones = this.form.get("observaciones").value;
   
      // Se crea el vehículo del voluntario
      this.vehiculo.marca = this.form.get("marca").value;
      this.vehiculo.modelo = this.form.get("modelo").value;
      this.vehiculo.patente = this.form.get("patente").value;
      //this.vehiculo.voluntarioId = Se crea mas abajo, como una promesa
  
      // Se crea el volumen del vehículo del voluntario"
      this.volumen.alto = this.form.get("alto").value;
      this.volumen.ancho = this.form.get("ancho").value;
      this.volumen.largo = this.form.get("largo").value;
      //this.volumen.vehiculoId =  Se crea mas abajo, como una promesa
      //this.volumen.envioParaBeneficiarioId = "VER"
      /* El volumen puede ser de un auto, un envio, o alguna otra cosa,
       * Si el volumen que estás creando no es de un envio por ejemplo solo lo dejas en null
       * En este caso solo se completaria el volumen.vehiculoId, lo demás en blanco
      */
      //Marco que tiene vehiculo
      if (this.form.get("marca").value != null){
        this.voluntario.tieneVehiculo = "si" //Defalt es no asique se asigna solo
      }
      
  
      // Creo el voluntario y genero una promesa
      this.voluntarioApi.create(this.voluntario).subscribe((voluntarioCreado: Voluntario) => { 
  
        // asocio el voluntario al vehiculo y a su ubicacion
        this.vehiculo.voluntarioId = voluntarioCreado.id;
        this.ubicacion.voluntarioId = voluntarioCreado.id;
        // creo la promesa para el vehículo del voluntario
        this.vehiculoApi.create(this.vehiculo).subscribe((vehiculoCreado: Vehiculo) => {
  
              // Asocio al volumen, el vehiculo.
              this.volumen.vehiculoId = vehiculoCreado.id;
  
             // creo la promesa para el volumen del vehículo del voluntario
              this.volumenApi.create(this.volumen).subscribe(() => {
                 this.ubicacionApi.create(this.ubicacion).subscribe(()=>{
                     alert('El voluntario se registró exitosamente');
                     this.router.navigateByUrl("/perfil-voluntario");
                 })
                 
            })
        })
     });

    } else {
      alert('Por favor, completa los datos solicitados');
    }
}

ngOnInit() {

}

}
