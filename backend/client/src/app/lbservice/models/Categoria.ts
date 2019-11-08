/* tslint:disable */

declare var Object: any;
export interface CategoriaInterface {
  "nombre": string;
  "id"?: any;
}

export class Categoria implements CategoriaInterface {
  "nombre": string;
  "id": any;
  constructor(data?: CategoriaInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Categoria`.
   */
  public static getModelName() {
    return "Categoria";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Categoria for dynamic purposes.
  **/
  public static factory(data: CategoriaInterface): Categoria{
    return new Categoria(data);
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
      name: 'Categoria',
      plural: 'Categoria',
      path: 'Categoria',
      idName: 'id',
      properties: {
        "nombre": {
          name: 'nombre',
          type: 'string'
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
