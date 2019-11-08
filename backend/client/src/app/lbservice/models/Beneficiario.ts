/* tslint:disable */
import {
  Ubicacion
} from '../index';

declare var Object: any;
export interface BeneficiarioInterface {
  "cantidadAtendidos"?: number;
  "realm"?: string;
  "username"?: string;
  "email": string;
  "emailVerified"?: boolean;
  "id"?: any;
  "password"?: string;
  accessTokens?: any[];
  ubicacion?: Ubicacion;
}

export class Beneficiario implements BeneficiarioInterface {
  "cantidadAtendidos": number;
  "realm": string;
  "username": string;
  "email": string;
  "emailVerified": boolean;
  "id": any;
  "password": string;
  accessTokens: any[];
  ubicacion: Ubicacion;
  constructor(data?: BeneficiarioInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Beneficiario`.
   */
  public static getModelName() {
    return "Beneficiario";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Beneficiario for dynamic purposes.
  **/
  public static factory(data: BeneficiarioInterface): Beneficiario{
    return new Beneficiario(data);
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
      name: 'Beneficiario',
      plural: 'Beneficiarios',
      path: 'Beneficiarios',
      idName: 'id',
      properties: {
        "cantidadAtendidos": {
          name: 'cantidadAtendidos',
          type: 'number'
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
          keyTo: 'beneficiarioId'
        },
      }
    }
  }
}
