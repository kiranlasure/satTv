import { Component, OnInit } from '@angular/core';
import { SatTvDataService } from '../services/sat-tv-data.service';

@Component({
  selector: 'app-channel',
  templateUrl: './channel.component.html',
  styleUrls: ['./channel.component.scss']
})
export class ChannelComponent implements OnInit {

  total = 200;
  // channels = [{
  //   name: 'Zee (10 Rs)',
  //   check: true
  // },
  // {
  //   name: 'Sony (15 Rs)',
  //   check: true
  // },
  // {
  //   name: 'Star Plus (20 Rs)',
  //   check: false
  // },
  // {
  //   name: "Discovary (10 Rs)",
  //   check: true
  // },
  // {
  //   name: "Net Geo",
  //   check: false
  // }
  // ]
  channels;
  tAmount = 0;
  selectedList = [];
  userData;
  constructor(private sat: SatTvDataService) { }

  ngOnInit() {

    this.userData = JSON.parse(this.sat.getData('singleUserData'));

    this.channels = this.sat.availableChannelList;
  }
  evntChange(evt, ch) {
    console.log(evt);
    if (evt.checked) {
      this.tAmount = this.tAmount + ch.prize;
      this.selectedList.push(ch);
    } else {
      this.tAmount = this.tAmount - ch.prize;
      this.selectedList = this.selectedList.filter(res => ch.id != res.id);
    }
  }
  buy() {
    if (this.tAmount) {
      if (this.userData.balance > this.tAmount) {
        this.sat.addChannel(this.selectedList, this.userData, this.tAmount);
        alert('added succesfully');
      } else {
        alert('unsufficeant balance');
      }
    }

  }
  checkList(ch) {
    const chk = this.userData.channels.filter(res => res.id == ch.id);
    if (chk.length) {
      return false
    }
    return true;
  }

}
