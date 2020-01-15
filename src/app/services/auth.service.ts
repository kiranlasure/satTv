import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public jwtHelper: JwtHelperService) { }

  public isAuthonticated(): boolean{
    const tokan = localStorage.getItem('tokan');
    return !this.jwtHelper.isTokenExpired(tokan);
  }
}
