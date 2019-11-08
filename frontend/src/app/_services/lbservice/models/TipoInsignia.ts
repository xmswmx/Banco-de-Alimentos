/* tslint:disable */

declare var Object: any;
export interface TipoInsigniaInterface {
  "nombre": string;
  "imagen": string;
  "id"?: any;
}

export class TipoInsignia implements TipoInsigniaInterface {
  "nombre": string;
  "imagen": string;
  "id": any;
  constructor(data?: TipoInsigniaInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `TipoInsignia`.
   */
  public static getModelName() {
    return "TipoInsignia";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of TipoInsignia for dynamic purposes.
  **/
  public static factory(data: TipoInsigniaInterface): TipoInsignia{
    return new TipoInsignia(data);
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
      name: 'TipoInsignia',
      plural: 'TipoInsignia',
      path: 'TipoInsignia',
      idName: 'id',
      properties: {
        "nombre": {
          name: 'nombre',
          type: 'string'
        },
        "imagen": {
          name: 'imagen',
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
