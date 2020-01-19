import { Component, OnInit } from '@angular/core';
import { AddToMyTripsService } from '../services/add-trips/add-to-my-trips.service';
import { CountriesService } from '../services/service-countries/countries.service'

@Component({
  selector: 'app-my-trips',
  templateUrl: './my-trips.component.html',
  styleUrls: ['./my-trips.component.css'],
  providers: [AddToMyTripsService]
})
export class MyTripsComponent implements OnInit {
  public myTrips: Array<any>;
  constructor(private addToMyTripsService: AddToMyTripsService, private countriesService: CountriesService ) {
  }
  
  ngOnInit() {
    
    this.myTrips = this.countriesService.getTrips();

  }
  
  deleteTrip(countryObj) {
    this.countriesService.deleteFromMyTrips(countryObj)
    this.myTrips = this.countriesService.getTrips();
  }


}
