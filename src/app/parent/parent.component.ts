import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

  parentVar:number=0;
  a:any;
  b:any;
  f:any;
  constructor() { }

  ngOnInit(): void {
  }
  add(a:number,b:number):number{
    this.parentVar=a + b;
    console.log(this.parentVar)
    return this.parentVar;
  }

  multiply(e:number){
    this.f=e;
    //console.log("value of e", +e)
  }
}
