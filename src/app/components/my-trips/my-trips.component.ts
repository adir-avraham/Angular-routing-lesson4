import { Component, OnInit } from '@angular/core';

import { CountriesService } from '../services/service-countries/countries.service'

@Component({
  selector: 'app-my-trips',
  templateUrl: './my-trips.component.html',
  styleUrls: ['./my-trips.component.css']
})
export class MyTripsComponent implements OnInit {
  public myTrips: Array<any>;
  constructor(private countriesService: CountriesService ) {
  }
  
  ngOnInit() {
    
    this.myTrips = this.countriesService.getTrips();

  }
  
  deleteTrip(countryObj) {
    this.countriesService.deleteFromMyTrips(countryObj)
    this.myTrips = this.countriesService.getTrips();
  }


}
