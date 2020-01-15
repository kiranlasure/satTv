import { Component, OnInit } from '@angular/core';
import { CustomerDataServiceService } from 'src/app/services/customer-data-service.service';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.scss']
})
export class CustomerDetailsComponent implements OnInit {


  
  person =[
    {
      id:101,
      name:"Kiran",
      MiddleName:"Annasaheb",
      LastName:"Lasure"
    },
    {
      id:102,
      name:"Tushar",
      MiddleName:"Annasaheb",
      LastName:"Lasure"
    },
    {
      id:103,
      name:"sonali",
      MiddleName:"Tushar",
      LastName:"Lasure"
    },
    {
      id:104,
      name:"Aniket",
      MiddleName:"Balu",
      LastName:"Lasure"
    }
  ];

  customer=[];
  constructor(private cstservice: CustomerDataServiceService) { }

  ngOnInit() {
    this.cstservice.getCustomers().subscribe(data=> this.customer = data);
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  check(data1){
    localStorage.setItem("data",data1); 
    console.log(data1);
 }
  getData()
  {

    // let js=JSON.stringify("data");
    // console.log();
    // console.log(localStorage.getItem(js));
  }
}
