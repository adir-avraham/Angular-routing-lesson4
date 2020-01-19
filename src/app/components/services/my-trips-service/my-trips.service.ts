import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyTripsService {
  public myTrips: any = [{name: "israel"}, {name: "usa"}];
  constructor() { }

  getMyTrips() {
    return this.myTrips;
  }

}
