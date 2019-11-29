import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { Router, ActivatedRoute } from '@angular/router';
import { VoluntariosService } from 'src/app/_services/voluntarios.service';
import { VehiculoApi, VoluntarioApi, TrasladoApi, DonanteApi, DonacionApi, DescripcionDetalladaApi, ProductoApi, TipoProductoApi } from '../../../_services/lbservice/services';
import { Vehiculo, Voluntario, Traslado, Ubicacion, Volumen, Donacion, EnvioParaBeneficiario } from '../../../_services/lbservice/models';
import {Location} from '@angular/common';


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

	distancia:number;
	volumen:number;
  url:string;
	voluntarios : Voluntario[] = [];
  constructor(private _location:Location, private apiVehiculo:VehiculoApi,private apiVoluntario:VoluntarioApi,private apiTraslado:TrasladoApi, private route:ActivatedRoute,private service:VoluntariosService, private router: Router) {
  	//buscar-voluntarios/:idTraslado/:origen/:destino
  	this.idTraslado = route.snapshot.paramMap.get("idTraslado");
  	this.dirOrigen = route.snapshot.paramMap.get("origen");
  	this.dirDestino = route.snapshot.paramMap.get("destino");
    this.url = 'localhost:4200/asignar-traslado/'+this.idTraslado;
  	console.log(this.idTraslado,this.dirOrigen,this.dirDestino);

  	this.averiguarDistancia();

    this.apiTraslado.findById(this.idTraslado).subscribe((traslado:Traslado)=>{
      this.volumen = traslado.volumenTotal;
      this.apiVoluntario.find().subscribe((voluntarios:Voluntario[])=>{
        let voluntariosFiltradosPorDistancia = voluntarios.filter(volun => volun.distanciaMaxima >= this.distancia);
        //OK

        this.voluntarios= [];
        for(let voluntario of voluntariosFiltradosPorDistancia){

          if (voluntario.tieneVehiculo == 'si') {
            this.apiVoluntario.getVehiculo(voluntario.id,true).subscribe((vehiculo)=>{
                this.apiVehiculo.getVolumen(vehiculo.id,true).subscribe((volumen:Volumen)=>{
                  if ((volumen.alto*volumen.ancho*volumen.largo)>this.volumen){
                    this.voluntarios.push(voluntario);
                    console.log('Se agregó un voluntario');
                  } //Fin if volumen >
                }) // fin getvolumen
              }) //Fin gevehiculo
            } else {
              //Si no tiene vehiculo que lo lleve en una caja tipo glovo, de 1 metro cubico
                if (0<=this.volumen){ //Poner en 1
                  this.voluntarios.push(voluntario);
                  console.log('Se agregó un voluntario');
                  this.router.navigate(['/buscar-voluntarios']);
                } //Fin if
              } //Fin else






        }//Fin for voluntario








      }) //apivoluntarios      
    }) //find traslado
  } //constructor

  averiguarDistancia(){
  	this.distancia = 10;
  }
  enviarEmailA(casilla){
    alert('Se envio un email a '+casilla+' con la siguiente URL: '+this.url)
  }
  enviarEmails(){
    alert('Se envio un email a los seleccionados con la URL: '+this.url);
  }

  ngOnInit() {
  }

}
