import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

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

}
