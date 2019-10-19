import { Injectable } from '@angular/core';
import { AbstractItemsService } from "./abstract-items.service";
import { Item } from "../model/Item";

@Injectable({
  providedIn: 'root'
})
export class MockItemsService extends AbstractItemsService {
	items:Item[];
  constructor() {
  		super();
  		this.items = [new Item("Buy pendrive"),new Item("Buy cd"), new Item("Buy playstation")
  		];
  };
  getItems(): Promise <Item[]>{
  	return new Promise((resolve) => {
  		resolve(this.items);
  	})
  };
  addItem(item: Item): Promise<Object> {
    return new Promise((resolve) => {

      this.items.push(item);
      resolve();
    });
  };
}
