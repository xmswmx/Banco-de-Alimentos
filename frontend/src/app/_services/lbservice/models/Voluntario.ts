/* tslint:disable */
import {
  Ubicacion,
  Vehiculo,
  Traslado
} from '../index';

declare var Object: any;
export interface VoluntarioInterface {
  "dni": number;
  "telefono": number;
  "nombre": string;
  "distanciaMaxima"?: number;
  "puntuacion": number;
  "realm"?: string;
  "username"?: string;
  "email": string;
  "emailVerified"?: boolean;
  "id"?: any;
  "password"?: string;
  accessTokens?: any[];
  ubicacion?: Ubicacion;
  vehiculo?: Vehiculo;
  traslados?: Traslado[];
}

export class Voluntario implements VoluntarioInterface {
  "dni": number;
  "telefono": number;
  "nombre": string;
  "distanciaMaxima": number;
  "puntuacion": number;
  "realm": string;
  "username": string;
  "email": string;
  "emailVerified": boolean;
  "id": any;
  "password": string;
  accessTokens: any[];
  ubicacion: Ubicacion;
  vehiculo: Vehiculo;
  traslados: Traslado[];
  constructor(data?: VoluntarioInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Voluntario`.
   */
  public static getModelName() {
    return "Voluntario";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Voluntario for dynamic purposes.
  **/
  public static factory(data: VoluntarioInterface): Voluntario{
    return new Voluntario(data);
  }
  /**
  * @method getModelDefinition
  * @author Julien Ledun
  * @license MIT
  * This method returns an object that represents some of the model
  * definitions.
  **/
  public static getModelDefinition() {
    return {
      name: 'Voluntario',
      plural: 'Voluntarios',
      path: 'Voluntarios',
      idName: 'id',
      properties: {
        "dni": {
          name: 'dni',
          type: 'number'
        },
        "telefono": {
          name: 'telefono',
          type: 'number'
        },
        "nombre": {
          name: 'nombre',
          type: 'string'
        },
        "distanciaMaxima": {
          name: 'distanciaMaxima',
          type: 'number'
        },
        "puntuacion": {
          name: 'puntuacion',
          type: 'number',
          default: 0
        },
        "realm": {
          name: 'realm',
          type: 'string'
        },
        "username": {
          name: 'username',
          type: 'string'
        },
        "email": {
          name: 'email',
          type: 'string'
        },
        "emailVerified": {
          name: 'emailVerified',
          type: 'boolean'
        },
        "id": {
          name: 'id',
          type: 'any'
        },
        "password": {
          name: 'password',
          type: 'string'
        },
      },
      relations: {
        accessTokens: {
          name: 'accessTokens',
          type: 'any[]',
          model: '',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'userId'
        },
        ubicacion: {
          name: 'ubicacion',
          type: 'Ubicacion',
          model: 'Ubicacion',
          relationType: 'hasOne',
                  keyFrom: 'id',
          keyTo: 'idUbicacion'
        },
        vehiculo: {
          name: 'vehiculo',
          type: 'Vehiculo',
          model: 'Vehiculo',
          relationType: 'hasOne',
                  keyFrom: 'id',
          keyTo: 'idVehiculo'
        },
        traslados: {
          name: 'traslados',
          type: 'Traslado[]',
          model: 'Traslado',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'idTraslado'
        },
      }
    }
  }
}
