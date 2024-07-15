// src/app/auth/auth-service.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Signup } from '../store/travel.model';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private httpClient: HttpClient) { }

  postSignUpData(data: Signup): Observable<any> {
    return this.httpClient.post('http://localhost:3000/sign-up', data);
  }

  postLoginData(data: any): Observable<any> {
    return this.httpClient.post('http://localhost:3000/log-in', data);
  }

  getSignupData(): Observable<Signup[]> {
    return this.httpClient.get<Signup[]>('http://localhost:3000/sign-up');
  }

  getLoginData(): Observable<Signup[]> {
    return this.httpClient.get<Signup[]>('http://localhost:3000/log-in');
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }
}
