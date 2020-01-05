import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { SatTvDataService } from '../services/sat-tv-data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userForm = {
    userName: '',
    password: ''
  }
  status;
  constructor(private router: Router, private satService: SatTvDataService) { }

  ngOnInit() {
  }

  login() {
    if (this.userForm.userName && this.userForm.password) {
      if (this.satService.loginUserValidate(this.userForm)) {
        alert("Login Successfully..");
        this.router.navigate(['home']);
      }
      else {
        this.status = 2;
      }
    }
  }

  gotoReg() {
    this.router.navigate(['/reg']);
  }

}