import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { DataServiceService } from '../data.service';
import { Item } from '../model/item';
import { Route } from '@angular/compiler/src/core';
import { LoopBackConfig, BaseLoopBackApi } from '../services/lbservice';
import { ItemApi } from '../services/lbservice/services';

@Component({
  selector: 'app-new-item',
  templateUrl: './new-item.component.html',
  styleUrls: ['./new-item.component.css']
})
export class NewItemComponent implements OnInit {
  newItemForm: FormGroup;

  //Creo un item nuevo de los importados de lb
  item: Item;

  //Se supone que tengo configurado LB en el app component, con su baseURL y api version

  //Importo un servicio
  constructor(private itemApi: ItemApi, private route: ActivatedRoute , private router:Router,  private service:DataServiceService) { 
    
    //Esto es porque comparte el componente para editar o crear uno
    var idx=route.snapshot.paramMap.get("idx");
    if (idx){
      this.item=this.service.getItemList()[idx];

    }else{
      this.item= new Item('')
    }

    this.newItemForm = new FormGroup({
      itemName: new FormControl(this.item.name)
    }); 
  }
  
  ngOnInit() {
    
  }
  
  //Hago una llamada a la API
  onSubmit(){
 
    var item=new Item(this.newItemForm.get("itemName").value)

    this.itemApi.create(item).subscribe(()=>{
      this.router.navigateByUrl("/")
      })
/*
    this.service.addItem(item)
    this.router.navigateByUrl("/")
*/
    
    
  }
}
