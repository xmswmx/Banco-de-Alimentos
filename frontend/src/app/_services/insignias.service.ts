import { Injectable } from '@angular/core';
import { Voluntario, Donante, Traslado, TipoInsignia, TipoInsigniaApi, Insignia, InsigniaApi, VoluntarioApi, DonanteApi } from './lbservice';

@Injectable({
  providedIn: 'root'
})
export class InsigniasService {


	voluntario1: string ='1234';
	donante1: string = '1234';
	ingresoVoluntario = new Date();
	ingresoDonante = new Date();
	tiposDeInsignia : TipoInsignia[] = [];
	constructor(private insigniaApi:InsigniaApi,
				private voluntarioApi:VoluntarioApi,
				private donanteApi:DonanteApi,
				private tipoInsigniaApi:TipoInsigniaApi) {
		this.tipoInsigniaApi.find().subscribe((res:TipoInsignia[]) => {
			this.tiposDeInsignia = res;
		})

				 }

	getInsigniasVoluntario(idVoluntario:string):Promise<Insignia[]>{
		
		let insigniasADevolver = [];
		return new Promise((resolve,reject)=>{

			this.voluntarioApi.getInsignia(idVoluntario).subscribe((insignias:Insignia[])=>{
			
				for (let insignia of insignias){
					if (insignia.fechaVencimiento == null){
						insigniasADevolver.push(insignia);
					} else {
						if (new Date() < new Date(insignia.fechaVencimiento)) {
							insigniasADevolver.push(insignia);
						}
					}
				}
				resolve(insigniasADevolver);
			})
		})		
	}

	getInsigniasDonante(idDonante:string):Promise<Insignia[]>{
		
		let insigniasADevolver = [];
		let cDate = new Date();

		return new Promise((resolve,reject)=>{
			this.donanteApi.getInsignia(idDonante).subscribe((insignias:Insignia[])=>{
				for (let insignia of insignias){
					console.log(insignia)
					if (insignia.fechaVencimiento == null){
						insigniasADevolver.push(insignia);
					} else {
						if (cDate < new Date(insignia.fechaVencimiento) ) {
							insigniasADevolver.push(insignia);
						}
					}			
				}
				resolve(insigniasADevolver);
			})
		})		
	}

