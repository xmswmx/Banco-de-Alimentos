import { Component, OnInit } from '@angular/core';
import { Item } from '../model/Item';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { MockItemsService } from '../services/mock-items.service';
import { AbstractItemsService } from '../services/abstract-items.service';

@Component({
  selector: 'app-new-item',
  templateUrl: './new-item.component.html',
  styleUrls: ['./new-item.component.css']
})
export class NewItemComponent implements OnInit {

  newItemForm : FormGroup;

  constructor(private router:Router, private service:MockItemsService) {
  	this.newItemForm = new FormGroup({
  			itemName: new FormControl()
  		});	
	}

  onSubmit():void{
  	this.addItem(new Item(this.newItemForm.get('itemName').value));
  }

  addItem(item :Item){
  	this.service.addItem(item).then(()=>{this.router.navigateByUrl('/home')}).catch(err => console.log(err));
  }

  ngOnInit() {
  }

}
