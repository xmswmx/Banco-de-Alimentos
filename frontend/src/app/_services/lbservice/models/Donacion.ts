/* tslint:disable */
import {
  Donante
} from '../index';

declare var Object: any;
export interface DonacionInterface {
  "fechaRegistro": Date;
  "numero": number;
  "estado": string;
  "id"?: any;
  "idDonante"?: any;
  "idDonacion"?: any;
  donante?: Donante;
}

export class Donacion implements DonacionInterface {
  "fechaRegistro": Date;
  "numero": number;
  "estado": string;
  "id": any;
  "idDonante": any;
  "idDonacion": any;
  donante: Donante;
  constructor(data?: DonacionInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Donacion`.
   */
  public static getModelName() {
    return "Donacion";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Donacion for dynamic purposes.
  **/
  public static factory(data: DonacionInterface): Donacion{
    return new Donacion(data);
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
      name: 'Donacion',
      plural: 'donaciones',
      path: 'donaciones',
      idName: 'id',
      properties: {
        "fechaRegistro": {
          name: 'fechaRegistro',
          type: 'Date'
        },
        "numero": {
          name: 'numero',
          type: 'number'
        },
        "estado": {
          name: 'estado',
          type: 'string'
        },
        "id": {
          name: 'id',
          type: 'any'
        },
        "idDonante": {
          name: 'idDonante',
          type: 'any'
        },
        "idDonacion": {
          name: 'idDonacion',
          type: 'any'
        },
      },
      relations: {
        donante: {
          name: 'donante',
          type: 'Donante',
          model: 'Donante',
          relationType: 'belongsTo',
                  keyFrom: 'idDonante',
          keyTo: 'id'
        },
      }
    }
  }
}
