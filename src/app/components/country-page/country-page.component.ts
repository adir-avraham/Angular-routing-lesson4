import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import countriesData from '../../../../src/countries.js';


@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styleUrls: ['./country-page.component.css']
})

export class CountryPageComponent implements OnInit {
  public countryName: string;
  public countryFlag: string;
  public countryCapital: string;
  public countryAlpha3Code: string;
  public countryPopulation: number;
  public countryRegion: string;

  constructor(private route: ActivatedRoute) {
    
  }
  
  ngOnInit() {
    const name = this.route.snapshot.paramMap.get('name')
    this.countryName = name;
    const countery = countriesData.find(countery => countery.name === name)
    console.log(countery);
    this.countryFlag = countery.flag;
    this.countryCapital = countery.capital;
    this.countryAlpha3Code = countery.alpha3Code;
    this.countryPopulation = countery.population;
    this.countryRegion = countery.region;
  }

}
