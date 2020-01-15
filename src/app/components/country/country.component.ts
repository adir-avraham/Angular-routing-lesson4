import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Router } from '@angular/router'

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {
  @Input() countryObj: any
  @Output() delEvent = new EventEmitter<any>()
  constructor(private router: Router) { }

  ngOnInit() {
  }

  onClick(countryObj) {
    this.router.navigate(['/countries', countryObj.name])
  }

}
