/* tslint:disable */
import {
  Donante
} from '../index';

declare var Object: any;
export interface PersonaDeContactoInterface {
  "nombre": string;
  "apellido": string;
  "email": string;
  "telefono": number;
  "dni": number;
  "id"?: any;
  "donanteId"?: any;
  "idDonante"?: any;
  donante?: Donante;
}

export class PersonaDeContacto implements PersonaDeContactoInterface {
  "nombre": string;
  "apellido": string;
  "email": string;
  "telefono": number;
  "dni": number;
  "id": any;
  "donanteId": any;
  "idDonante": any;
  donante: Donante;
  constructor(data?: PersonaDeContactoInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `PersonaDeContacto`.
   */
  public static getModelName() {
    return "PersonaDeContacto";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of PersonaDeContacto for dynamic purposes.
  **/
  public static factory(data: PersonaDeContactoInterface): PersonaDeContacto{
    return new PersonaDeContacto(data);
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
      name: 'PersonaDeContacto',
      plural: 'PersonasDeContacto',
      path: 'PersonasDeContacto',
      idName: 'id',
      properties: {
        "nombre": {
          name: 'nombre',
          type: 'string'
        },
        "apellido": {
          name: 'apellido',
          type: 'string'
        },
        "email": {
          name: 'email',
          type: 'string'
        },
        "telefono": {
          name: 'telefono',
          type: 'number'
        },
        "dni": {
          name: 'dni',
          type: 'number'
        },
        "id": {
          name: 'id',
          type: 'any'
        },
        "donanteId": {
          name: 'donanteId',
          type: 'any'
        },
        "idDonante": {
          name: 'idDonante',
          type: 'any'
        },
      },
      relations: {
        donante: {
          name: 'donante',
          type: 'Donante',
          model: 'Donante',
          relationType: 'belongsTo',
                  keyFrom: 'donanteId',
          keyTo: 'id'
        },
      }
    }
  }
}
