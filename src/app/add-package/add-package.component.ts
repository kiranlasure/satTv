import { Component, OnInit } from '@angular/core';
import { SatTvDataService } from '../services/sat-tv-data.service';

@Component({
  selector: 'app-add-package',
  templateUrl: './add-package.component.html',
  styleUrls: ['./add-package.component.scss']
})
export class AddPackageComponent implements OnInit {

  pkgs = [
    { value: 'gold', viewValue: 'Gold' },
    { value: 'silver', viewValue: 'Silver' }
  ];
  amount = 0;
  pkg = {
    name: '',
    month: 0
  }

  eng = 'LearnEnglish';
  cook = 'LearnCooking';
  goldPrize = 100;
  silvePrize = 50;
  learnEnglish = 200;
  learnCook = 100;
  totalAmt = 0; 
  month = [
    { value: '1', viewValue: '1' },
    { value: '2', viewValue: '2' },
    { value: '3', viewValue: '3' },
    { value: '4', viewValue: '4' },
    { value: '5', viewValue: '5' },
    { value: '6', viewValue: '6' },
    { value: '7', viewValue: '7' },
    { value: '8', viewValue: '8' },
    { value: '9', viewValue: '9' },
    { value: '10', viewValue: '10' },
    { value: '11', viewValue: '11' },
    { value: '12', viewValue: '12' }
  ]
  userData;
  dis = 0;
  constructor(private sat: SatTvDataService) { }

  ngOnInit() {
    this.userData = JSON.parse(this.sat.getData('singleUserData'));
  }
  calculateAmount() {

    if (this.pkg.name && this.pkg.month) {
      if (this.pkg.name == 'gold') {
        this.amount = this.goldPrize * this.pkg.month;
        if (this.pkg.month > 3) {
          this.dis = (this.amount * 0.1);
          console.log(this.dis);
          this.amount = this.amount - (this.amount * 0.1);
        }

      } else {
        this.amount = this.silvePrize * this.pkg.month;
        if (this.pkg.month > 3) {
          this.dis = (this.amount * 0.1);
          this.amount = this.amount - (this.amount * 0.1);
        }

      }

    }
  }
  buy() {
    if (this.amount) {
      if (this.userData.balance > this.amount) {
        this.sat.buyPack(this.pkg,this.userData,this.amount)
        alert('succesfully subcribe');
      } else {
        alert('unsufficeant balance');
      }
    }

  }
  buyEnglishService()
  {
    this.totalAmt = this.totalAmt + this.learnEnglish;
    if(this.userData.balance > this.totalAmt)
    {
      this.sat.buyengService(this.totalAmt,this.userData,this.eng)
      alert('successfully Suscribe');
    }
    else
    {
      alert('unsufficeant balance');
    }
  }
  buyCookingService()
  {
    this.totalAmt = this.totalAmt + this.learnCook;
    if(this.userData.balance > this.totalAmt)
    {
      this.sat.buycookService(this.totalAmt, this.userData, this.cook);
      alert('successfully Suscribe');
    }
    else
    {
      alert('unsufficeant balance');
    }
  }
  
}
