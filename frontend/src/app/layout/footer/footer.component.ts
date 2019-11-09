import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../_services/lbservice/models';
import { UserApi } from '../../_services/lbservice/services';
import { faTwitter, faFacebook,faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  userLogged:User;
	faTwitter = faTwitter;
	faFacebook = faFacebook;
	faInstagram = faInstagram;
	faLinkedin = faLinkedin;
  constructor(private userApi:UserApi, private router:Router) {
		this.userLogged = userApi.getCachedCurrent();	
		
	}
  ngOnInit() {
  }

}
