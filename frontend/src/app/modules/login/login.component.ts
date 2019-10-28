import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { User } from '../../_services/lbservice/models';  
import { UserApi } from '../../_services/lbservice/services';
import { AccessToken }  from '../../_services/lbservice/models'; 
import { LoopBackConfig, BaseLoopBackApi } from '../../_services/lbservice';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  logInForm: FormGroup;
  user: User;
  constructor(private userApi: UserApi, private route: ActivatedRoute , private router:Router) { 
	this.logInForm = new FormGroup({
	   usuario: new FormControl(),
	   clave: new FormControl()
    });
  }

  
  onSubmit(){
	  this.user = new User();
	  this.user.username = this.logInForm.get("usuario").value;
	  this.user.password = this.logInForm.get("clave").value;
	  this.userApi.login(this.user).subscribe((token: AccessToken)=> this.router.navigate(['/home']));
	  
  }
  
  ngOnInit() {
  }

}
