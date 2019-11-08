/* tslint:disable */
import {
  Donacion,
  Producto
} from '../index';

declare var Object: any;
export interface DescripcionDetalladaInterface {
  "id"?: any;
  "idDescripcion"?: any;
  donacion?: Donacion;
  productos?: Producto[];
}

export class DescripcionDetallada implements DescripcionDetalladaInterface {
  "id": any;
  "idDescripcion": any;
  donacion: Donacion;
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
