import { Injectable } from '@angular/core';
import countriesData from '../../../../countries.js';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {
  private countries: Array<any>
  
  constructor() { 
    this.countries = countriesData;
  }
  getCountries() { 
    return this.countries 
  }
}
