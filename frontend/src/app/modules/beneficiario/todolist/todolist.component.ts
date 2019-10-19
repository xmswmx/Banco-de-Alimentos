import { Component, OnInit } from '@angular/core';
import { Item } from '../../../data/model/Item';
import { MockItemsService } from '../../../data/services/mock-items.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {
  items: Item[];
  static instance: TodolistComponent;

  constructor(private service: MockItemsService, private router: Router) {
    this.updateLocalItems();
  }


  onRemove(anItem) { this.items = this.items.filter(item => item !== anItem); }

  updateLocalItems() {
    this.service.getItems().then(items => this.items = items);
  }


  ngOnInit() {
  }

}
