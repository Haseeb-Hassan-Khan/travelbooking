export interface Signup
{
  signup_name: any;
  signup_email:any;
  signup_password:any;
}
export interface bookingConfirm {
  id: string;
  bus_name: string;
  service_name: string;
  vehicle_no: number;
  vehicle_imgUrl: string;
  arrival: string;
  destination: string;
  message: string;
  price: number;
  recommend_survey: string;
  useful_survey: string;
}


export interface DataState {
  items: Signup[];
  loading: boolean;
  error: string | null;
}

export const initialDataState: DataState = {
  items: [],
  loading: false,
  error: null,
};

export interface BookingConfirmState {
  bookings: bookingConfirm[];
  loading: boolean;
  error: string | null;
}

export const initialBookingConfirmState: BookingConfirmState = {
  bookings: [],
  loading: false,
  error: null,
};
