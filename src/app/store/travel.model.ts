export interface Signup
{
  signup_name: any;
  signup_email:any;
  signup_password:any;
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