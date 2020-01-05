import { Component, OnInit } from '@angular/core';
import { SatTvDataService } from 'src/app/services/sat-tv-data.service';

@Component({
  selector: 'app-current-sub',
  templateUrl: './current-sub.component.html',
  styleUrls: ['./current-sub.component.scss']
})
export class CurrentSubComponent implements OnInit {

  userData;
 
  // userkeys:any = Object.keys(this.userData);
  // userData1 = [];
  // foreach( item of userkeys){
  //   this.userData1.push(userkeys[item])
  // }
  // userdata1 = JSON.stringify(this.userData);
  constructor(private sat: SatTvDataService) { }

  ngOnInit() {
    this.userData = JSON.parse(this.sat.getData('singleUserData'));
    console.log(this.userData);
  }

}
