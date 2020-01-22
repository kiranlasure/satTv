import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tp',
  templateUrl: './tp.component.html',
  styleUrls: ['./tp.component.scss']
})
export class TpComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  gotoCst(){
    this.router.navigate(['\cst']);
  }
}
