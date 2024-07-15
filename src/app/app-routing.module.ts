import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingMenuComponent } from './booking-menu/booking-menu.component';
import { authGuard } from './auth/auth.guard';

const routes: Routes = [
  { path: '', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
  { path: 'admin-mod', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
  { path: 'user-pannel', loadChildren: () => import('./user-pannel/user-pannel.module').then(m => m.UserPannelModule) },
  { path: 'booking-menu', component: BookingMenuComponent, canActivate: [authGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  
})
export class AppRoutingModule { }
