import { Component, OnInit } from '@angular/core';
import { SatTvDataService } from '../../../services/sat-tv-data.service';

@Component({
  selector: 'app-home-data',
  templateUrl: './home-data.component.html',
  styleUrls: ['./home-data.component.scss']
})
export class HomeDataComponent implements OnInit {

  constructor(private satService: SatTvDataService) { }
  userData;
  ngOnInit() {
    this.userData = JSON.parse(this.satService.getData('singleUserData'));
    console.log(this.userData)
  }

}
