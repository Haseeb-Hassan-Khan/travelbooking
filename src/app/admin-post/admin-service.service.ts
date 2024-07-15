import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BusOwner } from '../user-pannel/user-model';

@Injectable({
  providedIn: 'root'
})


export class AdminServiceService {

  constructor(private httpClient:HttpClient) { }
  
  postBusOwner(data:any){
    return this.httpClient.post('http://localhost:3000/busowner-post', data)
  }
  getBusOwnerPost(){
    return this.httpClient.get<BusOwner[]>('http://localhost:3000/busowner-post')
  }

}
