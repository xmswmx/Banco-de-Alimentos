import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';

import { LoopBackAuth }from 'src/app/_services/lbservice/services/core/auth.service';
import { UserApi, TrasladoApi }from 'src/app/_services/lbservice/services/custom';
import { User, Traslado }from 'src/app/_services/lbservice/models';


@Injectable({
  providedIn: 'root'
})
export class TrasladoAsignadoGuard implements CanActivate {
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
  	
  	this.trasladoApi.findById(this.route.snapshot.paramMap.get("idTraslado")).subscribe((traslado:Traslado)=>{
  		if (traslado.voluntarioId){
            alert('El traslado ya fue asignado a otro voluntario');
            this.router.navigate(['/']);
            return false;
  		}
  	})
    return true;
  }
  constructor(private trasladoApi: TrasladoApi,private lb:LoopBackAuth,private router: Router,private route:ActivatedRoute ){}
  
  
}
