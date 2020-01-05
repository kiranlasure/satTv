import { Component, OnInit } from '@angular/core';
import { SatTvDataService } from '../../services/sat-tv-data.service';
import { Router } from '@angular/router';
// import { FormGroup, FormControl, Validators, FormBuilder }  from '@angular/forms';
// import {FormsModule,ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private satService: SatTvDataService,private route:Router) { }
  userForm = {
    name: '',
    password: '',
    repassword: '',
    mobno: '',
    email: ''
  }
  status = true;
  ngOnInit() {
  }

  name2 = " ";
  signup(val) {
    this.name2 = val;
    localStorage.setItem("username", this.name2);

  }
  updateName() {

  }

  getItem() {
    console.log(localStorage.getItem("username"));
  }
  formvaliate() {
    if (this.userForm.name && this.userForm.password && this.userForm.repassword && this.userForm.mobno &&
      this.userForm.email && this.userForm.password == this.userForm.repassword) {
      this.status = false;
    } else {
      this.status = true;
    }
  }
  register() {
    if (!status) {
      this.satService.registeUser(this.userForm);
      alert('Succesfuly Register');
      this.route.navigate(['']);
    }
  }
}