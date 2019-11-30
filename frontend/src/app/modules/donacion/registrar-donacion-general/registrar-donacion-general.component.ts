import { Component, OnInit } from '@angular/core';
import { TrasladoApi, DonanteApi, DonacionApi, DescripcionGeneralApi} from '../../../_services/lbservice/services';
import { Donante, Donacion, DescripcionGeneral, Traslado } from '../../../_services/lbservice/models';  
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-registrar-donacion-general',
  templateUrl: './registrar-donacion-general.component.html',
  styleUrls: ['./registrar-donacion-general.component.css']
})
export class RegistrarDonacionGeneralComponent implements OnInit {

	formGeneral: FormGroup;
  constructor(private router:Router,private trasladoApi:TrasladoApi,private donanteApi: DonanteApi, private donacionApi:DonacionApi, private descApi:DescripcionGeneralApi) {

  	 this.formGeneral = new FormGroup({
        fechaRetiro: new FormControl(),
        alto: new FormControl(),
        ancho: new FormControl(),
        largo: new FormControl(),
        texto: new FormControl()

      });

  }

  onSubmit(){
    let texto = this.formGeneral.get("texto").value;
    let fecha = this.formGeneral.get("fechaRetiro").value;
    let alto = this.formGeneral.get("alto").value;
    let ancho = this.formGeneral.get("ancho").value;
    let largo = this.formGeneral.get("largo").value;

    let desc: DescripcionGeneral = new DescripcionGeneral;
    let donante: Donante = new Donante;
    let donacion: Donacion = new Donacion;
    let traslado: Traslado = new Traslado;
    let idDonante = this.donanteApi.getCachedCurrent().id;

     donacion.idDonante = idDonante;
     donacion.estado = 'nueva'; 

     this.donacionApi.count().subscribe((numero)=>{
        donacion.numero = numero.count;
        this.donacionApi.create(donacion).subscribe((donacionCreada:Donacion)=>{
          traslado.fechaEstimada= fecha;
          traslado.idDonacionTrasladadaAlBanco = donacionCreada.id;
          traslado.tipo = 'donacion';
          traslado.volumenTotal = alto * ancho * largo;
          this.trasladoApi.create(traslado).subscribe(()=>{
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
  }

  ngOnInit() {
  }

}
