import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataApiService {
  // url:string;
  traslado : Observable<any>;

  constructor(private http: HttpClient) { 
    // this.url = environment.backendUrl;
  }

  getTrasladoPorId(idTraslado:string){
    return this.http.get(environment.backendUrl + '/api/Traslados/' + idTraslado);
  }

  getVoluntariosQueRecorrenUnaDistancia(unaDistancia:number){
    return this.http.get(environment.backendUrl + '/api/Voluntarios?filter[where][distanciaMaxima][gte]=' + unaDistancia );
  }

  getVehiculoDeVoluntario(idVoluntario:string){
    return this.http.get(environment.backendUrl + '/api/Vehiculos/findOne?filter[where][voluntarioId]=' + idVoluntario );
  }

  getVolumenDelVehiculo(idVehiculo:string){
    return this.http.get(environment.backendUrl + '/api/Volumen/findOne?filter[where][vehiculoId]=' + idVehiculo );
  }

}
