import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Router } from '@angular/router'
import { AddToMyTripsService } from '../services/add-trips/add-to-my-trips.service';
import { CountriesService } from '../services/service-countries/countries.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css'],
  providers: [AddToMyTripsService]
})
export class CountryComponent implements OnInit {
  @Input() countryObj: any
  @Output() delEvent = new EventEmitter<any>()
  constructor(private router: Router, private addToMyTripsService: AddToMyTripsService, private countriesService: CountriesService) { }

  ngOnInit() {
  }

  onClick(countryObj) {
    this.router.navigate(['/countries', countryObj.name])
  }

  addTrip() {
    this.countriesService.addToMyTrips(this.countryObj)

  }
  
}
