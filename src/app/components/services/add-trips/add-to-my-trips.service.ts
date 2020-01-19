import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddToMyTripsService {
  private myTrips = [{name: "israel"}, {name: "usa"}];

  
  constructor() {
    
   }
  
  getMyTrips() {
    return this.myTrips;
  }
  
  addToMyTrips(countryObj) {
    this.myTrips.push(countryObj);
    console.log("my t", this.myTrips)
  }
  


}
