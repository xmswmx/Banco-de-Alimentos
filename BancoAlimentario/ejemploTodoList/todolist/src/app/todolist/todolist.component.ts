import { Component, OnInit } from '@angular/core';
import { Item } from '../model/Item';


@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {
 items : Item[];

  constructor() {
   this.items = [ new Item("Buy pendrives"), new Item("Buy backpacks"), new Item("Rent projectors") ];
   }

   onRemove(anItem){ this.items = this.items.filter(item => item !== anItem); }


  ngOnInit() {
  }

}
