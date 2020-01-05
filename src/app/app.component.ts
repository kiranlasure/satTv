import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'satTv';
  constructor(private router:Router){

  }
  ngOnInit() {
    console.log('v');
    console.log(localStorage.getItem('singleUserData'))
    console.log('d')
    if(!localStorage.getItem('singleUserData')){
      this.router.navigate(['']);
    }
  }
 
}
