import { Component, OnInit, OnDestroy } from '@angular/core';
// import { SharedService } from '../shared-service/shared.service';
import { Subscription } from 'rxjs';
import { SharedService } from 'src/app/shared-service/shared.service';

@Component({
  selector: 'app-selected-bus-page',
  templateUrl: './selected-bus-page.component.html',
  styleUrls: ['./selected-bus-page.component.css']
})
export class SelectedBusPageComponent implements OnInit, OnDestroy {
  selectedBusServices: any;
  private subscription!: Subscription; 

  constructor(private sharedService: SharedService) {}

  ngOnInit() {
    this.subscription = this.sharedService.selectedBusOwner$.subscribe(busOwner => {
      this.selectedBusServices = busOwner;
      console.log(this.selectedBusServices, 'Selected Bus Service');
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe(); 
  }
}
