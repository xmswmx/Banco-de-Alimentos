/* tslint:disable */

declare var Object: any;
export interface ItemInterface {
  "name"?: string;
  "creationDate"?: Date;
  "id"?: any;
}

export class Item implements ItemInterface {
  "name": string;
  "creationDate": Date;
  "id": any;
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
        "name": {
          name: 'name',
          type: 'string'
        },
        "creationDate": {
          name: 'creationDate',
          type: 'Date'
        },
        "id": {
          name: 'id',
          type: 'any'
        },
      },
      relations: {
      }
    }
  }
}
