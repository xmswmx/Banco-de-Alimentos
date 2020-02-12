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
    return this.http.get(environment.backendUrl + '/api/volumen/findOne?filter[where][vehiculoId]=' + idVehiculo );
  }

  getDonacionPorId(idDonacion:string){
    return this.http.get(environment.backendUrl + '/api/donaciones/' + idDonacion);
  }

  getDonantePorId(idDonante:string){
    return this.http.get(environment.backendUrl + '/api/Donantes/' + idDonante);
  }

  getUbicacionPorIdDonante(idDonante:string){
    return this.http.get(environment.backendUrl + '/api/Ubicacions/findOne?filter[where][idDonante]=' + idDonante);
  }

  getEnvioPorId(idEnvio:string){
    return this.http.get(environment.backendUrl + '/api/EnviosParaBeneficiario/' + idEnvio);
  }

  getBeneficarioPorId(idBeneficiario:string){
    return this.http.get(environment.backendUrl + '/api/Beneficiarios/' + idBeneficiario);
  }

  getUbicacionPorIdBeneficiario(idBeneficiario:string){
    return this.http.get(environment.backendUrl + '/api/Ubicacions/findOne?filter[where][beneficiarioId]=' + idBeneficiario);
  }

  asignarTraslado(traslado){
    return this.http.put(environment.backendUrl + '/api/Traslados/' + traslado.id, traslado);
    // let where = { "id" : traslado.id };
    // return this.http.post(environment.backendUrl + '/api/Traslados/upsertWithWhere', traslado).toPromise();
  }

}
