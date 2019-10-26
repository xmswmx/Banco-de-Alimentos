export class Item {
	name: String;
	creationDate:number
	constructor(name: String){
		this.name = name;
        this.creationDate=Date.now();
	}
}
