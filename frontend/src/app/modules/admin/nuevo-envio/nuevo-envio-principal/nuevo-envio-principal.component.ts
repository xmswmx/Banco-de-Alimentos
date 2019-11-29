import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-nuevo-envio-principal',
  templateUrl: './nuevo-envio-principal.component.html',
  styleUrls: ['./nuevo-envio-principal.component.css']
})
export class NuevoEnvioPrincipalComponent implements OnInit {

	formEnvio : FormGroup;
	var: string = 'hola';
  constructor() { 
    	  this.formEnvio = new FormGroup({
        texto: new FormControl()
      });
this.var=this.formEnvio.get("texto").value;
    	}


  ngOnInit() {
  }

  onSubmit(){
  	alert(this.formEnvio.get("texto").value);
  }

  enviar(){
  	alert(this.formEnvio.get("items").value);
  }

}
