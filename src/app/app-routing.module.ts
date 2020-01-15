import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register/register.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
import { ChannelComponent } from './channel/channel.component';
import { AddPackageComponent } from './add-package/add-package.component';
import { SatTvHomeComponent } from './sat-tv-component/sat-tv-home/sat-tv-home.component';
import { HomeDataComponent } from './sat-tv-component/sat-tv-home/home-data/home-data.component';
import { RechargeComponent } from './sat-tv-component/sat-tv-home/recharge/recharge.component';
import { CurrentSubComponent } from './sat-tv-component/sat-tv-home/current-sub/current-sub.component';
import { CustomerDetailsComponent } from './sat-tv-component/sat-tv-home/customer-details/customer-details.component';
import { 
  AuthGuardService as AuthGuard 
} from './services/auth.service';

const routes: Routes = [
  { path: '', component: LoginComponent,
  canActivate: [AuthGuard] 
},
  { path: 'reg', component: RegisterComponent },
  {
    path: 'home', component: SatTvHomeComponent,
    children: [
      { path: '', component: HomeDataComponent },
      { path: 'updatePro', component: UpdateProfileComponent },
      { path: 'channel', component: ChannelComponent },
      { path: 'addPack', component: AddPackageComponent },
      { path: 'recharge', component:RechargeComponent},
      { path: 'currentsub', component:CurrentSubComponent }

    ]
  },
  {path:'customer',component:CustomerDetailsComponent},
  // { path: 'user', loadChildren: () => import('../user/user.module').then(m => m.UserModule) },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
