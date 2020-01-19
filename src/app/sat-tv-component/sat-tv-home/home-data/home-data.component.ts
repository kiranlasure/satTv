import { Component, OnInit } from '@angular/core';
import { SatTvDataService } from '../../../services/sat-tv-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-data',
  templateUrl: './home-data.component.html',
  styleUrls: ['./home-data.component.scss']
})
export class HomeDataComponent implements OnInit {

  constructor(private satService: SatTvDataService, private router:Router) { }
  userData;
  ngOnInit() {
    this.userData = JSON.parse(this.satService.getData('singleUserData'));
  }
  gotoCustomerDetails(){
    this.router.navigate(['/cst']);
  }
}
