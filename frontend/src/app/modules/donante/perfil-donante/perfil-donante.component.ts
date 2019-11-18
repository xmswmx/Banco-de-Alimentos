import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { faStar, faCandyCane, faGift, faEgg, faGifts , faHandsHelping, faDonate } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faFacebook,faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'

@Component({
  selector: 'app-perfil-donante',
  templateUrl: './perfil-donante.component.html',
  styleUrls: ['./perfil-donante.component.css']
})
export class PerfilDonanteComponent implements OnInit {


  	candy=faCandyCane;
  	gift=faGift;
  	gifts=faGifts;
  	hands=faHandsHelping;
  	egg=faEgg;
  	donate=faDonate;
  	star=faStar;
  constructor(private router:Router) { 

  }

  ngOnInit() {
  }

}
