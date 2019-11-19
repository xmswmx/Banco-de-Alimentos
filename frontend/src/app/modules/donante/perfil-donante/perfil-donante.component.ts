import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { faStar, faCandyCane, faGift, faEgg, faGifts , faHandsHelping, faDonate } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faFacebook,faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { UbicacionApi, DonanteApi, PersonaDeContactoApi, InsigniaApi, TipoInsigniaApi } from '../../../_services/lbservice/services';
import { Ubicacion, Donante, PersonaDeContacto, Insignia, TipoInsignia } from '../../../_services/lbservice/models';  



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
    prueba = 'title= "faGift"'
    pruebas = ['faGift','faEgg'];
    badges = []; //Se 0:Nombre, 1:icono, 2:fechaOtorgada, 3:vto
  constructor(private apiInsignia: InsigniaApi,private apiUbicacion: UbicacionApi, private apiDonante:DonanteApi, private apiPersona:PersonaDeContactoApi,private router:Router) { 
    this.donante = apiDonante.getCachedCurrent();
  	apiDonante.getPersonasDeContacto(this.donante.id).subscribe((personas)=>{
  		this.personas = personas;
  		apiDonante.getUbicacion(this.donante.id,true).subscribe((ubicacion)=>{
        this.direccion = ubicacion.direccion;
        apiDonante.getInsignia(this.donante.id).subscribe((insignias)=>{
          for (let insignia of insignias){
            apiInsignia.getTipoInsignia(insignia.id,true).subscribe((tipodeinsignia:TipoInsignia)=>{
                this.badges.push([
                   tipodeinsignia.nombre,
                   faGifts, //Necesito guardar objetos de la clase "tipodeinsignia.imagen"
                   insignia.fechaOtorgada,
                   insignia.fechaVencimiento
                  ]);

              })
            
            } //Termina el for

            this.convertirEnIconos()
          //Pero necesito averiguar el tipo de insignia para saber como es su dibujo
        })
      })


  	}); //fin primer promesa




  } //Fin constructor


  convertirEnIconos(){
    console.log(this.badges);
    for (let badge of this.badges){
      if (badge[1]=='faGift'){
        badge[1] = this.faGift;
        console.log('detectado');
      } else {
              if (badge[1]=='faEgg'){
                badge[1] = this.faEgg;
                console.log('detectado');
              } else {
                if (badge[1]=='faGifts'){
                  badge[1] = this.faGifts;
                  console.log('detectado');
                 } else {
                  if (badge[1]=='faStar'){
                    badge[1] = this.faStar;
                    console.log('detectado');
                  } else {
                     if (badge[1]=='faCandyCane'){
                      badge[1] = this.faCandyCane;console.log('detectado');
                     } else {
                       if (badge[1]=='faHandsHelping'){
                        badge[1] = this.faHandsHelping;console.log('detectado');
                      }
                    }
                  }
                }
              }
            }
          }
          console.log(this.badges)
        }

  ngOnInit() {
  }

}


/*

          apiDonante.getInsignia(this.donante.id).subscribe((insignias)=>{
            console.log(insignias);
            for (let insignia of insignias){
              console.log(insignia);
              apiInsignia.getTipoInsignia(insignia.id).subscribe((tipodeinsignia:TipoInsignia)=>{
                this.badges.push([
                   tipodeinsignia.nombre,
                   tipodeinsignia.imagen,
                   insignia.fechaOtorgada,
                   insignia.fechaVencimiento
                  ]);
              })
            }

            */