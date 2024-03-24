import { Component, OnInit } from '@angular/core';
import { from, interval, Observable, of } from 'rxjs';
import { concatMap, delay, exhaustMap, map, mapTo, mergeMap, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-rxjsoperators',
  templateUrl: './rxjsoperators.component.html',
  styleUrls: ['./rxjsoperators.component.scss']
})
export class RxjsoperatorsComponent implements OnInit {
  values=[1,2,3,4,5,6];
  empName=[];
    
  constructor() { 
  }

  ngOnInit(): void {
    //let observable$=new Observable((observer)=>{
      const observable$=
      [
        {
          id:7,
          name:'anusha'
        },
        {
          id:8,
          name:'pavan'
        },
        {
          id:9,
          name:'anish'
        },
        {
          id:10,
          name:'havisha'
        }
      ]
    
    // Example of map with array data
    // this.values.map(
    //   (value)=>
    //   {
    //     value=value+3;
    //     console.log(value);
    //   }
    // )



    // Example of mapTo
    // const source=interval(3000);
    // source.pipe(mapTo("Welcome")).subscribe((value)=>console.log(value));




    //Example of map with object data
  //   console.log(JSON.stringify(from(observable$)));
  //   from(observable$).pipe(map(val=>(val.id+2) )).subscribe(val => console.log(val));



  //of takes all the array values & from takes single value at a time in array
      // of([1,2,3]).subscribe(val=>console.log(val));
      // from([1,2,3]).subscribe(val=>console.log(val))




  //use mergemap when you think the order is not important whereas use concatmap when you are particular with the order of the results
    //Mergemap example
  //   of('x', 'y', 'z').pipe(
  //     mergeMap(el => of(1, 2).pipe(
  //       delay(2000),
  //       map(num => el+num)        
  //     )
  //     )
  //  ).subscribe(res => console.log(res)); 

   //switchmap example
//    of('x', 'y', 'z').pipe(
//     switchMap(el => of(1, 2).pipe(
//       delay(2000),
//       map(num => el+num)        
//     )
//     )
//  ).subscribe(res => console.log(res)); 
    
  //concatmap example
//    of('x', 'y', 'z').pipe(
//     concatMap(el => of(1, 2).pipe(
//       map(num => el+num)        
//     )
//     )
//  ).subscribe(res => console.log(res)); 

//exhaustmap example
//  of('x', 'y', 'z').pipe(
//   exhaustMap(el => of(1, 2).pipe(
//     delay(2000),
//     map(num => el+num)        
//   )
//   )
// ).subscribe(res => console.log(res)); 
  }
}
  