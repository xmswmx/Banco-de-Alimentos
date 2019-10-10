import { Component, OnInit } from '@angular/core';
import { Donante } from '../_model/donante';

@Component({
  selector: 'app-form-donante',
  templateUrl: './form-donante.component.html',
  styleUrls: ['./form-donante.component.css']
})
export class FormDonanteComponent implements OnInit {
  donante: Donante;


  ngOnInit() {
  }

}
