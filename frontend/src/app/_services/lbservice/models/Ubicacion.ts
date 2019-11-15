/* tslint:disable */
import {
  GeoPoint
} from '../index';

declare var Object: any;
export interface UbicacionInterface {
  "direccion": string;
  "puntoGeografico"?: GeoPoint;
  "id"?: any;
  "idDonante"?: any;
  "beneficiarioId"?: any;
  "voluntarioId"?: any;
}

export class Ubicacion implements UbicacionInterface {
  "direccion": string;
  "puntoGeografico": GeoPoint;
  "id": any;
  "idDonante": any;
  "beneficiarioId": any;
  "voluntarioId": any;
  constructor(data?: UbicacionInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Ubicacion`.
   */
  public static getModelName() {
    return "Ubicacion";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Ubicacion for dynamic purposes.
  **/
  public static factory(data: UbicacionInterface): Ubicacion{
    return new Ubicacion(data);
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
      name: 'Ubicacion',
      plural: 'Ubicacions',
      path: 'Ubicacions',
      idName: 'id',
      properties: {
        "direccion": {
          name: 'direccion',
          type: 'string'
        },
        "puntoGeografico": {
          name: 'puntoGeografico',
          type: 'GeoPoint'
        },
        "id": {
          name: 'id',
          type: 'any'
        },
        "idDonante": {
          name: 'idDonante',
          type: 'any'
        },
        "beneficiarioId": {
          name: 'beneficiarioId',
          type: 'any'
        },
        "voluntarioId": {
          name: 'voluntarioId',
          type: 'any'
        },
      },
      relations: {
      }
    }
  }
}