	onTraslado(idVoluntario:string):Promise<boolean>{
		console.clear();
		let insigniasDelVoluntario : Insignia[];
		let insigniasPendientes = 5; //Aumentar este contador cada vez que se crea una medalla nueva
		return new Promise((resolve,reject)=>{
			console.log("Se entra en la promesa");
			this.voluntarioApi.getInsignia(idVoluntario).subscribe((insignias:Insignia[])=>{
				console.log("Se obtienen las insignias del voluntario");
				insigniasDelVoluntario = insignias;

				//Check Primer Aporte
				if (insigniasDelVoluntario.length == 0) {
					console.log("Como el voluntario no tenia ninguna se ingreso en la creacion de Primer Aporte");
					let insignia = new Insignia;
					console.log("Se intenta hacer un find de la insignia buscada y devuelve lo siguiente");
					console.log(this.getTipoInsigniaNombre("Primer aporte").id);
					insignia.tipoInsigniaId = this.getTipoInsigniaNombre("Primer aporte").id;
					insignia.voluntarioId = idVoluntario;
					insignia.fechaOtorgada = new Date();
					insignia.fechaVencimiento = new Date(2500, 11, 24, 10, 33, 30, 0);
					this.voluntarioApi.createInsignia(idVoluntario,insignia).subscribe(()=>{
						console.log("Se creo la insignia de primer aporte");
						if (insigniasPendientes == 1){
							resolve(true);
						} else {
							insigniasPendientes--;
							//(Continua iterando)
						}
					})
				} else {
					insigniasPendientes--
				}

				//Check Papa noel
				console.log("Checkeo de Papanoel");
				console.log("Estamos en el mes "+new Date().getMonth());
				//Si no tiene la insignia de navidad y estamos en diciembre
				if ((!insigniasDelVoluntario.some(unaInsignia => unaInsignia.tipoInsigniaId == this.getTipoInsigniaNombre("Papa noel").id))
					&&(new Date().getMonth()==11)){
					console.log("No tiene la insignia y estamos en diciembre, voy a crearla ");
					let insignia = new Insignia();
					insignia.tipoInsigniaId = this.getTipoInsigniaNombre("Papa noel").id;
					insignia.voluntarioId = idVoluntario;
					insignia.fechaOtorgada = new Date();
					insignia.fechaVencimiento = new Date(2500, 11, 24, 10, 33, 30, 0);
					this.voluntarioApi.createInsignia(idVoluntario,insignia).subscribe(()=>{
						console.log("Se creo la insignia de Papa noel");
						if (insigniasPendientes == 1){
							resolve(true);
							console.log("Era la ultima")
						} else {
							insigniasPendientes--;
							console.log("Se continua revisando otras insignias");
						}
					})
				} else {
					insigniasPendientes--;
				}

				//Check Conejo de Pascua
				console.log("Checkeo de conejo de pascua");
				if ((!insigniasDelVoluntario.some(unaInsignia => unaInsignia.tipoInsigniaId == this.getTipoInsigniaNombre("Conejo de Pascua").id))
					&&(new Date().getMonth()==3)){
					console.log("No tiene la insignia y estamos en diciembre, voy a crearla ");
					let insignia = new Insignia();
					insignia.tipoInsigniaId = this.getTipoInsigniaNombre("Conejo de Pascua").id;
					insignia.voluntarioId = idVoluntario;
					insignia.fechaOtorgada = new Date();
					insignia.fechaVencimiento = new Date(2500, 11, 24, 10, 33, 30, 0);
					this.voluntarioApi.createInsignia(idVoluntario,insignia).subscribe(()=>{
						console.log("Se creo la insignia de Papa noel");
						if (insigniasPendientes == 1){
							resolve(true);
							console.log("Era la ultima")
						} else {
							insigniasPendientes--;
							console.log("Se continua revisando otras insignias");
						}
					})
				} else {
					insigniasPendientes--;
				}



				//Check Racha viajera
				//Traslados finalizados una vez por semana en las ultimas 3 semanas
				console.log("Checkeo de racha viajera");
				let fechaActual = new Date();
				let semana1 = new Date(new Date().setDate(fechaActual.getDate()-21));
				let semana2 = new Date(new Date().setDate(fechaActual.getDate()-14));
				let semana3 = new Date(new Date().setDate(fechaActual.getDate()-7));
				let nuevoVto = new Date(new Date().setDate(fechaActual.getDate()+21));
				//Get traslados de este idVoluntario, entre semana1 y semana3
				this.voluntarioApi.getTraslados(idVoluntario).subscribe((traslados:Traslado[])=>{
					console.log("Obtuve los traslados del voluntario")
					if (
				(traslados.some(traslado => (new Date(traslado.fechaFin)>semana1) && (new Date(traslado.fechaFin)<semana2)))
				&&
				(traslados.some(traslado => (new Date(traslado.fechaFin)>semana2) && (new Date(traslado.fechaFin)<semana3)))
				)
				{
						console.log("Encontre que habia traslados entre las ultimas 3 semanas");
						if (insigniasDelVoluntario.some(unaInsignia => unaInsignia.tipoInsigniaId 
							== this.getTipoInsigniaNombre("Racha viajera").id)){
							console.log("El voluntario ya tenia la insignia, voy a actualizarla");
							let insignia = insigniasDelVoluntario.find(insignia => insignia.tipoInsigniaId == this.getTipoInsigniaNombre("Racha viajera").id);
							console.log("Lei la insignia del array");
							insignia.fechaVencimiento = nuevoVto;
							this.insigniaApi.patchAttributes(insignia.id,insignia).subscribe(()=>{
								console.log("Se actualizó el vencimiento de Racha viajera");
								if(insigniasPendientes == 1){
									console.log("Era la ultima");
									resolve(true);								
								} else {
									insigniasPendientes--;
									console.log("Se continua revisando otras insignias")
								}
							})
						} else {
							console.log("El voluntario no tenia la insignia, asique debo crearla");
							let insignia = new Insignia();
							insignia.tipoInsigniaId = this.getTipoInsigniaNombre("Racha viajera").id;
							insignia.voluntarioId = idVoluntario;
							insignia.fechaOtorgada = new Date();
							insignia.fechaVencimiento = new Date(new Date().setDate(fechaActual.getDate()+21));
							this.voluntarioApi.createInsignia(idVoluntario,insignia).subscribe(()=>{
								console.log("Se creo la insignia de Racha viajera");
								if (insigniasPendientes == 1){
									console.log("Era la ultima");
									resolve(true);									
								} else {
									insigniasPendientes--;
									console.log("Se continua revisando otras insignias");
								}
							})							
						}			
				} else {
						console.log("No se cumplen las condiciones para otorgar Racha viajera");
						if (insigniasPendientes == 1){
							console.log("Era la ultima");
							resolve(true);
						} else {
							insigniasPendientes--;
							console.log("Se continua revisando otras insignias")
						}					
					}		
				})


				//Check estrella de oro
				console.log("Checkeo de estrella dorada (Aun no esta funcionando");
				if (this.diasEntre(this.ingresoVoluntario,fechaActual)>=30){
					if (insigniasDelVoluntario.some(unaInsignia => unaInsignia.tipoInsigniaId 
							== this.getTipoInsigniaNombre("estrella de oro").id)){
						this.voluntarioApi.find({order: 'puntaje DESC'}).subscribe((voluntarios:Voluntario[])=>{
							console.log("Se obtuvo el top ordenado de mayor a menor");
							voluntarios[0];
							if (voluntarios[0].id != this.voluntario1){
								console.log("Como el #1 no coincide con el #1 que estaba registrado se actualiza el #1");
								this.voluntario1 = voluntarios[0].id;
								this.ingresoVoluntario = new Date();
							}
							if (insigniasPendientes == 1){
								console.log("Era la ultima insignia.")
								resolve(true);
							} else {
								insigniasPendientes--;
								console.log("Quedan mas insignias, continua iterando");
							}
						})
					} else {
						console.log("El que va primero no tiene la insignia");
						let insignia = new Insignia();
						insignia.tipoInsigniaId = this.getTipoInsigniaNombre("estrella de oro").id;
						insignia.voluntarioId = this.voluntario1;
						insignia.fechaOtorgada = new Date();
						insignia.fechaVencimiento = new Date(2500, 11, 24, 10, 33, 30, 0);
						this.insigniaApi.create(insignia).subscribe(()=>{
							console.log("Se creo la insignia estrella de oro para el voluntario que iba primero");
						this.voluntarioApi.find({order: 'puntaje DESC'}).subscribe((voluntarios:Voluntario[])=>{
							console.log("Se obtuvo el top ordenado de mayor a menor");
							voluntarios[0];
							if (voluntarios[0].id != this.voluntario1){
								console.log("Como el #1 no coincide con el #1 que estaba registrado se actualiza el #1");
								this.voluntario1 = voluntarios[0].id;
								this.ingresoVoluntario = new Date();
							}
							if (insigniasPendientes == 1){
								console.log("Era la ultima insignia.")
								resolve(true);
							} else {
								insigniasPendientes--;
								console.log("Quedan mas insignias, continua iterando");
							}
						})
						})
					}
				} else {
					console.log("No pasaron 30 dias desde que ingreso a top 1 el voluntario que está primero");
					this.voluntarioApi.find({order: 'puntaje DESC'}).subscribe((voluntarios:Voluntario[])=>{
						console.log("Se obtuvo el top ordenado de mayor a menor");
						voluntarios[0];
						if (voluntarios[0].id != this.voluntario1){
							console.log("Como el #1 no coincide con el #1 que estaba registrado se actualiza el #1");
							this.voluntario1 = voluntarios[0].id;
							this.ingresoVoluntario = new Date();
						}
						if (insigniasPendientes == 1){
							console.log("Era la ultima insignia.")
							resolve(true);
						} else {
							insigniasPendientes--;
							console.log("Quedan mas insignias, continua iterando");
						}
					})
				}
			})
		})
	}
	onDonacion(idDonante:string):Promise<boolean>{
		let insigniasDelDonante;
		let insigniasPendientes = 1;
		return new Promise((resolve,reject)=>{
			this.donanteApi.getInsignia(idDonante).subscribe((insignias:Insignia[])=>{
				insigniasDelDonante = insignias;

				if (insigniasDelDonante.length == 0) {
					console.log("Como no tenia ninguna se ingreso en la creacion de Primer Aporte");
					let insignia = new Insignia;
					console.log("Se intenta hacer un find de la insignia buscada y devuelve lo siguiente");
					console.log(this.getTipoInsigniaNombre("Primer aporte").id);
					insignia.tipoInsigniaId = this.getTipoInsigniaNombre("Primer aporte").id;
					insignia.idDonante = idDonante;
					insignia.fechaOtorgada = new Date();
					insignia.fechaVencimiento = new Date(2500, 11, 24, 10, 33, 30, 0);
					this.voluntarioApi.createInsignia(idDonante,insignia).subscribe(()=>{
						console.log("Se creo la insignia de primer aporte");
						if (insigniasPendientes == 1){
							resolve(true);
						} else {
							insigniasPendientes--;
							//(Continua iterando)
						}
					})
				}

				//Check festivas
					//? Post alguna festiva

				//Check amigo constante
					//? Post o Patch de racha

				//Check estrella de oro
					//Contar dias en top
					//son 30+?
						//no tiene la insignia?
							//Crear la insignia para quien corresponda
					//Actualizar top
			})
		})
	}
	getTipoInsigniaNombre(nombre:string):TipoInsignia{
		//La idea es devolver la id de la insignia con dado nombre
		return this.tiposDeInsignia.find(tipo => tipo.nombre == nombre);
	}
	diasEntre(diaViejo:Date,diaReciente:Date):number{
		let tiempo = diaReciente.getTime()-diaViejo.getTime();
		let dias = Math.round(tiempo / (1000*3600*24));
		return dias;
	}
}


/* En el explorer tengo:
[
  {
    "nombre": "Primer aporte",
    "imagen": "faGift",
    "id": "5dd8caa312011b173cced700"
  },
  {
    "nombre": "Papa noel",
    "imagen": "faCandyCane",
    "id": "5dd8caa312011b173cced701"
  },
  {
    "nombre": "Conejo de Pascua",
    "imagen": "faEgg",
    "id": "5dd8caa312011b173cced702"
  },
  {
    "nombre": "Racha viajera",
    "imagen": "faGifts",
    "id": "5dd8caa312011b173cced703"
  },
  {
    "nombre": "Amigo constante",
    "imagen": "faHandsHelping",
    "id": "5dd8caa312011b173cced704"
  },
  {
    "nombre": "Estrella de Oro",
    "imagen": "faStar",
    "id": "5dd8caa312011b173cced705"
  }
]


*/