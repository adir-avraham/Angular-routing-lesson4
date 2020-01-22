import { Component, OnInit } from '@angular/core';
import { AddOffersService } from '../services/add-offers/add-offers.service';

@Component({
  selector: 'app-offers-list',
  templateUrl: './offers-list.component.html',
  styleUrls: ['./offers-list.component.css']
})
export class OffersListComponent implements OnInit {
  offers;
  constructor(private addOffersService: AddOffersService) {
    this.offers = addOffersService.getOffers();
   }

  ngOnInit() {
    console.log(this.offers)
  }

  deleteOffer(customerId) {
    this.offers = this.addOffersService.deleteOffer(customerId);
  }

}
