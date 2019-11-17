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

    //Hago trampa para averiguar que tipo de usuario es, hay que arreglarlo
    if(this.userLogged.id != null){
      if(this.userLogged.cantidadAtendidos != null){this.isBeneficiario = true}
        else{
          if(this.userLogged.distanciaMaxima != null){this.isVoluntario = true}
            else{
              if(this.userLogged.cuil != null){this.isVoluntario = true}
                else {
                  this.isAdmin = true;
                }
            }
        }
    }
    console.log(this.isAdmin,this.isBeneficiario,this.isDonante,this.isVoluntario);

  }
  
  logout(){
	  this.userApi.logout().subscribe(()=> {this.router.navigate(['/home'])} ); 
  }
  verPerfil(){
	  
  }

  ngOnInit() {
  }

}
