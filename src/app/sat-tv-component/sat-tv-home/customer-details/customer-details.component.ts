import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.scss']
})
export class CustomerDetailsComponent implements OnInit {

  myName='kiran'

  constructor(private router: Router) {}
  ngOnInit() {
    
  }
  gototp(){
    this.router.navigate(['/tp']);
    
  }
  
 
}
