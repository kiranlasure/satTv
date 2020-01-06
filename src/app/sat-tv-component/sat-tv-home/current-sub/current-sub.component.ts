import { Component, OnInit } from '@angular/core';
import { SatTvDataService } from 'src/app/services/sat-tv-data.service';

@Component({
  selector: 'app-current-sub',
  templateUrl: './current-sub.component.html',
  styleUrls: ['./current-sub.component.scss']
})
export class CurrentSubComponent implements OnInit {

  userData;
  constructor(private sat: SatTvDataService) { }

  ngOnInit() {
    this.userData = JSON.parse(this.sat.getData('singleUserData'));
  }

}
