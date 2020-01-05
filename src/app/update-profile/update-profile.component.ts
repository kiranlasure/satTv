import { Component, OnInit } from '@angular/core';
import { SatTvDataService } from '../services/sat-tv-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.scss']
})
export class UpdateProfileComponent implements OnInit {

  constructor(private satService: SatTvDataService, private router: Router) { }
  userData;
  view = true;
  userForm = {
    name: '',
    mobno: '',
    email: ''
  }
  status = true;
  ngOnInit() {
    this.userData = JSON.parse(this.satService.getData('singleUserData'));
    console.log(this.userData);
    this.formvaliate();
  }
  changeView() {
    this.userData = JSON.parse(this.satService.getData('singleUserData'));
    this.view = !this.view;
  }
  formvaliate() {
    if (this.userData.name && this.userData.mobno && this.userData.email)
    {
      this.status = false;
    } 
    else
    {
      this.status = true;
    }
  }
  update() {
    if(!status){
      this.satService.updateData(this.userData);
      alert('updation Successfully');
      this.router.navigate(['./home']);
    }
  }
}
