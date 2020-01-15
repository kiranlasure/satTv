import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders} from '@angular/common/http';
import { Observable} from 'rxjs';
import { Customer } from './customer';
import { retry, catchError } from 'rxjs/operators';
import {  throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerDataServiceService {

  private url = 'https://api.myjson.com/bins/158w4y';

  constructor(private http:HttpClient) { }

  getCustomers(): Observable<Customer[]>{
    return this.http.get<Customer[]>(this.url);
 
}
}