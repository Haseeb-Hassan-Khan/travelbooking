import { createAction, props } from '@ngrx/store';
import { Signup } from '../store/travel.model'

export const signupLoadItems = createAction('[Item] Load Items');
export const signupLoadSuccess = createAction('[Item] Load Items Success', props<{ items: Signup[] }>());
export const signupLoadFailure = createAction('[Item] Load Items Failure', props<{ error: any }>());

export const postData = createAction('[Data] Post Data', props<{ item: Signup }>());
export const postSignupDataSuccess = createAction('[Data] Post Data Success', props<{ item: Signup }>());
export const postSignupDataFailure = createAction('[Data] Post Data Failure', props<{ error: string }>());


