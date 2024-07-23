import { createReducer, on } from '@ngrx/store';
import {initialDataState } from '../store/travel.model';
import { signupLoadFailure, signupLoadSuccess,signupLoadItems,postData, postSignupDataFailure, postSignupDataSuccess, postBookingConfirmation, postBookingConfirmationSuccess, postBookingConfirmationFailure } from './travel.action';

export const travelReducer = createReducer(
  initialDataState,
  on(signupLoadItems, state => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(signupLoadSuccess, (state, { items }) => ({
    ...state,
    items,
    loading: false,
  })),
  on(signupLoadFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),
  on(postData, state => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(postSignupDataSuccess, (state, { item }) => ({
    ...state,
    item,
    loading: false,
  })),
  on(postSignupDataFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),
  on(postBookingConfirmation, state => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(postBookingConfirmationSuccess, (state, { item }) => ({
    ...state,
    item,
    loading: false,
  })),
  on(postBookingConfirmationFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),

);