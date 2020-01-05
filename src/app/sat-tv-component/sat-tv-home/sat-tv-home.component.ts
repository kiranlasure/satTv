import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sat-tv-home',
  templateUrl: './sat-tv-home.component.html',
  styleUrls: ['./sat-tv-home.component.scss']
})
export class SatTvHomeComponent implements OnInit {

  constructor(private router: Router, private activeRoute: ActivatedRoute) { }
  dataInfo = [
    {
      id: 1,
      name: 'Home',
      checked: true
    },
    {
      id: 2,
      name: 'View and Edit Profile',
      checked: false
    },
    {
      id: 3,
      name: 'Recharge',
      checked: false
    },
    {
      id: 4,
      name: 'Current subscription',
      checked: false
    }, {
      id: 5,
      name: 'Add Channal',
      checked: false
    },
    {
      id: 6,
      name: 'Subscribe',
      checked: false
    },
    {
      id:7,
      name:'Logout',
      checked:false
    }

  ]

  ngOnInit() {
  }
  clickItem(data) {
    this.dataInfo.forEach(res => {
      res.checked = false;
    })
    data['checked'] = true;
    switch (data.id) {
      case 1: {
        this.router.navigate(['/home'], { relativeTo: this.activeRoute });
        break;
      }
      case 2: {
        this.router.navigate(['./updatePro'], { relativeTo: this.activeRoute });
        break;
      }
      case 3: {
        this.router.navigate(['./recharge'], { relativeTo: this.activeRoute });
        break;
      }
      case 4: {
        this.router.navigate(['./currentsub'], { relativeTo: this.activeRoute });
        break;
      }
      case 5: {
        this.router.navigate(['./channel'], {relativeTo: this.activeRoute});
        break;
      }
      case 6: {
        this.router.navigate(['./addPack'], { relativeTo: this.activeRoute });
        break;
      }
      case 7: {
        console.log('inn')
        localStorage.setItem('singleUserData','');
        this.router.navigate([''], { relativeTo: this.activeRoute });
        
        break;
      }
    }
  }

}
