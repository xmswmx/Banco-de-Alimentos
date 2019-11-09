import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ReactiveFormsModule, FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { MockContactoService } from '../../../_services/mock-contacto.service';
import { Contacto } from '../../../_model/contacto';


@Component({
  selector: 'app-registrar-contacto',
  templateUrl: './registrar-contacto.component.html',
  styleUrls: ['./registrar-contacto.component.css']
})
export class RegistrarContactoComponent implements OnInit {
  newContactoForm: FormGroup;
  contacto: Contacto;
  idContacto : String;

  constructor(private service: MockContactoService,  private route: ActivatedRoute, private router: Router, private builder: FormBuilder) {
    
    this.newContactoForm = builder.group(new Contacto());
    
    
    // ({
    //   nombre: new FormControl(this.contacto.nombre),
    //   apellido: new FormControl(this.contacto.apellido),
    //   dni: new FormControl(this.contacto.dni),
    //   email: new FormControl(this.contacto.email),
    //   telefono: new FormControl(this.contacto.telefono)

    // });
    
    var idContacto = route.snapshot.paramMap.get("idx");
    this.idContacto = idContacto;
    if (idContacto) {
      //Caso editar
      this.contacto = this.service.getContactos()[idContacto];
    } else {
      //Caso nuevo
      this.contacto = new Contacto()
    }

    

    this.newContactoForm = new FormGroup({
      nombre: new FormControl(),
      apellido: new FormControl(),
      dni: new FormControl(),
      email: new FormControl(),
      telefono: new FormControl()
    })

  }

  onSubmit(): void {
    if (this.idContacto) {
      this.contacto.setContacto(this.newContactoForm.get('nombre').value,
      this.newContactoForm.get('apellido').value,
      this.newContactoForm.get('dni').value,
      this.newContactoForm.get('email').value,
      this.newContactoForm.get('telefono').value)
    } else {
      this.agregarContactoEnDonante(this.contacto);
    }
    this.router.navigateByUrl("listar-contacto")

  }

  agregarContactoEnDonante(contacto: Contacto) {
    this.contacto.setContacto(this.newContactoForm.get('nombre').value,
      this.newContactoForm.get('apellido').value,
      this.newContactoForm.get('dni').value,
      this.newContactoForm.get('email').value,
      this.newContactoForm.get('telefono').value)
    this.service.addContacto(contacto);
  }



  ngOnInit() {
  }

}
