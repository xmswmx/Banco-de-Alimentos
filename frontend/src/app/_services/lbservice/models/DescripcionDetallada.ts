/* tslint:disable */
import {
  Producto
} from '../index';

declare var Object: any;
export interface DescripcionDetalladaInterface {
  "descripcion": string;
  "id"?: any;
  "idDonacion"?: any;
  productos?: Producto[];
}

export class DescripcionDetallada implements DescripcionDetalladaInterface {
  "descripcion": string;
  "id": any;
  "idDonacion": any;
  productos: Producto[];
  constructor(data?: DescripcionDetalladaInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `DescripcionDetallada`.
   */
  public static getModelName() {
    return "DescripcionDetallada";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of DescripcionDetallada for dynamic purposes.
  **/
  public static factory(data: DescripcionDetalladaInterface): DescripcionDetallada{
    return new DescripcionDetallada(data);
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
      name: 'DescripcionDetallada',
      plural: 'DescripcionesDetalladas',
      path: 'DescripcionesDetalladas',
      idName: 'id',
      properties: {
        "descripcion": {
          name: 'descripcion',
          type: 'string',
          default: ''
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
        productos: {
          name: 'productos',
          type: 'Producto[]',
          model: 'Producto',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'descripcionDetalladaId'
        },
      }
    }
  }
}
