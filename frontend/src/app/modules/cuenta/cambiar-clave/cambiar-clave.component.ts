import { Component, OnInit } from '@angular/core';
import { DataShareService } from 'src/app/_services/data-share.service';

@Component({
  selector: 'app-cambiar-clave',
  templateUrl: './cambiar-clave.component.html',
  styleUrls: ['./cambiar-clave.component.css']
})
export class CambiarClaveComponent implements OnInit {

  constructor(private data:DataShareService) { }

  ngOnInit() {
    this.data.cambiarTitulo("Cambiar clave");
  }

}
