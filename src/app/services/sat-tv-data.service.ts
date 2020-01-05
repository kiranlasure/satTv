import { Injectable, OnInit } from '@angular/core';
import { templateVisitAll } from '@angular/compiler';

@Injectable({
  providedIn: 'root',
  useClass: SatTvDataService

})
export class SatTvDataService implements OnInit {

  constructor() { }
  availableChannelList = [{
    id: 1,
    name: "Zee 10 Rs",
    prize: 10
  }, 
  {
    id: 2,
    name: "Sony 15 Rs",
    prize: 15
  },
  {
    id: 3,
    name: "Star Plus 20 Rs",
    prize: 20
  },
  {
    id:4,
    name: "Discovary",
    prize: 10
  },
  {
    id:5,
    name: "NatGeo 20 Rs",
    prize: 20
  }
  ];

  userData = [{
    id: 1,
    username: 'dnyaneshwar',
    password: '123'
  }];
  userFormData = [{
    id: 1,
    mobno: '8888923290',
    name: '',
    package: '',
    service: '',
    balance: 100,
    channels: [],
    email: 'dnyaneshwarsukashe@gmail.com'
  }]

  ngOnInit() {
    if (localStorage.getItem('userData')) {
      this.userData = JSON.parse(localStorage.getItem('userData'));
    }
    if (localStorage.getItem('userFormData')) {
      this.userFormData = JSON.parse(localStorage.getItem('userFormData'));
    }
  }
  setData(key, value) {
    localStorage.setItem(key, value);
  }
  getData(key) {
    return localStorage.getItem(key);
  }
  registeUser(data) {
    this.ngOnInit();
    const up =
    {
      id: (this.userData.length) + 1,
      username: data.name,
      password: data.password
    }
    const uf = {
      id: (this.userData.length) + 1,
      name: data.name,
      mobno: data.mobno,
      channels: [],
      package: '',
      service: '',
      balance: 100,
      email: data.email,
    }
    this.userData.push(up);
    this.userFormData.push(uf);
    localStorage.setItem('userData', JSON.stringify(this.userData));
    localStorage.setItem('userFormData', JSON.stringify(this.userFormData));
  }

  loginUserValidate(data) {
    this.ngOnInit();
    console.log(data);
    console.log(this.userData);
    const ft = this.userData.filter(res => res.username == data.userName && res.password == data.password);
    if (ft.length) {
      this.userFormData.forEach(res => {
        if (res.id == ft[0].id) {
          localStorage.setItem('singleUserData', JSON.stringify(res));
        }
      })
      return true;
    } else {
      return false;
    }
  }
  updateData(data) {
    this.ngOnInit();
    console.log(data);
    this.userFormData.forEach(res => {
      if (res.id == data.id) {
        res.email = data.email;
        res.mobno = data.mobno;
        res.name = data.name;
      }

    })
    console.log(this.userFormData);
    localStorage.setItem('singleUserData', JSON.stringify(data));
    localStorage.setItem('userFormData', JSON.stringify(this.userFormData));
  }
  setBalance(bl, data) {
    this.ngOnInit();
    console.log(data);
    console.log(bl);
    this.userFormData.forEach(res => {
      if (res.id == data.id) {
        res.balance = res.balance + bl;
        data.balance = data.balance + bl;
      }
    })
    console.log(this.userFormData);
    localStorage.setItem('singleUserData', JSON.stringify(data));
    localStorage.setItem('userFormData', JSON.stringify(this.userFormData));
  }
  addChannel(list, data, amount) {
    this.ngOnInit();
    console.log(this.userFormData);
    console.log(data)
    this.userFormData.forEach(res => {
      if (res.id == data.id) {
        res.channels= [res.channels,...list];
        res.balance = res.balance - amount;
        data.balance = data.balance - amount;
        data.channels = [ data.channels,...list];
      }
    })
    localStorage.setItem('singleUserData', JSON.stringify(data));
    localStorage.setItem('userFormData', JSON.stringify(this.userFormData));
  }
  buyPack(pkg, data, amount) {
    this.ngOnInit();
    console.log(this.userFormData);
    console.log(data)
    this.userFormData.forEach(res => {
      if (res.id == data.id) {
        res.balance = res.balance - amount;
        res.package = pkg;
        data.balance = data.balance - amount;
        data.package = pkg;
      }
    })
    localStorage.setItem('singleUserData', JSON.stringify(data));
    localStorage.setItem('userFormData', JSON.stringify(this.userFormData));
  }
  buyengService(totalAmt, data ,eng)
  {
    this.ngOnInit();
    console.log(totalAmt);
    this.userFormData.forEach(res => {
      if (res.id == data.id) {
        res.balance = res.balance - totalAmt;
        res.service = eng;
        data.balance = data.balance - totalAmt;
        data.service = eng;
      }
  })
  console.log('singleUserData', JSON.stringify(data));
  localStorage.setItem('singleUserData', JSON.stringify(data));
  localStorage.setItem('userFormData', JSON.stringify(this.userFormData));
 }
 buycookService(totalAmt, data ,cook)
  {
    this.ngOnInit();
    console.log(totalAmt);
    this.userFormData.forEach(res => {
      if (res.id == data.id) {
        res.balance = res.balance - totalAmt;
        res.service = cook;
        data.balance = data.balance - totalAmt;
        data.service = cook;
      }
  })
  console.log('singleUserData', JSON.stringify(data));
  localStorage.setItem('singleUserData', JSON.stringify(data));
  localStorage.setItem('userFormData', JSON.stringify(this.userFormData));
 }
 
}
