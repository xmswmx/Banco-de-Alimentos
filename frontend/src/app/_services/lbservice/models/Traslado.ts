/* tslint:disable */
import {
  Donacion,
  EnvioParaBeneficiario
} from '../index';

declare var Object: any;
export interface TrasladoInterface {
  "fechaAsignacion"?: Date;
  "fechaEstimada": Date;
  "fechaFin"?: Date;
  "id"?: any;
  "idTraslado"?: any;
  donacion?: Donacion;
  enviosParaBeneficiario?: EnvioParaBeneficiario;
}

export class Traslado implements TrasladoInterface {
  "fechaAsignacion": Date;
  "fechaEstimada": Date;
  "fechaFin": Date;
  "id": any;
  "idTraslado": any;
  donacion: Donacion;
  enviosParaBeneficiario: EnvioParaBeneficiario;
  constructor(data?: TrasladoInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Traslado`.
   */
  public static getModelName() {
    return "Traslado";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Traslado for dynamic purposes.
  **/
  public static factory(data: TrasladoInterface): Traslado{
    return new Traslado(data);
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
      name: 'Traslado',
      plural: 'Traslados',
      path: 'Traslados',
      idName: 'id',
      properties: {
        "fechaAsignacion": {
          name: 'fechaAsignacion',
          type: 'Date'
        },
        "fechaEstimada": {
          name: 'fechaEstimada',
          type: 'Date'
        },
        "fechaFin": {
          name: 'fechaFin',
          type: 'Date'
        },
        "id": {
          name: 'id',
          type: 'any'
        },
        "idTraslado": {
          name: 'idTraslado',
          type: 'any'
        },
      },
      relations: {
        donacion: {
          name: 'donacion',
          type: 'Donacion',
          model: 'Donacion',
          relationType: 'hasOne',
                  keyFrom: 'id',
          keyTo: 'idDonacion'
        },
        enviosParaBeneficiario: {
          name: 'enviosParaBeneficiario',
          type: 'EnvioParaBeneficiario',
          model: 'EnvioParaBeneficiario',
          relationType: 'hasOne',
                  keyFrom: 'id',
          keyTo: 'idEnvioParaBeneficiario'
        },
      }
    }
  }
}
