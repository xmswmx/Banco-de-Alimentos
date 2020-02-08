import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { Router, ActivatedRoute } from '@angular/router';
import { VoluntariosService } from 'src/app/_services/voluntarios.service';
import { VehiculoApi, VoluntarioApi, TrasladoApi, DonanteApi, DonacionApi, DescripcionDetalladaApi, ProductoApi, TipoProductoApi } from '../../../_services/lbservice/services';
import { Vehiculo, Voluntario, Traslado, Ubicacion, Volumen, Donacion, EnvioParaBeneficiario } from '../../../_services/lbservice/models';
import { Location } from '@angular/common';
import { environment } from "src/environments/environment"
import { HttpService } from 'src/app/_services/http.service'

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
  constructor(private http:HttpService,private _location:Location, private apiVehiculo:VehiculoApi,private apiVoluntario:VoluntarioApi,private apiTraslado:TrasladoApi, private route:ActivatedRoute,private service:VoluntariosService, private router: Router) {
  	//buscar-voluntarios/:idTraslado/:origen/:destino
  	this.idTraslado = route.snapshot.paramMap.get("idTraslado");
  	this.dirOrigen = route.snapshot.paramMap.get("origen");
  	this.dirDestino = route.snapshot.paramMap.get("destino");
    this.url = environment.frontendUrl+'/asignar-traslado/'+this.idTraslado;
  	console.log(this.idTraslado,this.dirOrigen,this.dirDestino);

    this.apiTraslado.findById(this.idTraslado).subscribe((traslado:Traslado)=>{
      this.volumenTotal = traslado.volumenTotal;
      this.distancia = Math.round(traslado.distancia);
      this.apiVoluntario.find().subscribe((voluntarios:Voluntario[])=>{
        let voluntariosFiltradosPorDistancia = voluntarios.filter(volun => volun.distanciaMaxima >= this.distancia);
        //OK

        this.voluntarios= [];
        for(let voluntario of voluntariosFiltradosPorDistancia){

          if (voluntario.tieneVehiculo == 'si') {
            this.apiVoluntario.getVehiculo(voluntario.id,true).subscribe((vehiculo)=>{
                this.apiVehiculo.getVolumen(vehiculo.id,true).subscribe((volumen:Volumen)=>{
                  this.capacidad=volumen.alto*volumen.ancho*volumen.largo;
                  if (this.capacidad>=this.volumenTotal){
                    this.voluntarios.push(voluntario);
                    console.log('Se agregó un voluntario');
                  } //Fin if volumen >
                }) // fin getvolumen
              }) //Fin gevehiculo
            } 
        }//Fin for voluntario








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
  this.http.sendEmail("http://localhost:3000/sendmail",user ).subscribe(
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
    alert('Se envio un email a los seleccionados con la URL: '+this.url);
  }

  ngOnInit() {
  }

}
