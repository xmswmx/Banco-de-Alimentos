import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../../app.component'
import { Router } from '@angular/router';
import { UserApi } from '../../_services/lbservice'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

userLogged;
  constructor(private api:UserApi,private router:Router) {
  		this.userLogged = api.isAuthenticated();
   }

  ngOnInit() {
  }

}
