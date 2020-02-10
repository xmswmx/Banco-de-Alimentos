import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { Router, ActivatedRoute } from '@angular/router';
import { VoluntariosService } from 'src/app/_services/voluntarios.service';
import { VehiculoApi, VoluntarioApi, TrasladoApi, DonanteApi, DonacionApi, DescripcionDetalladaApi, ProductoApi, TipoProductoApi } from '../../../_services/lbservice/services';
import { Vehiculo, Voluntario, Traslado, Ubicacion, Volumen, Donacion, EnvioParaBeneficiario } from '../../../_services/lbservice/models';
import { Location } from '@angular/common';
import { environment } from "src/environments/environment"
import { HttpService } from 'src/app/_services/http.service'
import { HttpClient } from '@angular/common/http';
import { DataApiService } from 'src/app/_services/data-api.service';

@Component({
  selector: 'app-buscar-voluntario',
  templateUrl: './buscar-voluntario.component.html',
  styleUrls: ['./buscar-voluntario.component.css']
})
export class BuscarVoluntarioComponent implements OnInit {


//Necesito recibir la ID del traslado, la distancia y el volumen
	idTraslado:string;
	dirOrigen:string;
	dirDestino:string;
  capacidad:number;
	distancia:number;
	volumenTotal:number;
  url:string;
  voluntarios : Voluntario[] = [];
  

  constructor(public dataApi:DataApiService, protected httpClient: HttpClient,private http:HttpService,private _location:Location, private apiVehiculo:VehiculoApi,private apiVoluntario:VoluntarioApi,private apiTraslado:TrasladoApi, private route:ActivatedRoute,private service:VoluntariosService, private router: Router) {
  	//buscar-voluntarios/:idTraslado/:origen/:destino
  	this.idTraslado = route.snapshot.paramMap.get("idTraslado");
  	this.dirOrigen = route.snapshot.paramMap.get("origen");
  	this.dirDestino = route.snapshot.paramMap.get("destino");
    this.url = environment.frontendUrl+'/asignar-traslado/'+this.idTraslado;
    this.dataApi.getTrasladoPorId(this.idTraslado).subscribe((traslado:Traslado)=>{
      this.volumenTotal = traslado.volumenTotal;
      this.distancia = Math.round(traslado.distancia);
      this.dataApi.getVoluntariosQueRecorrenUnaDistancia(this.distancia).subscribe((voluntarios:Voluntario[])=>{
        this.voluntarios= [];
        for(let voluntario of voluntarios){
          if (voluntario.tieneVehiculo == 'si') {
            this.dataApi.getVehiculoDeVoluntario(voluntario.id).subscribe((vehiculo:Vehiculo)=>{
              this.dataApi.getVolumenDelVehiculo(vehiculo.id).subscribe((volumen:Volumen)=>{
                  this.capacidad=volumen.alto*volumen.ancho*volumen.largo;
                  if (this.capacidad>=this.volumenTotal){
                    this.voluntarios.push(voluntario);
                    console.log('Se agregó un voluntario');
                  } //Fin if volumen >
                }) // fin getvolumen
              }) //Fin gevehiculo
            } 
        }//Fin for voluntari
      }) //apivoluntarios      
    }) //find traslado
  } //constructor

  enviarEmailA(casilla){
      let user = {
      name: 'Voluntario',
      email: casilla,
      html: '<h1> ¡Tenés un traslado disponible! </h1><p>Inicia sesión en la app e ingresa al siguiente enlace para ver detalles: </p>'+ this.url,
      subject: 'Traslado disponible'
    }
    alert('email enviado a '+ user.name)
  this.http.sendEmail(environment.backendUrl+"/sendmail",user ).subscribe(
      data => {
        let res:any = data; 
        console.log('Email enviado');
      },
      err => {
        console.log(err);
      }
    );

    alert('Se envio un email a '+casilla+' con la siguiente URL: '+this.url)
  }

  enviarEmails(){
    //Para cada seleccionado llamar a enviarEmailA(casilla)
    for (let voluntario of this.voluntarios) {
      let user = {
        name: 'Voluntario',
        email: voluntario.email,
        html: '<h1> ¡Tenés un traslado disponible! </h1><p>Inicia sesión en la app e ingresa al siguiente enlace para ver detalles: </p>'+ this.url,
        subject: 'Traslado disponible'
      }
    this.http.sendEmail(environment.backendUrl+"/sendmail",user ).subscribe(
        data => {
          let res:any = data;
        },
        err => {
          console.log(err);
        }
      );
    }
    alert('El correo se ha enviado a todos los voluntarios correctamente');
    this.router.navigateByUrl("/panel-de-control");
  }

  ngOnInit() {
  }

}
