import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './modules/material.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material';
import { FlexLayoutModule } from "@angular/flex-layout";
import { UpdateProfileComponent } from './update-profile/update-profile.component';
import { ChannelComponent } from './channel/channel.component';
import { AddPackageComponent } from './add-package/add-package.component';
import { SatTvDataService } from './services/sat-tv-data.service';
import { SatTvHomeComponent } from './sat-tv-component/sat-tv-home/sat-tv-home.component';
import { HomeDataComponent } from './sat-tv-component/sat-tv-home/home-data/home-data.component';
import { RechargeComponent } from './sat-tv-component/sat-tv-home/recharge/recharge.component';
import { CurrentSubComponent } from './sat-tv-component/sat-tv-home/current-sub/current-sub.component';
import { CustomerDetailsComponent } from './sat-tv-component/sat-tv-home/customer-details/customer-details.component';
import { ChangecolorDirective } from './sat-tv-component/sat-tv-home/changecolor.directive';
import { SqrtPipe } from './sat-tv-component/sat-tv-home/pipe/sqrt.pipe';
import { CustomerDataServiceService } from './services/customer-data-service.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpErrorInterceptor } from './http-error.interceptor';
import { AuthService } from './services/auth.service';
import { AuthGuardService } from './services/auth-guard.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    UpdateProfileComponent,
    ChannelComponent,
    AddPackageComponent,
    SatTvHomeComponent,
    HomeDataComponent,
    RechargeComponent,
    CurrentSubComponent,
    CustomerDetailsComponent,
    ChangecolorDirective,
    SqrtPipe,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    FlexLayoutModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [SatTvDataService,CustomerDataServiceService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptor,
      multi: true
    },
    AuthService,
    AuthGuardService
  ]
  ,
  bootstrap: [AppComponent]
})
export class AppModule { }
