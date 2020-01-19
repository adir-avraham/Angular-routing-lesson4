import { Component, OnInit } from '@angular/core';
import { AddToMyTripsService } from '../services/add-trips/add-to-my-trips.service';

@Component({
  selector: 'app-my-trips',
  templateUrl: './my-trips.component.html',
  styleUrls: ['./my-trips.component.css'],
  providers: [AddToMyTripsService]
})
export class MyTripsComponent implements OnInit {
  public myTrips: Array<any>;
  constructor(private addToMyTripsService: AddToMyTripsService ) {
  }
  
  ngOnInit() {
    
    this.myTrips = this.addToMyTripsService.getMyTrips()

  }
  
  


}
