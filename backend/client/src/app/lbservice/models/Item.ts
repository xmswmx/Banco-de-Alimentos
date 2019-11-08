/* tslint:disable */

declare var Object: any;
export interface ItemInterface {
  "descripcion": string;
  "peso"?: number;
  "id"?: any;
  "envioParaBeneficiarioId"?: any;
}

export class Item implements ItemInterface {
  "descripcion": string;
  "peso": number;
  "id": any;
  "envioParaBeneficiarioId": any;
  constructor(data?: ItemInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Item`.
   */
  public static getModelName() {
    return "Item";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Item for dynamic purposes.
  **/
  public static factory(data: ItemInterface): Item{
    return new Item(data);
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
      name: 'Item',
      plural: 'Items',
      path: 'Items',
      idName: 'id',
      properties: {
        "descripcion": {
          name: 'descripcion',
          type: 'string'
        },
        "peso": {
          name: 'peso',
          type: 'number'
        },
        "id": {
          name: 'id',
          type: 'any'
        },
        "envioParaBeneficiarioId": {
          name: 'envioParaBeneficiarioId',
          type: 'any'
        },
      },
      relations: {
      }
    }
  }
}
