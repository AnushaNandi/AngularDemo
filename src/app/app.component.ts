import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  myName:string="Anusha";
  name:string='admin';
  flag:boolean=true;
  emp:any[]=[
    {
      id:7,
      name:'anusha'
    },
    {
      id:8,
      name:'pavan'
    }
  ]

  constructor(){
    console.log(this.myName);
  }

  onInputChange(){
    console.log("after input change : "+this.myName);
  }

  flagChange(){
    this.flag=!this.flag;
  }

  clickButton(){
    this.name='user';
  }
  
}
