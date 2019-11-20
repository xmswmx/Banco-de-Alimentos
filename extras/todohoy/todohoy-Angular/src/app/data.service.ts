import { Injectable } from '@angular/core';
import { Item } from './model/item';

@Injectable({  providedIn: 'root' })
export class DataServiceService {
  constructor() {  

    this.items=[new Item("item de lista")]
   }
  items:Item[]
  
  getItemList(){
    return this.items
  }
  
  addItem(item:Item){
    this.items.push(item)
  }
  
  deleteItem(item:Item){
    this.items=this.items.filter(i=>item!==i)

  }}

