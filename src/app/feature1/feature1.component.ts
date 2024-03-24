import { Component, OnInit } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http'
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-feature1',
  templateUrl: './feature1.component.html',
  styleUrls: ['./feature1.component.scss']
})
export class Feature1Component implements OnInit {
  index:any=1;
  empJson: any[]=[];
  empDetails:any[]=[
    {
      empId:1,
      empName:'Anusha',
      empSalary:1000
    },
    {
      empId:2,
      empName:'Pavan',
      empSalary:2000
    },
    {
      empId:3,
      empName:'Anish',
      empSalary:3000
    },
    {
      empId:4,
      empName:'Havisha',
      empSalary:4000
    }
  ]
  constructor( public httpClient:HttpClient){}
  
  ngOnInit(): void {
    console.log("In init");
    //displaying data from local json file on console
    this.getEmployeeData();
  }

  //getting data from local json
  getEmployeeData(){
    this.httpClient.get<any[]>('./assets/data.json').subscribe(
      (response: any) => {
        console.log("Value Received :" + JSON.stringify(response));
        this.empJson=response;  
      },
      (error : any) => {
        console.log("Error caught at Subscriber :" + JSON.stringify(error));
      },
      () => console.log("Processing Complete.")
    );
  }

  //feature1
  deleteEmployee(i:number){
    console.log("In delete employee function");
    console.log(i);
    this.empDetails.splice(i,1)
    console.log(this.empDetails);
  }

  editEmployee(){
    console.log("In edit employee function");
  }
}
