/* tslint:disable */
import {
  PersonaDeContacto,
  Ubicacion,
  Insignia,
  Donacion
} from '../index';

declare var Object: any;
export interface DonanteInterface {
  "cuil": string;
  "realm"?: string;
  "username"?: string;
  "email": string;
  "emailVerified"?: boolean;
  "id"?: any;
  "password"?: string;
  accessTokens?: any[];
  personasDeContacto?: PersonaDeContacto[];
  ubicacion?: Ubicacion;
  insignia?: Insignia[];
  donaciones?: Donacion[];
}

export class Donante implements DonanteInterface {
  "cuil": string;
  "realm": string;
  "username": string;
  "email": string;
  "emailVerified": boolean;
  "id": any;
  "password": string;
  accessTokens: any[];
  personasDeContacto: PersonaDeContacto[];
  ubicacion: Ubicacion;
  insignia: Insignia[];
  donaciones: Donacion[];
  constructor(data?: DonanteInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Donante`.
   */
  public static getModelName() {
    return "Donante";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Donante for dynamic purposes.
  **/
  public static factory(data: DonanteInterface): Donante{
    return new Donante(data);
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
      name: 'Donante',
      plural: 'Donantes',
      path: 'Donantes',
      idName: 'id',
      properties: {
        "cuil": {
          name: 'cuil',
          type: 'string'
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
        personasDeContacto: {
          name: 'personasDeContacto',
          type: 'PersonaDeContacto[]',
          model: 'PersonaDeContacto',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'idDonante'
        },
        ubicacion: {
          name: 'ubicacion',
          type: 'Ubicacion',
          model: 'Ubicacion',
          relationType: 'hasOne',
                  keyFrom: 'id',
          keyTo: 'idDonante'
        },
        insignia: {
          name: 'insignia',
          type: 'Insignia[]',
          model: 'Insignia',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'idDonante'
        },
        donaciones: {
          name: 'donaciones',
          type: 'Donacion[]',
          model: 'Donacion',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'donanteId'
        },
      }
    }
  }
}
