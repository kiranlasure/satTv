import { Component, OnInit } from '@angular/core';
import { SatTvDataService } from '../../../services/sat-tv-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recharge',
  templateUrl: './recharge.component.html',
  styleUrls: ['./recharge.component.scss']
})
export class RechargeComponent implements OnInit {

  balance;
  status = "true";
  userData;
  constructor(private sat: SatTvDataService, private router: Router) { }

  ngOnInit() {
    this.userData = JSON.parse(this.sat.getData('singleUserData'));
  }


  recharge() {
    if (this.balance) {
      this.sat.setBalance(this.balance,this.userData);
      alert('recharge succesful');
      this.router.navigate(['./home']);
    }
  }
}
