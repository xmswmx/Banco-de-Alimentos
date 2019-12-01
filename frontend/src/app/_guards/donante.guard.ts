import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

import { LoopBackAuth }from 'src/app/_services/lbservice/services/core/auth.service';
import { UserApi }from 'src/app/_services/lbservice/services/custom';
import { User }from 'src/app/_services/lbservice/models/User';

@Injectable({
  providedIn: 'root'
})
export class DonanteGuard implements CanActivate {
	userLogged;
  constructor(private userApi: UserApi,private lb:LoopBackAuth,private router: Router){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
            //Si no está el admin logueado lo voy a mandar a la pagina principal
        this.userLogged = this.userApi.getCachedCurrent();
        if ((this.userLogged == null)||(this.userLogged.tipoDeUsuario != 'donante')) {
            console.log('Loguea con un donante para ingresar a esta página');
            this.router.navigate(['/']);
            return false;
        }

    return true;
  }
  
}
