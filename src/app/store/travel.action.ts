import { createAction, props } from '@ngrx/store';
import { bookingConfirm, Signup } from '../store/travel.model'

export const signupLoadItems = createAction('[Item] Load Items');
export const signupLoadSuccess = createAction('[Item] Load Items Success', props<{ items: Signup[] }>());
export const signupLoadFailure = createAction('[Item] Load Items Failure', props<{ error: any }>());

export const postData = createAction('[Data] Post Data', props<{ item: Signup }>());
export const postSignupDataSuccess = createAction('[Data] Post Data Success', props<{ item: Signup }>());
export const postSignupDataFailure = createAction('[Data] Post Data Failure', props<{ error: string }>());

export const BookingConfirmationLoad = createAction('[Item] Load Items');

export const postBookingConfirmation = createAction('[Data] Post Data', props<{ item: bookingConfirm }>());
export const postBookingConfirmationSuccess = createAction('[Data] Booking Action', props<{ item: bookingConfirm }>());
export const postBookingConfirmationFailure = createAction('[Data] Post Data Failure', props<{ error: any }>());


