import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-perfil-donante',
  templateUrl: './perfil-donante.component.html',
  styleUrls: ['./perfil-donante.component.css']
})
export class PerfilDonanteComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

}
