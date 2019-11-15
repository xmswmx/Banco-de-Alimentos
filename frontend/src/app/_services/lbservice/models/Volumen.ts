/* tslint:disable */

declare var Object: any;
export interface VolumenInterface {
  "alto": number;
  "largo": number;
  "ancho": number;
  "id"?: any;
  "vehiculoId"?: any;
  "envioParaBeneficiarioId"?: any;
  "idDescripcionGeneral"?: any;
}

export class Volumen implements VolumenInterface {
  "alto": number;
  "largo": number;
  "ancho": number;
  "id": any;
  "vehiculoId": any;
  "envioParaBeneficiarioId": any;
  "idDescripcionGeneral": any;
  constructor(data?: VolumenInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Volumen`.
   */
  public static getModelName() {
    return "Volumen";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Volumen for dynamic purposes.
  **/
  public static factory(data: VolumenInterface): Volumen{
    return new Volumen(data);
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
      name: 'Volumen',
      plural: 'volumen',
      path: 'volumen',
      idName: 'id',
      properties: {
        "alto": {
          name: 'alto',
          type: 'number'
        },
        "largo": {
          name: 'largo',
          type: 'number'
        },
        "ancho": {
          name: 'ancho',
          type: 'number'
        },
        "id": {
          name: 'id',
          type: 'any'
        },
        "vehiculoId": {
          name: 'vehiculoId',
          type: 'any'
        },
        "envioParaBeneficiarioId": {
          name: 'envioParaBeneficiarioId',
          type: 'any'
        },
        "idDescripcionGeneral": {
          name: 'idDescripcionGeneral',
          type: 'any'
        },
      },
      relations: {
      }
    }
  }
}
