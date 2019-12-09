import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  events = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
  total : number = 0;
  data : any = [];
  totatData : number = 0;
   constructor(){
    this.events = this.chunks(this.events,8);
  }
    chunks(array, size) {
      let results = [];
       results = [];
        while (array.length) {
        results.push(array.splice(0, size));
        }
        this.data = results;
        this.totalData = this.data.length;
        console.log("total de datos del array: "+this.totalData)
        console.log(this.data)
        return results;
  }
}
