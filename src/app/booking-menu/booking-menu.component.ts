import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user-pannel/user.service';

@Component({
  selector: 'app-booking-menu',
  templateUrl: './booking-menu.component.html',
  styleUrls: ['./booking-menu.component.css']
})
export class BookingMenuComponent {

  minDate!: string;
  maxDate!: string;
  constructor(private router:Router,
    private fb: FormBuilder,
    private userService: UserService
  ){}

  bookingForm!: FormGroup;
  ngOnInit() {
    this.bookingForm = this.fb.group({
      destination: [''],
      checkInDate: [''],
      checkOutDate: [''],
      arrival: [''],
      passengerNumber: ['']
    });

    const today = new Date();
    const next15Days = new Date(today.getTime() + 15 * 24 * 60 * 60 * 1000);

    this.minDate = today.toISOString().split('T')[0];
    this.maxDate = next15Days.toISOString().split('T')[0];
  }

  navigateToDisplayServices(){
    if(this.bookingForm){
      this.userService.postUserSearchForServices(this.bookingForm.value).subscribe((result)=>{
        this.router.navigate(['/user-pannel/display-services'])
      },(error) => {
        console.error('Login error:', error);
      })
    }

  }
  
  

}