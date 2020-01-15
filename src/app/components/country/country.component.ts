import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {
  @Input() countryObj: any
  @Output() delEvent = new EventEmitter<any>()
  constructor() { }

  ngOnInit() {
  }

}
