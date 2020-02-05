import { Injectable } from '@angular/core';
import { 
	Donante, Voluntario, DonanteApi, VoluntarioApi, Donacion, DonacionApi, Traslado,
	TrasladoApi, Ubicacion, DescripcionGeneral,EnvioParaBeneficiarioApi,BeneficiarioApi, 
	DescripcionDetallada, EnvioParaBeneficiario,Beneficiario
} from './lbservice';
import { FilaTrasladoPendiente } from 'src/app/modules/admin/traslados-pendientes/FilaTrasladoPendiente';
import { BALP } from 'src/app/_models/BALP';

@Injectable({
  providedIn: 'root'
})
export class ApiRequestsService {

  constructor(	private voluntarioApi:VoluntarioApi,
  				private donanteApi:DonanteApi,
  				private donacionApi:DonacionApi,
  				private trasladoApi:TrasladoApi,
  				private envioApi:EnvioParaBeneficiarioApi,
  				private beneficiarioApi:BeneficiarioApi
  	) {
  }
  
  get10HighScoredDonantes():Promise<Donante[]>{
  		return new Promise(resolve => {
  			this.donanteApi.find<Donante>({
		        order: 'puntuacion DESC',
		        limit: 10
		    }).subscribe((donantes)=>{
		    	resolve(donantes)
	  		});
  		});
  };

  get10HighScoredVoluntarios():Promise<Voluntario[]>{
  		return new Promise((resolve,reject) => {
  			this.voluntarioApi.find<Voluntario>({
		        order: 'puntuacion DESC',
		        limit: 10
		    }).subscribe((voluntarios)=>{
		        resolve(voluntarios)
	  		});
  		});
  };

  getAllTrasladosOfVoluntario(idVoluntario):Promise<FilaTrasladoPendiente[]>{
  	return new Promise(resolve => 
  	{
  	let filas : FilaTrasladoPendiente[] = [];
  	let dirBALP = (new BALP).ubicacionBALP;
  	this.trasladoApi.find<Traslado>({"where":{"voluntarioId":idVoluntario}}).subscribe((traslados:Traslado[])=>{
      console.log(traslados);
      for (let traslado of traslados){
  			// Pido voluntario
        this.voluntarioApi.findById(traslado.voluntarioId).subscribe((voluntario:Voluntario)=>{
          // Bifurcada
          if (traslado.tipo=='donacion'){
            //Caso donacion
              //Pido donacion
              this.donacionApi.findById(traslado.idDonacionTrasladadaAlBanco).subscribe((donacion:Donacion)=>{
                 this.donanteApi.findById(donacion.idDonante).subscribe((donante:Donante)=>{
                   this.donanteApi.getUbicacion(donante.id,true).subscribe((ubicacion:Ubicacion)=>{
                       //Bifurcada descripcion
                       if (donacion.tipoDescripcion=='general'){
                         //Caso general
                         this.donacionApi.getDescripcionGeneral(donacion.id,true).subscribe((desc:DescripcionGeneral)=>{
                           filas.push(
                             new FilaTrasladoPendiente(traslado,voluntario,donacion,ubicacion,dirBALP)
                           ) //fin push
                         })
                       } else {
                         this.donacionApi.getDescripcionDetallada(donacion.id,true).subscribe((desc:DescripcionDetallada)=>{
                           filas.push(
                             new FilaTrasladoPendiente(traslado,voluntario,donacion,ubicacion,dirBALP)
                           ) //fin push
                         })
                       } //fin if/else
                   }) //Fin ubicacion
                 }) //fin donante
              }) //Fin donacion  
          } else {
            //Caso envio
            //Pido envio
            this.envioApi.findById(traslado.idEnvioTrasladadoAUnBeneficiario).subscribe((envio:EnvioParaBeneficiario)=>{
              this.envioApi.getBeneficiario(traslado.idEnvioTrasladadoAUnBeneficiario,true).subscribe((beneficiario:Beneficiario)=>{
                this.beneficiarioApi.getUbicacion(beneficiario.id,true).subscribe((ubicacion:Ubicacion)=>{
                  filas.push(
                      new FilaTrasladoPendiente(traslado,voluntario,envio,dirBALP,ubicacion)
                    )
                }) //fin ubi
              }) //fin bene
            }) //fin envio
                //Pido beneficiario
                  //Pido ubicacion
                    //Guardo en array la fila
                      //traslado, voluntario, donacion, dorigen, ddestino, distancia, fecha     
          } //Fin bifurcada
        }) //Fin voluntario				
  		} //Fin for traslados
  		resolve(filas)
  	}) //Fin traslados


  	});
  }

  getAllDonacionesOf(idDonante):Promise<any[]>{
  	return new Promise(resolve => {
  		let datosDeDonaciones = []
		this.donanteApi.getDonaciones(idDonante)
		.subscribe((donaciones)=>{
				for (let donacion of donaciones){
					this.donacionApi.getDescripcionGeneral(donacion.id,true).subscribe((desc)=>{	
							this.donacionApi.getTraslado(donacion.id,true).subscribe((traslado:Traslado)=>{
								if(traslado.voluntarioId==null){
									let tupla = [
										donacion.id,
										donacion.numero,
										desc.descripcion,
										'Sin asignar',
										traslado.fechaEstimada
									];
									datosDeDonaciones.push(tupla);
								} else {
									this.voluntarioApi.findById(traslado.voluntarioId).subscribe((voluntario:Voluntario)=>{
										let tupla = [
											donacion.id,
											donacion.numero,
											desc.descripcion,
											voluntario.nombre+' '+voluntario.apellido,
											traslado.fechaEstimada
										];
										datosDeDonaciones.push(tupla);
									}) //voluntario
								} //Else
							}) //Donacion
						}) //Fin desc general
					this.donacionApi.getDescripcionDetallada(donacion.id,true).subscribe((desc)=>{
							this.donacionApi.getTraslado(donacion.id,true).subscribe((traslado:Traslado)=>{
								if(traslado.voluntarioId==null){
									let tupla = [
										donacion.id,
										donacion.numero,
										desc.descripcion,
										'Sin asignar',
										traslado.fechaEstimada
									];
									datosDeDonaciones.push(tupla);
								} else {
									this.voluntarioApi.findById(traslado.voluntarioId).subscribe((voluntario:Voluntario)=>{
										let tupla = [
											donacion.id,
											donacion.numero,
											desc.descripcion,
											voluntario.nombre+' '+voluntario.apellido,
											traslado.fechaEstimada
										];
										datosDeDonaciones.push(tupla);
									}) //voluntario
								} //Else
							}) //Donacion
						}) //Fin intentocon descripcion general
						} //for Donaciones	
					}); //Promesa get donaciones
		resolve(datosDeDonaciones)
  	})
  }

  getAllTrasladosSinVoluntario():Promise<[]>{
  	return new Promise(resolve => [])
  }
}
