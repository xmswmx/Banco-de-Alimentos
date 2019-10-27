/* tslint:disable */
import {
  Volumen
} from '../index';

declare var Object: any;
export interface VehiculoInterface {
  "marca": string;
  "modelo": string;
  "patente": string;
  "id"?: any;
  "idVehiculo"?: any;
  volumen?: Volumen;
}

export class Vehiculo implements VehiculoInterface {
  "marca": string;
  "modelo": string;
  "patente": string;
  "id": any;
  "idVehiculo": any;
  volumen: Volumen;
  constructor(data?: VehiculoInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Vehiculo`.
   */
  public static getModelName() {
    return "Vehiculo";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Vehiculo for dynamic purposes.
  **/
  public static factory(data: VehiculoInterface): Vehiculo{
    return new Vehiculo(data);
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
      name: 'Vehiculo',
      plural: 'Vehiculos',
      path: 'Vehiculos',
      idName: 'id',
      properties: {
        "marca": {
          name: 'marca',
          type: 'string'
        },
        "modelo": {
          name: 'modelo',
          type: 'string'
        },
        "patente": {
          name: 'patente',
          type: 'string'
        },
        "id": {
          name: 'id',
          type: 'any'
        },
        "idVehiculo": {
          name: 'idVehiculo',
          type: 'any'
        },
      },
      relations: {
        volumen: {
          name: 'volumen',
          type: 'Volumen',
          model: 'Volumen',
          relationType: 'hasOne',
                  keyFrom: 'id',
          keyTo: 'idVolumen'
        },
      }
    }
  }
}
