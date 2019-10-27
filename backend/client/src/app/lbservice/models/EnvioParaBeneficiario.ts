/* tslint:disable */
import {
  Beneficiario,
  Volumen,
  Traslado,
  Donacion
} from '../index';

declare var Object: any;
export interface EnvioParaBeneficiarioInterface {
  "estado": string;
  "numero": number;
  "id"?: any;
  "idEnvioParaBeneficiario"?: any;
  beneficiario?: Beneficiario;
  volumen?: Volumen;
  traslados?: Traslado;
  donacion?: Donacion;
}

export class EnvioParaBeneficiario implements EnvioParaBeneficiarioInterface {
  "estado": string;
  "numero": number;
  "id": any;
  "idEnvioParaBeneficiario": any;
  beneficiario: Beneficiario;
  volumen: Volumen;
  traslados: Traslado;
  donacion: Donacion;
  constructor(data?: EnvioParaBeneficiarioInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `EnvioParaBeneficiario`.
   */
  public static getModelName() {
    return "EnvioParaBeneficiario";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of EnvioParaBeneficiario for dynamic purposes.
  **/
  public static factory(data: EnvioParaBeneficiarioInterface): EnvioParaBeneficiario{
    return new EnvioParaBeneficiario(data);
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
      name: 'EnvioParaBeneficiario',
      plural: 'enviosParaBeneficiario',
      path: 'enviosParaBeneficiario',
      idName: 'id',
      properties: {
        "estado": {
          name: 'estado',
          type: 'string'
        },
        "numero": {
          name: 'numero',
          type: 'number'
        },
        "id": {
          name: 'id',
          type: 'any'
        },
        "idEnvioParaBeneficiario": {
          name: 'idEnvioParaBeneficiario',
          type: 'any'
        },
      },
      relations: {
        beneficiario: {
          name: 'beneficiario',
          type: 'Beneficiario',
          model: 'Beneficiario',
          relationType: 'hasOne',
                  keyFrom: 'id',
          keyTo: 'idBeneficiario'
        },
        volumen: {
          name: 'volumen',
          type: 'Volumen',
          model: 'Volumen',
          relationType: 'hasOne',
                  keyFrom: 'id',
          keyTo: 'idVolumen'
        },
        traslados: {
          name: 'traslados',
          type: 'Traslado',
          model: 'Traslado',
          relationType: 'hasOne',
                  keyFrom: 'id',
          keyTo: 'idTraslado'
        },
        donacion: {
          name: 'donacion',
          type: 'Donacion',
          model: 'Donacion',
          relationType: 'hasOne',
                  keyFrom: 'id',
          keyTo: 'idDonacion'
        },
      }
    }
  }
}
