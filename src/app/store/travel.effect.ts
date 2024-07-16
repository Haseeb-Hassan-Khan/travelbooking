import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { AuthServiceService } from '../auth/auth-service.service';
import { signupLoadItems, signupLoadFailure, signupLoadSuccess, postSignupDataFailure, postData, postSignupDataSuccess} from './travel.action';

@Injectable()
export class travelEffects {
  constructor(private actions$: Actions, private http: HttpClient, private dataService: AuthServiceService) { }

  loadData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(signupLoadItems),
      mergeMap(() => {
        console.log('Load Data action dispatched');
        return this.dataService.getSignupData().pipe(
          map(items => {
            console.log('Data loaded successfully in effect:', items);
            return signupLoadSuccess({ items });
          }),
          catchError(error => {
            console.error('Error loading data:', error);
            return of(signupLoadFailure({ error: error.message }));
          })
        );
      })
    )
  );

  postData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(postData),
      switchMap(action => {
        console.log('Post Data action dispatched', action);
        return this.dataService.postSignUpData(action.item).pipe(
          map((item: any) => {
            console.log('Data posted successfully:', item);
            return postSignupDataSuccess({ item });
          }),
          catchError(error => {
            console.error('Error posting data:', error);
            return of(postSignupDataFailure({ error: error.message }));
          })
        );
      })
    )
  );

  

}