/* tslint:disable */
import {
  Volumen
} from '../index';

declare var Object: any;
export interface DescripcionGeneralInterface {
  "descripcion": string;
  "id"?: any;
  "idDonacion"?: any;
  volumenes?: Volumen;
}

export class DescripcionGeneral implements DescripcionGeneralInterface {
  "descripcion": string;
  "id": any;
  "idDonacion": any;
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
      plural: 'DescripcionesGenerales',
      path: 'DescripcionesGenerales',
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
        "idDonacion": {
          name: 'idDonacion',
          type: 'any'
        },
      },
      relations: {
        volumenes: {
          name: 'volumenes',
          type: 'Volumen',
          model: 'Volumen',
          relationType: 'hasOne',
                  keyFrom: 'id',
          keyTo: 'idDescripcionGeneral'
        },
      }
    }
  }
}
