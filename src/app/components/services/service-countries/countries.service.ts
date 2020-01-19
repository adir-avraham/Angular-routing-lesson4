import { Injectable } from '@angular/core';
import countriesData from '../../../../countries.js';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {
  private countries: Array<any>
  
  constructor() { 
    this.countries = countriesData.map(c => ({ ...c, isAdded: false }))
  }
  getCountries() { 
    return this.countries 
  }
  addToMyTrips(country) {
    country.isAdded = true;
  }

  deleteFromMyTrips(country) {
    country.isAdded = false;
  }

  getTrips() {
    console.log(this.countries.filter(c => c.isAdded))
    return this.countries.filter(c => c.isAdded)
  }
}
