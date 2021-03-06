import { Component, OnInit } from '@angular/core';
import { TrasladoApi, DonanteApi, DonacionApi, DescripcionGeneralApi} from '../../../_services/lbservice/services';
import { Donante, Donacion, DescripcionGeneral, Traslado } from '../../../_services/lbservice/models';  
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { BALP } from '../../../_models/BALP';
import { AddressConverter } from '../../../_models/AddressConverter'
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-registrar-donacion-general',
  templateUrl: './registrar-donacion-general.component.html',
  styleUrls: ['./registrar-donacion-general.component.css']
})
export class RegistrarDonacionGeneralComponent implements OnInit {

	formGeneral: FormGroup;
  distancia;
  fechaActual = new Date();
  constructor(private router:Router,private trasladoApi:TrasladoApi,private donanteApi: DonanteApi, private donacionApi:DonacionApi, private descApi:DescripcionGeneralApi) {
    
  	 this.formGeneral = new FormGroup({
        fechaRetiro: new FormControl('', [Validators.required]),
        alto: new FormControl('', [Validators.required]),
        ancho: new FormControl('', [Validators.required]),
        largo: new FormControl('', [Validators.required]),
        texto: new FormControl('', [Validators.required]),
        peso: new FormControl('', [Validators.required])
        

      });


      //Obteniendo distancia
      let idDonante = donanteApi.getCachedCurrent().id;
      let converter = new AddressConverter;
      let balp = new BALP;
      this.donanteApi.getUbicacion(idDonante,true).subscribe((ubi)=>{
        let origen = converter.coordinateForAddress(ubi.direccion);
        let destino = converter.coordinateForAddress(balp.ubicacionBALP.direccion);
        this.distancia = converter.distanceFromTo(origen,destino);
      })



  }

  get fechaRetiro() { return this.formGeneral.get('fechaRetiro'); }
  get alto() { return this.formGeneral.get('alto'); }
  get ancho() { return this.formGeneral.get('ancho'); }
  get largo() { return this.formGeneral.get('largo'); }
  get texto() { return this.formGeneral.get('texto'); }
  get peso() { return this.formGeneral.get('peso'); }



  onSubmit(){
    if (this.formGeneral.valid) {
      let texto = this.formGeneral.get("texto").value;
      let fecha = this.formGeneral.get("fechaRetiro").value;
      let alto = this.formGeneral.get("alto").value;
      let ancho = this.formGeneral.get("ancho").value;
      let largo = this.formGeneral.get("largo").value;
      let peso = this.formGeneral.get("peso").value;

      let desc: DescripcionGeneral = new DescripcionGeneral;
      let donante: Donante = new Donante;
      let donacion: Donacion = new Donacion;
      let traslado: Traslado = new Traslado;
      let idDonante = this.donanteApi.getCachedCurrent().id;

      donacion.idDonante = idDonante;
      donacion.estado = 'nueva';
      donacion.tipoDescripcion = 'general';

      this.donacionApi.count().subscribe((numero)=>{
          donacion.numero = numero.count;
          this.donacionApi.create(donacion).subscribe((donacionCreada:Donacion)=>{
            traslado.fechaEstimada= fecha;
            traslado.idDonacionTrasladadaAlBanco = donacionCreada.id;
            traslado.tipo = 'donacion';
            traslado.volumenTotal = alto * ancho * largo;
            traslado.descripcion = texto;
            traslado.puntaje = this.distancia * peso;
            traslado.distancia = this.distancia;
            traslado.peso= peso;
            this.trasladoApi.create(traslado).subscribe(()=>{
              
              //De legado
              desc.descripcion=texto;

              desc.idDonacion=donacionCreada.id;
              //desc.volumenes FALTA pero es obsoleto por ahora
              this.descApi.create(desc).subscribe((desc:DescripcionGeneral)=>{
                this.router.navigateByUrl("/mis-donaciones");
                alert('Se registró la donación');
              })//Fin create desc
            })//Fin create traslado
          })//Fin create donacion          
        }) //Fin count
      } else {
        alert('Por favor, completa los datos solicitados');
      }
  }

  ngOnInit() {
  }

}
