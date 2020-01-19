import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserComponent } from './user.component';

@NgModule({
  declarations: [LoginComponent, DashboardComponent, UserComponent],
  imports: [
    CommonModule
  ]
})
export class UserModule { }
