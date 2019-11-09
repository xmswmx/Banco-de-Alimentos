/* tslint:disable */
import {
  Donacion
} from '../index';

declare var Object: any;
export interface TrasladoInterface {
  "fechaAsignacion"?: Date;
  "fechaEstimada": Date;
  "fechaFin"?: Date;
  "id"?: any;
  "voluntarioId"?: any;
  "envioParaBeneficiarioId"?: any;
  donacion?: Donacion;
}

export class Traslado implements TrasladoInterface {
  "fechaAsignacion": Date;
  "fechaEstimada": Date;
  "fechaFin": Date;
  "id": any;
  "voluntarioId": any;
  "envioParaBeneficiarioId": any;
  donacion: Donacion;
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
        "voluntarioId": {
          name: 'voluntarioId',
          type: 'any'
        },
        "envioParaBeneficiarioId": {
          name: 'envioParaBeneficiarioId',
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
          keyTo: 'trasladoId'
        },
      }
    }
  }
}
