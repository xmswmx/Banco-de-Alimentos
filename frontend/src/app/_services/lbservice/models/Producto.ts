/* tslint:disable */
import {
  TipoProducto
} from '../index';

declare var Object: any;
export interface ProductoInterface {
  "cantidad": number;
  "vencimiento"?: Date;
  "id"?: any;
  "envioParaBeneficiarioId"?: any;
  "descripcionDetalladaId"?: any;
  "tipoProductoId"?: any;
  tipoProducto?: TipoProducto;
}

export class Producto implements ProductoInterface {
  "cantidad": number;
  "vencimiento": Date;
  "id": any;
  "envioParaBeneficiarioId": any;
  "descripcionDetalladaId": any;
  "tipoProductoId": any;
  tipoProducto: TipoProducto;
  constructor(data?: ProductoInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Producto`.
   */
  public static getModelName() {
    return "Producto";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Producto for dynamic purposes.
  **/
  public static factory(data: ProductoInterface): Producto{
    return new Producto(data);
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
      name: 'Producto',
      plural: 'Productos',
      path: 'Productos',
      idName: 'id',
      properties: {
        "cantidad": {
          name: 'cantidad',
          type: 'number'
        },
        "vencimiento": {
          name: 'vencimiento',
          type: 'Date'
        },
        "id": {
          name: 'id',
          type: 'any'
        },
        "envioParaBeneficiarioId": {
          name: 'envioParaBeneficiarioId',
          type: 'any'
        },
        "descripcionDetalladaId": {
          name: 'descripcionDetalladaId',
          type: 'any'
        },
        "tipoProductoId": {
          name: 'tipoProductoId',
          type: 'any'
        },
      },
      relations: {
        tipoProducto: {
          name: 'tipoProducto',
          type: 'TipoProducto',
          model: 'TipoProducto',
          relationType: 'belongsTo',
                  keyFrom: 'tipoProductoId',
          keyTo: 'id'
        },
      }
    }
  }
}
