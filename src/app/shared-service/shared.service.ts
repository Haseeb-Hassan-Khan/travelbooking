import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }
  private selectedBusOwnerSource = new BehaviorSubject<any>(null);
  selectedBusOwner$ = this.selectedBusOwnerSource.asObservable();

  setSelectedBusOwner(busOwner: any) {
    this.selectedBusOwnerSource.next(busOwner);
  }

}
