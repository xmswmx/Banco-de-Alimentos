/* tslint:disable */
import {
  Donacion,
  Volumen
} from '../index';

declare var Object: any;
export interface DescripcionGeneralInterface {
  "descripcion": string;
  "id"?: any;
  "idDescripcion"?: any;
  donacion?: Donacion;
  volumenes?: Volumen;
}

export class DescripcionGeneral implements DescripcionGeneralInterface {
  "descripcion": string;
  "id": any;
  "idDescripcion": any;
  donacion: Donacion;
  volumenes: Volumen;
  constructor(data?: DescripcionGeneralInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `DescripcionGeneral`.
   */
  public static getModelName() {
    return "DescripcionGeneral";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of DescripcionGeneral for dynamic purposes.
  **/
  public static factory(data: DescripcionGeneralInterface): DescripcionGeneral{
    return new DescripcionGeneral(data);
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
      name: 'DescripcionGeneral',
      plural: 'DescripcionesDonacion',
      path: 'DescripcionesDonacion',
      idName: 'id',
      properties: {
        "descripcion": {
          name: 'descripcion',
          type: 'string'
        },
        "id": {
          name: 'id',
          type: 'any'
        },
        "idDescripcion": {
          name: 'idDescripcion',
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
        volumenes: {
          name: 'volumenes',
          type: 'Volumen',
          model: 'Volumen',
          relationType: 'hasOne',
                  keyFrom: 'id',
          keyTo: 'descripcionGeneralId'
        },
      }
    }
  }
}
