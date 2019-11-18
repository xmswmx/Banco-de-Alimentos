import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User, Beneficiario, Voluntario, Donante } from '../../_services/lbservice/models';
import { UserApi, BeneficiarioApi, DonanteApi, VoluntarioApi  } from '../../_services/lbservice/services';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isBeneficiario = false;
  isDonante = false;
  isVoluntario = false;
  isAdmin = false;
  userLogged:User;
  constructor(private donanteApi:DonanteApi,private voluntarioApi:VoluntarioApi,private userApi:UserApi, private router:Router, private beneficiarioApi:BeneficiarioApi) { 
	  this.userLogged = userApi.getCachedCurrent();
    //No estoy consiguiendo una forma de detectar que tipo de usuario es el que está logueado
    //Voy a tener que agregar un campo "tipoDeUsuario" en loopback
  }
  
  logout(){
	  this.userApi.logout().subscribe(()=> {this.router.navigate(['/home'])} ); 
  }
  verPerfil(){
	  
  }

  ngOnInit() {
  }

}
