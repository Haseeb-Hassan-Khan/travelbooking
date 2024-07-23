import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { bookingConfirm } from '../store/travel.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  postUserSearchForServices(data:any){
    return this.httpClient.post('http://localhost:3000/post-User-SearchFor-Services', data)
  }

  getUserSearchForServices(){
    return this.httpClient.get('http://localhost:3000/post-User-SearchFor-Services')
  }

  postConfirmBooking(data:any){
    return this.httpClient.post<bookingConfirm>('http://localhost:3000/confirm-booking',data)
  }

  getConfirmBooking(){
    return this.httpClient.get('http://localhost:3000/confirm-booking')
  }

}
