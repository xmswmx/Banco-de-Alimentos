/* tslint:disable */
import {
  TipoInsignia
} from '../index';

declare var Object: any;
export interface InsigniaInterface {
  "fechaOtorgada": Date;
  "fechaVencimiento": Date;
  "id"?: any;
  "idDonante"?: any;
  "voluntarioId"?: any;
  "tipoInsigniaId"?: any;
  tipoInsignia?: TipoInsignia;
}

export class Insignia implements InsigniaInterface {
  "fechaOtorgada": Date;
  "fechaVencimiento": Date;
  "id": any;
  "idDonante": any;
  "voluntarioId": any;
  "tipoInsigniaId": any;
  tipoInsignia: TipoInsignia;
  constructor(data?: InsigniaInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Insignia`.
   */
  public static getModelName() {
    return "Insignia";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Insignia for dynamic purposes.
  **/
  public static factory(data: InsigniaInterface): Insignia{
    return new Insignia(data);
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
      name: 'Insignia',
      plural: 'Insignia',
      path: 'Insignia',
      idName: 'id',
      properties: {
        "fechaOtorgada": {
          name: 'fechaOtorgada',
          type: 'Date'
        },
        "fechaVencimiento": {
          name: 'fechaVencimiento',
          type: 'Date'
        },
        "id": {
          name: 'id',
          type: 'any'
        },
        "idDonante": {
          name: 'idDonante',
          type: 'any'
        },
        "voluntarioId": {
          name: 'voluntarioId',
          type: 'any'
        },
        "tipoInsigniaId": {
          name: 'tipoInsigniaId',
          type: 'any'
        },
      },
      relations: {
        tipoInsignia: {
          name: 'tipoInsignia',
          type: 'TipoInsignia',
          model: 'TipoInsignia',
          relationType: 'belongsTo',
                  keyFrom: 'tipoInsigniaId',
          keyTo: 'id'
        },
      }
    }
  }
}
