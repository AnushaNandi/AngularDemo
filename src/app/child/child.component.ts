import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
//import * as EventEmitter from 'events';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  @Input('parentVar') c:any;
  @Output('outVar') emitter=new EventEmitter();
  d:any;
  childVar:any;
  constructor() { }

  ngOnInit(): void {
    //this.emitter.emit(this.childVar);
  }
  subtract(c:number,d:number):any{
    console.log(c)
    this.childVar=c-d;
    this.emitter.emit(this.childVar);
    return this.childVar;
  }

}
