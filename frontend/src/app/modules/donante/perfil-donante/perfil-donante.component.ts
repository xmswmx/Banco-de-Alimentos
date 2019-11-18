import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { faStar, faCandyCane, faGift, faEgg, faGifts , faHandsHelping, faDonate } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faFacebook,faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { UbicacionApi, DonanteApi, PersonaDeContactoApi } from '../../../_services/lbservice/services';
import { Ubicacion, Donante, PersonaDeContacto } from '../../../_services/lbservice/models';  



@Component({
  selector: 'app-perfil-donante',
  templateUrl: './perfil-donante.component.html',
  styleUrls: ['./perfil-donante.component.css']
})
export class PerfilDonanteComponent implements OnInit {


	//imagenes de insignias
  	faCandyCane=faCandyCane;
  	faGift=faGift;
  	faGifts=faGifts;
  	faHandsHelping=faHandsHelping;
  	faEgg=faEgg;
  	faDonate=faDonate;
  	faStar=faStar;

  	//Artributos que quiero mostrar
  	donante: Donante;
  	personas;
  	direccion = 'Cargando..';
    badges = [];
  constructor(private apiUbicacion: UbicacionApi, private apiDonante:DonanteApi, private apiPersona:PersonaDeContactoApi,private router:Router) { 
  	this.donante = apiDonante.getCachedCurrent();
  	apiDonante.getPersonasDeContacto(this.donante.id).subscribe((personas)=>{
  		this.personas = personas;
  		apiDonante.getUbicacion(this.donante.id,true).subscribe((ubicacion)=>{
        this.direccion = ubicacion.direccion;
        apiDonante.getInsignia(this.donante.id).subscribe((insignia)=>{
          this.badges = insignia;
          //Pero necesito averiguar el tipo de insignia para saber como es su dibujo
        })
      })


  	});

  }

  ngOnInit() {
  }

}
