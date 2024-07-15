export interface BusOwner {
    id: string;
    bus_name: string;
    email: string;
    vehicle_no: string | null;
    vehicle_imgUrl: string;
    destination?: string;
    arrival:any;
    message:any;
    recommend_survey: string;
    useful_survey:string;
  }

