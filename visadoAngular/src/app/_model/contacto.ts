export class Contacto {
    nombre: String;
    apellido: String;    
    dni: Number;
    email: String;
    telefono: Number;

    constructor() {}

    setContacto(nombre: String, apellido: String, dni: Number, email: String, telefono: Number){
        if(nombre){
            this.nombre = nombre;
        }
        if(apellido){
            this.apellido = apellido;
        }
        if(dni){
            this.dni = dni;
        }      
        if(email){
            this.email = email;
        }
        if(telefono){
            this.telefono = telefono;
        }
    }

   }
 