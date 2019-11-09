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

  userLogged:User;
  constructor(private userApi:UserApi, private router:Router, private beneficiarioApi:BeneficiarioApi) { 
	this.userLogged = userApi.getCachedCurrent();
  }
  
  logout(){
	this.userApi.logout().subscribe(()=> {this.router.navigate(['/home'])} ); 
  }
  verPerfil(){
	  
  }

  ngOnInit() {
  }

}
