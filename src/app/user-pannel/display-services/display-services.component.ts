import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AdminServiceService } from 'src/app/admin-post/admin-service.service';
import { BusOwner } from 'src/app/user-pannel/user-model';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/shared-service/shared.service';

@Component({
  selector: 'app-display-services',
  templateUrl: './display-services.component.html',
  styleUrls: ['./display-services.component.css']
})
export class DisplayServicesComponent implements OnInit {

  busOwnerData: BusOwner[] = [];
  userSearchData: any = [];
  lastUserSearchDestination: string = ''; 
  lastUserSearchArrival: string= '';
  selectedData: any = '';

  constructor(private adminServiceService: AdminServiceService,
    private userService: UserService, 
    private router:Router,
    private sharedService: SharedService) {     
  }

  ngOnInit() {
    this.adminServiceService.getBusOwnerPost().subscribe((result: BusOwner[]) => {
      this.busOwnerData = result;
      this.matchDestinations(); 
    });
    this.getUserSearchData();
  }

  getUserSearchData() {
    this.userService.getUserSearchForServices().subscribe(
      (result: any) => {
        this.userSearchData = result;
        if(result.length > 0) {
          this.lastUserSearchDestination = result[result.length - 1].destination; 
          this.lastUserSearchArrival = result[result.length - 1].arrival;
          this.matchDestinations(); 
        }
      },
      (error) => {
        console.error('Error fetching data:', error); 
      }
    );
  }

  matchDestinations() {
    if(this.lastUserSearchDestination && this.busOwnerData.length > 0) {
      this.busOwnerData = this.busOwnerData.filter(owner => 
      owner.destination === this.lastUserSearchDestination && owner.arrival === this.lastUserSearchArrival);
    }
  }

  goToSelectedBusPage(busOwner: any) {
    this.selectedData = busOwner;
    if(this.selectedData) {
      this.sharedService.setSelectedBusOwner(this.selectedData);
      setTimeout(() => {
        this.router.navigate(['user-pannel/selected-bus-page']);
      }, 100); 
    }
  }

}
