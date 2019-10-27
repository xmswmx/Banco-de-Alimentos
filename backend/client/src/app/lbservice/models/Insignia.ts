/* tslint:disable */

declare var Object: any;
export interface InsigniaInterface {
  "fechaOtorgada": Date;
  "nombre": string;
  "imagen": any;
  "id"?: any;
}

export class Insignia implements InsigniaInterface {
  "fechaOtorgada": Date;
  "nombre": string;
  "imagen": any;
  "id": any;
  constructor(data?: InsigniaInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Insignia`.
   */
  public static getModelName() {
    return "Insignia";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Insignia for dynamic purposes.
  **/
  public static factory(data: InsigniaInterface): Insignia{
    return new Insignia(data);
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
      name: 'Insignia',
      plural: 'Insignia',
      path: 'Insignia',
      idName: 'id',
      properties: {
        "fechaOtorgada": {
          name: 'fechaOtorgada',
          type: 'Date'
        },
        "nombre": {
          name: 'nombre',
          type: 'string'
        },
        "imagen": {
          name: 'imagen',
          type: 'any'
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
