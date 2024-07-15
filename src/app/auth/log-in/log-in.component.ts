import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthServiceService } from '../auth-service.service';
import { Store } from '@ngrx/store';
import { DataState, Signup } from 'src/app/store/travel.model';
import { signupLoadItems } from 'src/app/store/travel.action';
import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})

export class LogInComponent implements OnInit {

  loginForm!:FormGroup;
  items: Observable<Signup[]> = of([]);
  loading: Observable<boolean> = of(false);
  error: Observable<string | null> = of(null);
  signupList: Signup[] = [];
  showAlert:boolean = false;

  constructor(private fb: FormBuilder,
    private authService:AuthServiceService,
    private store: Store<{ travel: DataState }>,
    private router:Router

  ){}

  ngOnInit(){
    this.loginForm= this.fb.group({
      login_email: ['', [Validators.required, Validators.email]],
      login_password: ['', [Validators.required]],
    })
    this.store.dispatch(signupLoadItems());

    // Access the state directly
    this.items = this.store.select(state => state.travel.items);
    this.loading = this.store.select(state => state.travel.loading);
    this.error = this.store.select(state => state.travel.error);

    this.items.subscribe(items => {
      this.signupList = items;  // Assign the subscribed items to the class-level variable
    });
  }

  onLogin(){
    const existingEmail = this.signupList.some(data => data.signup_email == this.loginForm.value.login_email && data.signup_password == this.loginForm.value.login_password);
    if (this.loginForm.valid && existingEmail) {
      this.authService.postLoginData(this.loginForm.value).subscribe((result)=>{
        localStorage.setItem('token', result.token);
        this.router.navigate(['/booking-menu'])
      },(error) => {
        console.error('Login error:', error);
      }
    )
    }else if(this.loginForm.valid && !existingEmail){
      this.showAlert = true;
      setTimeout(() => {
        this.showAlert = false; // Hide alert after 2 seconds
      }, 2000);
    }
    else{
      this.loginForm.markAllAsTouched()
    }
  }

}
