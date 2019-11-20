import { Injectable } from '@angular/core';
import { Item } from "../model/Item";

@Injectable({
  providedIn: 'root'
})
export abstract class AbstractItemsService {

  constructor() { };
  abstract getItems(): Promise<Item[]>;
}
