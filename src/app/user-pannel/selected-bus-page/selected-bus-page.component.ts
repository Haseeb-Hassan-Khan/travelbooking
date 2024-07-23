import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { SharedService } from 'src/app/shared-service/shared.service';
import { Modal } from 'bootstrap';
import { UserService } from '../user.service';
import { postBookingConfirmation } from 'src/app/store/travel.action';
import { Store } from '@ngrx/store';
import { BookingConfirmState } from 'src/app/store/travel.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-selected-bus-page',
  templateUrl: './selected-bus-page.component.html',
  styleUrls: ['./selected-bus-page.component.css']
})
export class SelectedBusPageComponent implements OnInit, OnDestroy {
  selectedBusServices: any;
  private subscription!: Subscription;

  constructor(private sharedService: SharedService, private userService: UserService,private store: Store<{ travel: BookingConfirmState }>,private router:Router) {}

  ngOnInit() {
    this.subscription = this.sharedService.selectedBusOwner$.subscribe(busOwner => {
      this.selectedBusServices = busOwner;
      console.log(this.selectedBusServices, 'Selected Bus Service');
    });
  }

  addToCart() {
    const modalElement = document.getElementById('bookTicketModal');
    if (modalElement) {
      const modal = new Modal(modalElement);
      modal.show();
    }
  }

  bookTicket(selectedBusServices:any){
    // const amount = this.selectedBusServices.price;
    // const busName = this.selectedBusServices.bus_name;

    // Construct the payment URL with necessary parameters
    // const paymentUrl = `https://api.easypaisa.com/payment/initiate?amount=${amount}&busName=${encodeURIComponent(busName)}`;

    // Open the payment URL in a new tab
    // window.open(paymentUrl, '_blank');
    if (selectedBusServices) {
      this.store.dispatch(postBookingConfirmation({ item: selectedBusServices }));
      this.router.navigate(['/user-pannel/receipt-generate'])
    }
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  
}


