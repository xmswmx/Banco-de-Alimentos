import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User, Beneficiario } from '../../_services/lbservice/models';
import { UserApi, BeneficiarioApi  } from '../../_services/lbservice/services';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  titulo = "";
  userLogged;
  tipoDeUsuario;
  constructor(private userApi:UserApi, private router:Router, private beneficiarioApi:BeneficiarioApi) { 
    this.userLogged = userApi.getCachedCurrent();
    if (this.userLogged) {
      this.tipoDeUsuario = this.userLogged.tipoDeUsuario;
      console.log(this.tipoDeUsuario);
      if (this.tipoDeUsuario=='donante'){
        console.log(this.userLogged);
      }
    }
  }
  
  logout(){
    this.userApi.logout().subscribe(()=> {this.router.navigate(['/home'])} ); 
  }
  verPerfil(){
    
  }

  setTitulo(titulo){
    this.titulo = titulo;
  }

  ngOnInit() {
  }

}