import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisplayServicesComponent } from './display-services/display-services.component';
import { UserPannelRoutingModule } from './user-pannel-routing.module';
import { AdminServiceService } from '../admin-post/admin-service.service';
import { SelectedBusPageComponent } from './selected-bus-page/selected-bus-page.component';
import { ReceiptGenerateComponent } from './receipt-generate/receipt-generate.component';



@NgModule({
  declarations: [
    DisplayServicesComponent,
    SelectedBusPageComponent,
    ReceiptGenerateComponent,
    
  ],
  imports: [
    CommonModule,
    UserPannelRoutingModule,
    
  ],
  providers: [
    AdminServiceService    //import this service from different module
  ]
})
export class UserPannelModule { }
