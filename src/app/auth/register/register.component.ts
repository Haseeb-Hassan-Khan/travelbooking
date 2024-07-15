import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { postData, signupLoadItems } from 'src/app/store/travel.action';
import { DataState, Signup } from 'src/app/store/travel.model';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  items: Observable<Signup[]> = of([]);
  loading: Observable<boolean> = of(false);
  error: Observable<string | null> = of(null);
  itemList: Signup[] = [];  // Class-level variable to store items
  showAlert: boolean = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private store: Store<{ travel: DataState }>,
    private authService:AuthServiceService,
  ) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      signup_name: ['', [Validators.required]],
      signup_email: ['', [Validators.required, Validators.email]],
      signup_password: ['', [Validators.required]],
      rememberMe: [false]
    });
    this.clearLocalStorage();
    this.store.dispatch(signupLoadItems());

    // Access the state directly
    this.items = this.store.select(state => state.travel.items);
    this.loading = this.store.select(state => state.travel.loading);
    this.error = this.store.select(state => state.travel.error);

    this.items.subscribe(items => {
      console.log('Items from store:', items);
      this.itemList = items;  // Assign the subscribed items to the class-level variable
    });

  }

  onSubmit() {
    debugger
   
    const formEmail = this.registerForm.value.signup_email;
    const existingEmail = this.itemList.some(data => data.signup_email == formEmail);
    if (this.registerForm.valid && !existingEmail) {
      this.store.dispatch(postData({ item: this.registerForm.value }));
      this.router.navigate(['/log-in']);
    }else if (this.registerForm.valid && existingEmail) {
      this.showAlert = true;
      setTimeout(() => {
        this.showAlert = false; // Hide alert after 2 seconds
      }, 2000);
    } else {
      this.registerForm.markAllAsTouched();
    }
  }
  clearLocalStorage() {
    localStorage.clear();
  }

  signUpFacebook(): void {}

  signUpGoogle(): void {}
}

