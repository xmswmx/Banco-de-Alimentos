import { Component, OnInit } from '@angular/core';
import { Item } from '../services/lbservice/models/Item';
import { DataServiceService } from '../data.service';
import { ItemApi } from '../services/lbservice';
import { LoopBackConfig, LoggerService } from '../services/lbservice'

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {

  constructor(private itemApi:ItemApi, private log: LoggerService) { 
    LoopBackConfig.setDebugMode(false);
    this.log.info('Component is loaded')
  }
  items:Item[]
  
  ngOnInit() {
    this.itemApi.find().subscribe((res:Item[])=>{this.items=res})
  }

  onRemove(itemId:String){
    this.itemApi.onDeleteById(itemId);
    console.log(this.itemApi.findById(itemId));

  }
 

}
