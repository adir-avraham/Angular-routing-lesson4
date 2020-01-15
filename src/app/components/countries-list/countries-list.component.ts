import { Component, OnInit } from '@angular/core';
import countriesData from '../../../../src/countries.js';



@Component({
  selector: 'app-countries-list',
  templateUrl: './countries-list.component.html',
  styleUrls: ['./countries-list.component.css']
})
export class CountriesListComponent implements OnInit {

  public countries: Array<any>;

  constructor() {
    this.countries = countriesData;
   }

  ngOnInit() {
  }




}
