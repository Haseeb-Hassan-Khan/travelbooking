import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DisplayServicesComponent } from './display-services/display-services.component';
import { SelectedBusPageComponent } from './selected-bus-page/selected-bus-page.component';

const routes: Routes = [
  { path: 'display-services', component: DisplayServicesComponent },
  { path: 'selected-bus-page', component: SelectedBusPageComponent }

];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserPannelRoutingModule { }



