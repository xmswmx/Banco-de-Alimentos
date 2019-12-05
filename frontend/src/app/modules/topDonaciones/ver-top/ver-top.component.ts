import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'app-ver-top',
  templateUrl: './ver-top.component.html',
  styleUrls: ['./ver-top.component.css']
})
export class VerTopComponent implements OnInit {

  constructor(private _location:Location) { }

  ngOnInit() {
  }

}
