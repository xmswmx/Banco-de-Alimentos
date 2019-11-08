/* tslint:disable */
import {
  Donacion
} from '../index';

declare var Object: any;
export interface DescripcionDonacionInterface {
  "id"?: any;
  "idDescripcion"?: any;
  "idDonacion"?: any;
  donacion?: Donacion;
}

export class DescripcionDonacion implements DescripcionDonacionInterface {
  "id": any;
  "idDescripcion": any;
  "idDonacion": any;
  donacion: Donacion;
  constructor(data?: DescripcionDonacionInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `DescripcionDonacion`.
   */
  public static getModelName() {
    return "DescripcionDonacion";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of DescripcionDonacion for dynamic purposes.
  **/
  public static factory(data: DescripcionDonacionInterface): DescripcionDonacion{
    return new DescripcionDonacion(data);
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
      name: 'DescripcionDonacion',
      plural: 'DescripcionesDonacion',
      path: 'DescripcionesDonacion',
      idName: 'id',
      properties: {
        "id": {
          name: 'id',
          type: 'any'
        },
        "idDescripcion": {
          name: 'idDescripcion',
          type: 'any'
        },
        "idDonacion": {
          name: 'idDonacion',
          type: 'any'
        },
      },
      relations: {
        donacion: {
          name: 'donacion',
          type: 'Donacion',
          model: 'Donacion',
          relationType: 'belongsTo',
                  keyFrom: 'idDescripcion',
          keyTo: 'id'
        },
      }
    }
  }
}
